import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video-section" className="py-20 px-10 circuit-bg bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl  text-black font-bold">
              Robotics is Fun,
              <br />
              <span className="hero-text">Exciting & Engaging!</span>
              
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Robotics In Academics is a unique hands-on robotics training 
              program initiated by Soham Academy of Human Excellence. It 
              aims to bring the latest and greatest technologies to the door 
              step of children so as to prepare them for a technologically 
              advanced world that they will inherit. Our well-structured training 
              program will assist children in developing a sustained scientific 
              temperament.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-dark rounded-lg overflow-hidden tech-glow">
              {!isPlaying ? (
                <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                  {/* Video Thumbnail/Placeholder */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                        <span className="text-2xl font-bold text-primary-foreground">R</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Soham Academy</h3>
                      <h3 className="text-lg text-white/80 mb-4">of Human Excellence</h3>
                      <h2 className="text-2xl font-bold text-white mb-8">Robotics in Academics</h2>
                    </div>
                    
                    {/* Feature Icons */}
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
                      {[
                        { icon: "🏫", label: "Training" },
                        { icon: "🤖", label: "Robotics Club" },
                        { icon: "⚙️", label: "Activities" },
                        { icon: "📊", label: "Projects" },
                        { icon: "🏆", label: "Exhibitions" },
                        { icon: "🔬", label: "Science Day" },
                        { icon: "📋", label: "Assessments" },
                        { icon: "🎓", label: "Certificates" }
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                            <span className="text-xl">{item.icon}</span>
                          </div>
                          <span className="text-xs text-white/80">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center tech-glow group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/BMjo7qHE58k?autoplay=1"
                  title="Robotics in Academics"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;