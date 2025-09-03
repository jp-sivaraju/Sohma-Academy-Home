import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const steps = [
    { step: "1", title: "We Assess School Readiness", description: "Initial assessment of school infrastructure and student readiness" },
    { step: "2", title: "School Assigns Program Coordinator", description: "Dedicated coordinator ensures smooth program implementation" },
    { step: "3", title: "We Assign Course Mentors", description: "Expert mentors guide students through the robotics curriculum" },
    { step: "4", title: "School Identifies Participants", description: "Selection of enthusiastic students for the program" },
    { step: "5", title: "We Implement Curriculum at the School", description: "Hands-on robotics training begins at the school premises" },
    { step: "6", title: "We Establish and Nurture Robotics Club", description: "Creating sustainable robotics communities within schools" },
    { step: "7", title: "School Organizes Robotics Exhibition", description: "Showcase student projects and achievements to the community" },
    { step: "8", title: "School Participates in Innovation Challenges", description: "Students compete in regional and national competitions" }
  ];

  const testimonials = [
    { name: "Jaya Amarthu", title: "10th Class, ZPHS Officer", content: "I have worked on this app as an innovative marketing method. We started my engineering which is very informative. The experimental this course has given me experience and my career which was very important for my growth.", rating: 5 },
    { name: "M. Soma Lecture", title: "District Officer, Warangal Rural", content: "Even I gained a lot by being a part of the program. Our Government school has been remarkably advancing technology in electronics, robotics and automation experience. Their hands-on approach is incredibly innovative bringing to me the kids to practice using sensors and electronic components." },
    { name: "M. Prashanth", title: "10th Class, ZPHS, RDK", content: "I have joined Soham Academy in 2020. The hands-on learning experience has remarkably enhanced my robotics skills. This program delivers such an excellent foundation for young students and various competitions. Have significantly improved their critical and innovational thinking. My first and experience was educational and contributed to the enhanced." },
    { name: "Nanika", title: "Teacher, ZPHS", content: "Seeing all the children's enthusiasm this way without any form of reluctance and so into the learning of STEM programming with real world challenges." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* How It Works Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-medium text-primary mb-4 tracking-wider">OUR PROGRAM PLANNER</h3>
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`p-6 text-center tech-glow transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group hover:ring-2 hover:ring-primary`}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              <h3 className="font-semibold mb-3 text-sm group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-medium text-primary mb-4 tracking-wider">TESTIMONIALS</h3>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto flex items-center">
          {/* Left Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0 z-20 bg-white shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Testimonial Cards */}
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="p-8 mx-4 tech-glow">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < (testimonial.rating || 5) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-6 text-center">"{testimonial.content}"</blockquote>
                    <div className="text-center">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0 z-20 bg-white shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-primary" : "bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
