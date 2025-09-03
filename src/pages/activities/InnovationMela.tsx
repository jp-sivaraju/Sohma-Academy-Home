import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, ExternalLink } from "lucide-react";

const InnovationMela = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const melaData = {
    counter: "ROBOTICS 2023-24 INNOVATION MELA TRAINING COUNTER\n\nSTUDENTS - 5103 | SCHOOLS - 387 | INNOVATION COACHES - 422",
    projects: [
      {
        id: "project1",
        title: "Smart Agriculture Robot",
        school: "ZPHS Boduppal",
        description: "Automated farming solution with IoT sensors",
        image: "/api/placeholder/300/200",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Agriculture",
        coach: "Dr. Rajesh Kumar"
      },
      {
        id: "project2", 
        title: "Home Automation System",
        school: "GHS Police Boys",
        description: "Voice-controlled smart home solution",
        image: "/api/placeholder/300/200",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "IoT",
        coach: "Mrs. Priya Sharma"
      },
      {
        id: "project3",
        title: "Healthcare Monitoring Bot",
        school: "ZPHS Mallagiri",
        description: "AI-powered patient monitoring system",
        image: "/api/placeholder/300/200", 
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Healthcare",
        coach: "Mr. Anil Reddy"
      },
      {
        id: "project4",
        title: "Environmental Cleanup Robot",
        school: "GBHS CPL",
        description: "Autonomous waste collection and sorting",
        image: "/api/placeholder/300/200",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Environment",
        coach: "Dr. Sunitha Rao"
      },
      {
        id: "project5",
        title: "Educational AI Assistant",
        school: "ZPHS Nehrunagar",
        description: "Interactive learning companion for students",
        image: "/api/placeholder/300/200",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        category: "Education",
        coach: "Mr. Vikram Singh"
      },
      {
        id: "project6",
        title: "Traffic Management System",
        school: "ZPHS Ramanthapur",
        description: "Smart traffic flow optimization",
        image: "/api/placeholder/300/200",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Transportation",
        coach: "Mrs. Kavitha Nair"
      }
    ]
  };

  const handleYoutubeClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDetailsClick = (projectId: string) => {
    // Open project details modal or navigate to details page
    console.log(`Opening details for project: ${projectId}`);
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
              <h1 className="text-4xl md:text-5xl text-primary font-bold mb-6 animate-fade-in">Innovation Mela</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Showcasing innovative robotics projects developed by our students across various domains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Counter */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-pre-line">
              {melaData.counter}
            </h2>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {melaData.projects.map((project) => (
              <Card 
                key={project.id}
                className={`group cursor-pointer overflow-hidden border-border transition-all duration-300 ${
                  hoveredCard === project.id 
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'hover:border-primary/50'
                }`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Overlay with actions - only visible on hover */}
                  <div className={`absolute inset-0 bg-black/70 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDetailsClick(project.id)}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleYoutubeClick(project.youtubeUrl)}
                      className="bg-red-600 hover:bg-red-700 text-white border-red-600"
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      YouTube
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">{project.school}</p>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Coach: {project.coach}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleDetailsClick(project.id)}
                        className="text-primary hover:underline"
                      >
                        View Details
                      </button>
                      <span>|</span>
                      <button 
                        onClick={() => handleYoutubeClick(project.youtubeUrl)}
                        className="text-red-500 hover:underline"
                      >
                        Watch Demo
                      </button>
                    </div>
                  </div>
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

export default InnovationMela;