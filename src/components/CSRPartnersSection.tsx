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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* CSR Partners */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">CSR Partners</h2>
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
              {[{
                icon: <Mail className="w-6 h-6 text-primary" />,
                title: "Write to us",
                value: "admin@sohamacademy.org"
              }, {
                icon: <Phone className="w-6 h-6 text-primary" />,
                title: "Call us at",
                value: "+91 80996 43298"
              }, {
                icon: <MapPin className="w-6 h-6 text-primary" />,
                title: "Soham Academy",
                value: "Bagh Amberpet, Hyderabad, Telangana"
              }].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className={i === 2 ? "text-muted-foreground" : "text-primary"}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 tech-glow animate-slide-in-right">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Name", placeholder: "Your name", type: "text" },
                  { label: "Phone", placeholder: "Your phone number", type: "text" }
                ].map((field, i) => (
                  <div key={i} className="relative group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">{field.label}</label>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-purple border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {[
                { label: "Email", placeholder: "Your email address", type: "email" },
                { label: "Subject", placeholder: "Subject of your inquiry", type: "text" }
              ].map((field, i) => (
                <div key={i} className="relative group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">{field.label}</label>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    className=" border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              ))}

              <div className="relative group animate-fade-in" style={{ animationDelay: "200ms" }}>
                <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className=" border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full tech-glow hover:scale-105 transition-transform duration-300"
              >
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
