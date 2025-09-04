import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import circuitBg from "@/assets/circuit-bg.jpg";
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import pro1 from "../assets/Pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import pro5 from "../assets/pro5.png"
import pro6 from "../assets/pro6.png"
import pro7 from "../assets/pro7.png"

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src={circuitBg}
            alt="Circuit Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 animate-tech-pulse" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4  text-white text-center ">
          <h3 className=" md:text-6xl font-bold mb-8 animate-fade-in-up">
            We believe that Robotics is
            <br />
            one of those skills which must
            <br />
            be taught to children at the
            <br />
            school level.
          </h3>
          
          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold mb-4 hero-text">That's Why</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              We have put in every effort to
              
              make it easy to follow and
            
              execute Robotics projects in
            
              schools.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-12">
            <div>
              <h3 className="text-3xl font-medium text-[#FAAB34] mb-4 tracking-wider">
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
                src={about1}
                alt="Students in classroom"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={about2}
                alt="Robotics workshop"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={about3}
                alt="Group learning session"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
  <section className="py-2 circuit-bg">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8"> {/* reduced from mb-16 to mb-8 */}
      <h3 className="text-3xl font-medium text-primary mb-2 tracking-wider">
        ABOUT SOHAM ACADEMY
      </h3>
    </div>

    <div
      ref={missionRef}
      className={`max-w-5xl mx-auto transition-all duration-1000 px-2 sm:px-4 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-background border border-border shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl space-y-10">
        {/* Icon + Title */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-float shadow-md">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-primary animate-fade-in">Our Mission</h3>
        </div>

        {/* Mission Statement */}
        <p className="text-center text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          It is our mission to complement the efforts of the schools in doing what they are unable to do and in teaching what they 
          are not equipped to teach.
        </p>

        {/* Program List */}
        <div className="space-y-6">
          <h4 className="text-center text-lg font-semibold text-foreground">Our Programs Include:</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm md:text-base text-foreground">{program}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Impact */}
        <p className="text-center text-muted-foreground text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
          Across all programs being rolled out, children are at the center and the driving force. We unlock the potential of thousands of
          children by giving them access to high-impact educational experiences.
        </p>

        {/* Approval Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground mt-4">
          <div className="bg-muted px-4 py-1 rounded-full font-semibold">
            ✅ 12A & 80G Approved
          </div>
          <div className="bg-muted px-4 py-1 rounded-full font-semibold">
            🤝 CSR Certified
          </div>
          <div className="bg-muted px-4 py-1 rounded-full font-semibold">
            🌐 CSO Registered
          </div>
        </div>
      </Card>
    </div>
  </div>
</section>


      {/* Team Section */}
    <section className="py-2">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-2xl font-medium text-primary mb-4 tracking-wider animate-fade-in">
        OUR LEADERSHIP
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold animate-fade-in animation-delay-200">
        Awesome People Behind Us
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
        { name: "Komaragiri Sahadev", role: "Founder & Director, Soham Academy of Human Excellence", image: pro1 },
        { name: "B Jeshwanth", role: "Program Coordinator", image: pro2 },
        { name: "Ganitha", role: "Program Coordinator", image: pro3 },
        { name: "Y Anusha", role: "Core Team Member", image: pro4 },
        { name: "Spandana", role: "Core Team Member", image: pro5 },
        { name: "Rahul Goud", role: "Core Team Member", image: pro6 },
        { name: "Ramya", role: "Core Team Member", image: pro7 },
      ].map((member, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover rounded-lg border-2 border-border group-hover:border-primary transition-colors duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="absolute bottom-3 left-3 right-3 text-white text-center">
              <p className="text-sm font-semibold">{member.name}</p>
              <p className="text-xs opacity-80">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="mt-20">
   <Footer />
</div>
     
    </div>
  );
};

export default About;