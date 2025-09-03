import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const CSRPartnersSection = () => {
  const partners = [
    { name: "Accenture", logo: "🏢" },
    { name: "Synchrony", logo: "🔄" },
    { name: "NCG Limited", logo: "📊" },
    { name: "SAP Technologies", logo: "💼" },
    { name: "NTT Data", logo: "🌐" },
    { name: "Coforge", logo: "⚡" },
    { name: "KRM", logo: "🔧" },
    { name: "LET Technology Services", logo: "🔬" },
    { name: "AMD", logo: "💻" },
    { name: "Bimini Street", logo: "🏗️" },
    { name: "Gainsight", logo: "📈" },
    { name: "StudiRanger", logo: "🎓" },
    { name: "Primavera", logo: "🌸" },
    { name: "Nimble", logo: "⚡" }
  ];

  return (
    <section className="py-20 circuit-bg">
      <div className="container mx-auto px-4">
        {/* CSR Partners */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Our CSR Partners</h2>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-4 hover:scale-105 transition-all duration-300 tech-glow flex flex-col items-center justify-center min-h-[100px] bg-card rounded-lg border border-border hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-2 transition-transform duration-300 hover:scale-110">{partner.logo}</div>
                <span className="text-sm font-medium text-center">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 animate-fade-in">Want to work with us?</h3>
            <p className="text-muted-foreground mb-8 animate-fade-in animation-delay-300">
              You can reach out via the below mentioned details
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Write to us</p>
                  <p className="text-primary">admin@sohamacademy.org</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call us at</p>
                  <p className="text-primary">+91 80996 43298</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Soham Academy</p>
                  <p className="text-muted-foreground">
                    Bagh Amberpet, Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Preview */}
          <Card className="p-8 tech-glow animate-slide-in-right">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-tech-light border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input 
                    placeholder="Your phone number" 
                    className="bg-tech-light border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-tech-light border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Subject of your inquiry" 
                  className="bg-tech-light border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="bg-tech-light border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full tech-glow">
                SUBMIT
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CSRPartnersSection;