import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, School, MapPin, Lightbulb, Calendar } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="count-up">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: Users,
      title: "Hands-On Training",
      description: "This is an experiential training on Robotics (Arduino UNO platform) provided to high school students of public & private institutions.",
      featured: false
    },
    {
      icon: School,
      title: "Experienced Engineers",
      description: "We have the necessary experience in training hundreds of students at a time and also working with multiple schools simultaneously.",
      featured: false
    },
    {
      icon: Lightbulb,
      title: "Creative Robotics Projects",
      description: "Children will complete 21 activities that make use of various types of sensors, motors, displays and other accessories.",
      featured: false
    },
    {
      icon: Calendar,
      title: "School Robotics Clubs",
      description: "Once the training is completed, we organize Robotics Clubs in each of the schools and nurture them with new innovative programs.",
      featured: false
    }
  ];

  const stats = [
    { icon: Users, number: 83211, label: "Students Trained", suffix: "" },
    { icon: School, number: 438, label: "Schools Assisted", suffix: "" },
    { icon: MapPin, number: 4, label: "States Reached", suffix: "" },
    { icon: MapPin, number: 27, label: "Districts Benefited", suffix: "" },
    { icon: Lightbulb, number: 6141, label: "Creative Projects", suffix: "" },
    { icon: Calendar, number: 5, label: "Years of Excellence", suffix: "+" }
  ];

  return (
    <section className=" circuit-bg bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-medium text-primary mb-4 tracking-wider">
            ROBOTICS IN ACADEMICS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Our Program Highlights
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
  key={index}
  className={`p-6 text-center bg-white rounded-xl border border-gray-200 transition-all duration-300 transform
    hover:border-primary hover:ring-2 hover:ring-primary hover:shadow-xl hover:scale-105
    ${highlight.featured ? 'ring-2 ring-primary' : ''}`}
>
  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
    <Icon className="w-8 h-8 text-primary-foreground" />
  </div>
  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
  <p className="text-sm text-muted-foreground leading-relaxed">
    {highlight.description}
  </p>
</Card>

            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-primary mb-4 tracking-wider">
              ROBOTICS IN ACADEMICS
            </h3>
            <h2 className="text-2xl font-bold mb-4">
              Our track history of Robotics in Academics Competition Program records
            </h2>
          </div>

          {/* Stats Background Image Overlay */}
          <div className="relative bg-gradient-dark rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-white" />
            
            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-12 text-white">
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div
        key={index}
        className="text-center bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary hover:shadow-lg transition-all duration-300"
      >
        <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
        <div className="text-3xl  text-black font-bold mb-2">
          <Counter end={stat.number} suffix={stat.suffix} />
        </div>
        <p className="text-sm text-black">{stat.label}</p>
      </div>
    );
  })}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;