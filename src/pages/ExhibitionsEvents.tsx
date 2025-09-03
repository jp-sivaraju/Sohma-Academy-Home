import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ee1 from "../assets/ee1.png"
import ee2 from "../assets/ee2.png"
import ee3 from "../assets/ee3.png"


const ExhibitionsEvents = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const eventsData = [
    {
      id: "event1",
      title: "1st Annual Robotics Exhibition - 2023",
      subtitle: "Our first milestone - a grand opening event",
      description: "Students enthusiastic participation at",
      images: [
        ee1,
        ee2,
        ee3
      ]
    },
 
  ];

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        eventsData.forEach(event => {
          const currentIndex = newIndex[event.id] || 0;
          newIndex[event.id] = (currentIndex + 1) % event.images.length;
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = (eventId: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const handleNextImage = (eventId: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) + 1) % imagesLength
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-20 bg-primary animate-slide-up"></div>
            <div className="pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Exhibitions & Events</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Take a look at the progress flying our robotics exhibitions & events conducted 
                at various occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsData.map((event, index) => (
              <Card key={event.id} className="overflow-hidden border-border hover:border-primary transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.images[currentImageIndex[event.id] || 0]}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePrevImage(event.id, event.images.length)}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleNextImage(event.id, event.images.length)}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {event.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          (currentImageIndex[event.id] || 0) === imgIndex ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{event.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExhibitionsEvents;