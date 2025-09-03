import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const activitiesSubmenu = [
    { name: "Training", path: "/activities/training" },
    { name: "Challenges", path: "/activities/challenges" },
    { name: "Innovation Mela", path: "/activities/innovation-mela" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-background font-bold text-lg">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">Robotics In Academics</span>
              <span className="text-xs text-muted-foreground leading-none">Soham Academy of Human Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-foreground"
              }`}
            >
              About Us
            </Link>
            
            {/* Activities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("activities")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  location.pathname.startsWith("/activities") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => handleDropdownToggle("activities")}
              >
                <span>Activities</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "activities" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "activities" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg animate-fade-in">
                  {activitiesSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/exhibitions-events"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/exhibitions-events" ? "text-primary" : "text-foreground"
              }`}
            >
              Exhibitions & Events
            </Link>
            <Link
              to="/reports"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/reports" ? "text-primary" : "text-foreground"
              }`}
            >
              Reports
            </Link>
            <Link
              to="/ftc"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/ftc" ? "text-primary" : "text-foreground"
              }`}
            >
              FTC
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Activities Submenu */}
              <div>
                <button
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center space-x-1 w-full text-left"
                  onClick={() => handleDropdownToggle("mobile-activities")}
                >
                  <span>Activities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mobile-activities" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "mobile-activities" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {activitiesSubmenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/exhibitions-events"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Exhibitions & Events
              </Link>
              <Link
                to="/reports"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </Link>
              <Link
                to="/ftc"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FTC
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;