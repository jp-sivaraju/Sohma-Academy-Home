import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import ftc1 from "../assets/ftc1.png"

import ftc2 from "../assets/ftc2.png"
import ftc3 from "../assets/ftc3.png"
import ftc4 from "../assets/ftc4.png"


const FTC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample FTC images - these would be your actual competition photos
  const ftcImages = [
    ftc1,
    ftc2,
    ftc3,
    ftc4
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
              <h1 className="text-4xl md:text-5xl  text-primary font-bold mb-6 animate-fade-in">First Tech Challenge (FTC)</h1>
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

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl max-h-[95vh] w-full">
            {/* Control Bar */}
            <div className="absolute -top-16 left-0 right-0 flex items-center justify-between text-white z-10">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.open(selectedImage, '_blank')}
                  className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm">Open</span>
                </button>
                
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'FTC Competition Image',
                        url: selectedImage
                      });
                    } else {
                      navigator.clipboard.writeText(selectedImage);
                    }
                  }}
                  className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title="Share"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span className="text-sm">Share</span>
                </button>
              </div>
              
              <button
                onClick={closeLightbox}
                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
                <span className="text-sm">Close</span>
              </button>
            </div>

            {/* Image Container with Zoom */}
            <div className="relative group">
              <img
                src={selectedImage}
                alt="FTC Competition"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 cursor-zoom-in hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Zoom Indicator */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-sm">Click to zoom</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {ftcImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = ftcImages.indexOf(selectedImage);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : ftcImages.length - 1;
                    setSelectedImage(ftcImages[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  title="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = ftcImages.indexOf(selectedImage);
                    const nextIndex = currentIndex < ftcImages.length - 1 ? currentIndex + 1 : 0;
                    setSelectedImage(ftcImages[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  title="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FTC;