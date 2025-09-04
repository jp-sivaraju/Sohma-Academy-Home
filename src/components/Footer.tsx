import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              📧 admin@sohamacademy.org
            </p>
            <p className="text-sm text-muted-foreground">
              📞 +91 90008 43268
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Copyright © Soham Academy of Human Excellence | Designed & Developed by{" "}
              <Link to="/" className="text-primary hover:underline">
               Srinishtha Technologies LLP
              </Link>
            </p>
          </div>

          {/* Logo */}
          <div className="mt-4 md:mt-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">R</span>
              </div>
              <span className="text-sm font-medium">Soham Academy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;