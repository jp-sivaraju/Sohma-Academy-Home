import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const activitiesSubmenu = [
    { name: "Training", path: "/activities/training" },
    { name: "Challenges", path: "/activities/challenges" },
    { name: "Innovation Mela", path: "/activities/innovation-mela" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white border-b border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Robotics In Academics Logo" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-gray-800">
                Robotics In Academics
              </span>
              <span className="text-xs text-gray-600 leading-none">
                Soham Academy of Human Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/" ? "text-blue-500" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/about"
                  ? "text-blue-500"
                  : "text-gray-700"
              }`}
            >
              About Us
            </Link>

            {/* Activities Dropdown (Desktop - hover only) */}
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors hover:text-blue-500 flex items-center space-x-1 ${
                  location.pathname.startsWith("/activities")
                    ? "text-blue-500"
                    : "text-gray-700"
                }`}
              >
                <span>Activities</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown opens on hover via Tailwind group-hover */}
              <div className="absolute top-full left-0 mt-2 hidden w-48 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block z-50">
                {activitiesSubmenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/exhibitions-events"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/exhibitions-events"
                  ? "text-blue-500"
                  : "text-gray-700"
              }`}
            >
              Exhibitions & Events
            </Link>
            <Link
              to="/reports"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/reports"
                  ? "text-blue-500"
                  : "text-gray-700"
              }`}
            >
              Reports
            </Link>
            <Link
              to="/ftc"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/ftc"
                  ? "text-blue-500"
                  : "text-gray-700"
              }`}
            >
              FTC
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location.pathname === "/contact"
                  ? "text-blue-500"
                  : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Activities Submenu (click toggle) */}
              <div>
                <button
                  className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 w-full text-left"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-activities"
                        ? null
                        : "mobile-activities"
                    )
                  }
                >
                  <span>Activities</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "mobile-activities"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-activities" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {activitiesSubmenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-gray-600 hover:text-blue-500 transition-colors"
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
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Exhibitions & Events
              </Link>
              <Link
                to="/reports"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </Link>
              <Link
                to="/ftc"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FTC
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
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
