import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import circuitBg from "@/assets/circuit-bg.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    "English Proficiency",
    "Learning Arithmetic",
    "Learning through Story",
    "Athletics & Sports",
    "Human Excellence",
    "Emerging Technologies",
    "Robotics in Academics",
    "Soham Leadership Program",
    "Soham Career Guidance",
    "Soham Fine Arts Program"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={circuitBg}
            alt="Circuit Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 animate-tech-pulse" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            We believe that Robotics is
            <br />
            one of those skills which must
            <br />
            be taught to children at the
            <br />
            school level.
          </h1>
          
          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold mb-4 hero-text">That's Why</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have put in every effort to
              <br />
              make it easy to follow and
              <br />
              execute Robotics projects in
              <br />
              schools.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-medium text-primary mb-4 tracking-wider">
                HISTORY
              </h3>
              <h2 className="text-3xl font-bold mb-6">
                Started with the aim to bring the knowledge of Robotics to the schools
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Back in 2016, when technology was largely very complex. Due created a 
                  program - Robotics In Academics - that aim to bring the technology to 
                  school students. The program was named then as a part of Telangana has 
                  very Bharat. After couple of years of teaching at the NITI aayog, which 
                  allowed us to understand the market better, we recognized that there was 
                  market growth potential. Students wanted to learn something new, designing 
                  and executing electronics projects or embedded systems implementation.
                </p>
                <p>
                  After our schools, and therefore our kids, opened to the 
                  opportunities of what's possible in today's technological landscape. In 
                  2019, we formed "a path to Sohan Roos. Although Soham can give the 
                  teachers in rural schools that they should also have access to their 
                  education systems and digital systems. So we want students to continue 
                  learning something new. Teaching children via art, online games skills.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img
                src="/placeholder.svg"
                alt="Students in classroom"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Robotics workshop"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Group learning session"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-primary mb-4 tracking-wider">
              ABOUT SOHAM ACADEMY
            </h3>
          </div>
          
          <div
            ref={missionRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="p-8 tech-glow hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold animate-fade-in">Mission</h3>
              </div>
              
              <p className="text-center text-lg text-muted-foreground mb-8">
                It is our mission to complement the efforts of the schools in doing what they are unable to do and in teaching what they 
                are not equipped to teach.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">A growing list of our programs now include:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-muted-foreground">
                Across all programs being rolled out, children are the center and the drivers of our program. "We do not change anything 
                the most of our program - we unlock thousands of children in giving beneficial from our programs.
              </p>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Our organisation has both <span className="font-semibold">12A</span> and 
                  <span className="font-semibold"> 80G approval</span>.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our organisation also has both <span className="font-semibold">CSR</span> and 
                  <span className="font-semibold"> CSO approval</span>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-primary mb-4 tracking-wider animate-fade-in">
              OUR LEADERSHIP
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in animation-delay-200">
              Awesome People Behind Us
            </h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Dr. Rajesh Kumar", role: "Founder & CEO", image: "/placeholder.svg" },
              { name: "Priya Sharma", role: "Academic Director", image: "/placeholder.svg" },
              { name: "Anjali Reddy", role: "Program Manager", image: "/placeholder.svg" },
              { name: "Vikram Singh", role: "Technical Lead", image: "/placeholder.svg" },
              { name: "Meera Patel", role: "Training Coordinator", image: "/placeholder.svg" },
              { name: "Arjun Mehta", role: "Innovation Manager", image: "/placeholder.svg" },
              { name: "Kavitha Rao", role: "Operations Head", image: "/placeholder.svg" },
              { name: "Rohit Agarwal", role: "Research Director", image: "/placeholder.svg" },
              { name: "Deepika Nair", role: "Quality Assurance", image: "/placeholder.svg" },
              { name: "Suresh Gupta", role: "Field Coordinator", image: "/placeholder.svg" },
              { name: "Nisha Joshi", role: "Student Relations", image: "/placeholder.svg" },
              { name: "Kiran Kumar", role: "Tech Support", image: "/placeholder.svg" },
              { name: "Pooja Verma", role: "Content Developer", image: "/placeholder.svg" },
              { name: "Rahul Krishnan", role: "Partnership Manager", image: "/placeholder.svg" },
              { name: "Sneha Iyer", role: "Marketing Head", image: "/placeholder.svg" },
              { name: "Amit Khanna", role: "Finance Manager", image: "/placeholder.svg" },
              { name: "Divya Pandey", role: "HR Manager", image: "/placeholder.svg" },
              { name: "Harsh Agarwal", role: "IT Administrator", image: "/placeholder.svg" },
              { name: "Ravi Shankar", role: "Regional Manager", image: "/placeholder.svg" },
              { name: "Swati Singh", role: "Curriculum Designer", image: "/placeholder.svg" },
              { name: "Manoj Tiwari", role: "Equipment Manager", image: "/placeholder.svg" },
              { name: "Neha Kapoor", role: "Communications Lead", image: "/placeholder.svg" },
              { name: "Sandeep Roy", role: "Data Analyst", image: "/placeholder.svg" },
              { name: "Preeti Agarwal", role: "Event Coordinator", image: "/placeholder.svg" }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-lg border-2 border-border group-hover:border-primary transition-colors duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-2 left-2 right-2 text-white text-center">
                    <p className="text-xs font-medium truncate">{member.name}</p>
                    <p className="text-xs opacity-80 truncate">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;