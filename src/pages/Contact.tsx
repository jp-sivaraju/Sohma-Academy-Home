import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Cyan accent line - animated from bottom to top */}
            <div className="absolute left-0 top-0 w-1 h-20 bg-primary animate-slide-up"></div>
            <div className="pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Would you like to have a similar program introduced for your school or 
                institution's children? Then don't hesitate to reach us out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
              <p className="text-muted-foreground mb-12">
                You can reach us out on the below mentioned details
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Mail Us at</h3>
                    <a 
                      href="mailto:admin@sohamacademy.org"
                      className="text-primary hover:underline text-lg"
                    >
                      admin@sohamacademy.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Call Us on</h3>
                    <a 
                      href="tel:+918099643298"
                      className="text-primary hover:underline text-lg"
                    >
                      +91 80996 43298
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Soham Academy</h3>
                    <p className="text-muted-foreground text-lg">
                      Bagh Amberpet, Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      placeholder="Name"
                      className="bg-tech-light border-border focus:border-primary transition-colors h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input 
                      placeholder="Phone"
                      className="bg-tech-light border-border focus:border-primary transition-colors h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Email"
                    className="bg-tech-light border-border focus:border-primary transition-colors h-12"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    placeholder="Subject"
                    className="bg-tech-light border-border focus:border-primary transition-colors h-12"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Message"
                    rows={6}
                    className="bg-tech-light border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-medium tech-glow hover:scale-105 transition-transform"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;