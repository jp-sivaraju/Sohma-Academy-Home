import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { useState } from "react";
import monthly from "../assets/monthly.png"
import ese1 from "../assets/ese1.png"
import a1 from "../assets/a1.png"

const Reports = () => {
  const [selectedEdition, setSelectedEdition] = useState("monthly");

  const editionsData = {
    monthly: {
      title: "Monthly Editions",
      description: "Regular monthly publications featuring latest updates and activities",
      reports: [
        {
          title: "RiA Monthly - August 2025 Edition",
          category: "Monthly Report",
          date: "August 2025",
          url: "https://ria.sohamacademy.org/wp-content/uploads/2025/08/RiA-Brochure-August-2025-Edition.pdf",
          image: monthly
        }
      ]
    },
    exhibition: {
      title: "Exhibition Special Editions",
      description: "Special publications highlighting our exhibitions and showcases",
      reports: [
        {
          title: "1st Annual Robotics Exhibition Special Edition",
          category: "Exhibition Special",
          date: "March 2025",
          url: "https://ria.sohamacademy.org/wp-content/uploads/2025/03/RiA-1st-Annual-Robotics-Exhibition-Special-Edition.pdf",
          image: ese1
        },
       
      ]
    },
    annual: {
      title: "Annual Activities Edition",
      description: "Comprehensive yearly reports covering all our activities and achievements",
      reports: [
        {
          title: "Soham Activities Report 2024-25",
          category: "Annual Report",
          date: "March 2025",
          url: "https://ria.sohamacademy.org/wp-content/uploads/2025/03/Soham-Activities-Report.pdf",
          image: a1
        },
        
      ]
    }
  };

  const openPDF = (url: string, title: string) => {
    window.open(url, '_blank');
  };

  const currentData = editionsData[selectedEdition as keyof typeof editionsData];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-20 bg-primary animate-slide-up"></div>
            <div className="pl-8">
              <h1 className="text-4xl md:text-5xl  text-primary font-bold mb-6 animate-fade-in">Reports & Publications</h1>
              <p className="text-lg text-muted-foreground max-w-4xl animate-fade-in-delayed">
                Explore our comprehensive collection of reports, publications, and documentation showcasing our journey, 
                achievements, and impact in robotics education across various schools and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edition Selector */}
      <section className="py-8 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-background rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setSelectedEdition("monthly")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  selectedEdition === "monthly" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                Monthly Editions
              </button>
              <button
                onClick={() => setSelectedEdition("exhibition")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  selectedEdition === "exhibition" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                Exhibition Special Editions
              </button>
              <button
                onClick={() => setSelectedEdition("annual")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  selectedEdition === "annual" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                Annual Activities Edition
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">{currentData.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
              {currentData.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentData.reports.map((report, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:scale-105 transition-all duration-300 tech-glow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openPDF(report.url, report.title)}
              >
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <FileText className="w-6 h-6" />
                        <Download className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-primary font-medium">{report.category}</div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{report.date}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reports;