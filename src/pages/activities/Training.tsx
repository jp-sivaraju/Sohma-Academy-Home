import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, School, Calendar } from "lucide-react";

const Training = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [activeTab, setActiveTab] = useState("Schools");

  const years = ["2024-25", "2023-24", "2022-23"];
  const tabs = ["Schools", "Retraining", "Colleges"];

  const trainingData: Record<string, {
    Schools: { counter: string; schools: any[] };
    Retraining: { counter: string; schools: any[] };
    Colleges: { counter: string; schools: any[] };
  }> = {
    "2024-25": {
      Schools: {
        counter: "ROBOTICS 2024-25 TRAINING COUNTER: STUDENTS - 6351 | GIRLS - 3395 | BOYS - 2956 | SCHOOLS - 47",
        schools: [
          {
            id: "1392",
            name: "Zilla Parishad High School, Rajam",
            location: "Gandhi Nagar, Nagole, MCDH",
            date: "26th June 2025",
            students: { girls: 60, boys: 68, total: 128 },
            status: "Details soon...",
            image: "/api/placeholder/150/100"
          },
          {
            id: "1393", 
            name: "Government Upper Primary School, Medakamgundi",
            location: "HYD",
            date: "26th June 2025",
            students: { girls: 69, boys: 35, total: 104 },
            status: "Details soon...",
            image: "/api/placeholder/150/100"
          },
          {
            id: "1394",
            name: "Zilla Parishad High School, Varusthallipuram",
            location: "RR",
            date: "01st July 2025", 
            students: { girls: 64, boys: 74, total: 138 },
            status: "Details soon...",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Retraining: {
        counter: "ROBOTICS 2024-25 RETRAINING COUNTER: STUDENTS - 1250 | SCHOOLS - 15",
        schools: [
          {
            id: "R001",
            name: "Advanced Robotics Retraining Program",
            location: "Hyderabad",
            date: "15th August 2025",
            students: { girls: 45, boys: 55, total: 100 },
            status: "In Progress",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Colleges: {
        counter: "ROBOTICS 2024-25 COLLEGE TRAINING COUNTER: STUDENTS - 890 | COLLEGES - 8",
        schools: [
          {
            id: "C001",
            name: "JNTU Engineering College",
            location: "Hyderabad",
            date: "10th September 2025",
            students: { girls: 150, boys: 200, total: 350 },
            status: "Upcoming",
            image: "/api/placeholder/150/100"
          }
        ]
      }
    },
    "2023-24": {
      Schools: {
        counter: "ROBOTICS 2023-24 TRAINING COUNTER: STUDENTS - 5200 | GIRLS - 2800 | BOYS - 2400 | SCHOOLS - 38",
        schools: [
          {
            id: "1301",
            name: "Previous Year School Program",
            location: "Hyderabad",
            date: "Completed",
            students: { girls: 50, boys: 60, total: 110 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Retraining: {
        counter: "ROBOTICS 2023-24 RETRAINING COUNTER: STUDENTS - 980 | SCHOOLS - 12",
        schools: [
          {
            id: "R002",
            name: "Previous Retraining Program",
            location: "Hyderabad", 
            date: "Completed",
            students: { girls: 40, boys: 50, total: 90 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Colleges: {
        counter: "ROBOTICS 2023-24 COLLEGE TRAINING COUNTER: STUDENTS - 750 | COLLEGES - 6",
        schools: [
          {
            id: "C002",
            name: "Previous College Program",
            location: "Hyderabad",
            date: "Completed",
            students: { girls: 120, boys: 180, total: 300 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      }
    },
    "2022-23": {
      Schools: {
        counter: "ROBOTICS 2022-23 TRAINING COUNTER: STUDENTS - 4500 | GIRLS - 2200 | BOYS - 2300 | SCHOOLS - 30",
        schools: [
          {
            id: "1201",
            name: "Legacy School Program",
            location: "Hyderabad",
            date: "Completed",
            students: { girls: 45, boys: 55, total: 100 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Retraining: {
        counter: "ROBOTICS 2022-23 RETRAINING COUNTER: STUDENTS - 800 | SCHOOLS - 10",
        schools: [
          {
            id: "R003",
            name: "Legacy Retraining Program",
            location: "Hyderabad",
            date: "Completed", 
            students: { girls: 35, boys: 45, total: 80 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      },
      Colleges: {
        counter: "ROBOTICS 2022-23 COLLEGE TRAINING COUNTER: STUDENTS - 600 | COLLEGES - 4",
        schools: [
          {
            id: "C003",
            name: "Legacy College Program",
            location: "Hyderabad",
            date: "Completed",
            students: { girls: 100, boys: 150, total: 250 },
            status: "Completed",
            image: "/api/placeholder/150/100"
          }
        ]
      }
    }
  };

  // Get current data with fallback
  const currentData = trainingData[selectedYear] || trainingData["2024-25"];
  const currentTabData = currentData[activeTab as keyof typeof currentData] || currentData.Schools;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-20 bg-primary animate-slide-up"></div>
            <div className="pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Training Programs</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Track our robotics program conducted at some of the government high schools and colleges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className="min-w-[120px]"
              >
                AY {year}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className="min-w-[120px]"
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Counter */}
      <section className="py-8 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
            <h2 className="text-lg md:text-xl font-bold">{currentTabData.counter}</h2>
          </div>
        </div>
      </section>

      {/* Training Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTabData.schools.map((school) => (
              <Card 
                key={school.id}
                className="group cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      School ID: {school.id}
                    </Badge>
                    <div className="w-16 h-12 bg-primary/10 rounded flex items-center justify-center">
                      <img src={school.image} alt="School" className="w-full h-full object-cover rounded" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {school.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <School className="w-4 h-4 mr-2" />
                      {school.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Workshop Date: {school.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      Girls: {school.students.girls} | Boys: {school.students.boys} | Total: {school.students.total}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {school.status}
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs">
                      Details soon...
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;