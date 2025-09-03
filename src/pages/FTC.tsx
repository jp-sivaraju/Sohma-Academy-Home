import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const FTC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample FTC images - these would be your actual competition photos
  const ftcImages = [
    "/lovable-uploads/9f636669-0b5d-4cbd-8674-e435061416ed.png",
    "/lovable-uploads/aafe940f-9f44-4180-95a4-b769b4b70e95.png",
    "/lovable-uploads/3aa18a53-51db-4237-8189-88f8c71e3d70.png",
    "/lovable-uploads/3ac74b77-1d7b-4aed-9ac3-1993dfecd735.png",
    "/lovable-uploads/03d43c1b-0227-4294-86b5-d2f962ae3d3f.png",
    "/lovable-uploads/21efb942-abd8-495d-8532-eb28e9f999c0.png"
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">First Tech Challenge (FTC)</h1>
              <p className="text-lg text-muted-foreground max-w-4xl animate-fade-in-delayed">
                We, Soham Academy (#24067) have made our debut in the First Tech Challenge (FTC), joining a vibrant community of innovators from
                India, Kazakhstan and Sri Lanka! This was our first-ever international Robotics Competition participation. Our Robotics Club students
                from ZPHS, Boduppal and GHS Police Boys, CPL took active participation and impressed everyone during pit interviews, dean's
                interviews and judges' interviews, showcasing our meticulously crafted robot. This participation in FTC was a landmark event for us,
                igniting a new level of inspiration for further innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ftcImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`FTC Competition ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">FTC Competition</p>
                    <p className="text-xs opacity-80">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="FTC Competition"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FTC;