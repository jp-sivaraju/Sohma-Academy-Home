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
            <Card className="p-8 tech-glow">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold">Mission</h3>
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

      <Footer />
    </div>
  );
};

export default About;