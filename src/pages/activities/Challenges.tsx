import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Challenges = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024-25");

  const years = ["2024-25", "2023-24", "2022-23"];

  const challengesData: Record<string, { counter: string; challenges: any[] }> = {
    "2024-25": {
      counter: "ROBOTICS CLUB ACTIVITY CHALLENGES COUNTER\nTrack our robotics club activities conducted at some of the government high schools in 2024 - 2025 academic year\n🥉 Bronze - ✅ 353 | 🥈 Silver - ✅ 319| 🥇 Gold - ✅ 246| 🏆 Platinum - ✅ 159 | 💎 Diamond - ✅ 100 | 🎯 Masters - ✅ 86|\n🎯 Grand Masters - ✅ 67",
      challenges: [
        {
          schoolId: "1001",
          name: "GBHS CPL - HYD",
          bronze: 6.8,
          silver: 7.9,
          gold: 9.0,
          platinum: "-",
          diamond: "-",
          masters: "-",
          grandMasters: "-",
          total: 43,
          level: "Grand Masters Completed"
        },
        {
          schoolId: "1015",
          name: "ZPHS Nehrunagar - MDCH", 
          bronze: "-",
          silver: "-",
          gold: "-",
          platinum: "-",
          diamond: "-",
          masters: "-",
          grandMasters: "-",
          total: "",
          level: "Grand Masters Completed"
        },
        {
          schoolId: "1017",
          name: "ZPHS (G) Mallagiri - MDCH",
          bronze: "-",
          silver: 9.7,
          gold: 7.8,
          platinum: "-",
          diamond: "-",
          masters: "-",
          grandMasters: "-", 
          total: 43,
          level: "Grand Masters Completed"
        }
      ]
    },
    "2023-24": {
      counter: "ROBOTICS CLUB ACTIVITY CHALLENGES COUNTER 2023-24\nCompleted challenges from previous academic year",
      challenges: [
        {
          schoolId: "1001",
          name: "Previous Year School 1",
          bronze: 5.5,
          silver: 6.8,
          gold: 8.2,
          platinum: "-",
          diamond: "-",
          masters: "-",
          grandMasters: "-",
          total: 38,
          level: "Gold Completed"
        }
      ]
    },
    "2022-23": {
      counter: "ROBOTICS CLUB ACTIVITY CHALLENGES COUNTER 2022-23\nArchived challenges from 2022-23 academic year",
      challenges: [
        {
          schoolId: "1001",
          name: "Historical School Data",
          bronze: 4.2,
          silver: 5.5,
          gold: 7.1,
          platinum: "-",
          diamond: "-",
          masters: "-",
          grandMasters: "-",
          total: 25,
          level: "Silver Completed"
        }
      ]
    }
  };

  // Get current data with fallback
  const currentData = challengesData[selectedYear] || challengesData["2024-25"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-20 bg-primary animate-slide-up"></div>
            <div className="pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 animate-fade-in">Challenges</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Track our robotics club activity challenges and achievements across participating schools
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
                {year}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Counter */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold whitespace-pre-line">
              {currentData.counter}
            </h2>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Show 30 entries
            </div>
            <div className="w-64">
              <input
                type="text"
                placeholder="Search items"
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-primary/20 p-4 rounded-t-lg text-center">
            <h3 className="font-bold text-lg">CHALLENGE POINTS</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border p-3 text-left">School ID</th>
                  <th className="border border-border p-3 text-center">B</th>
                  <th className="border border-border p-3 text-center">S</th>
                  <th className="border border-border p-3 text-center">G</th>
                  <th className="border border-border p-3 text-center">P</th>
                  <th className="border border-border p-3 text-center">D</th>
                  <th className="border border-border p-3 text-center">M</th>
                  <th className="border border-border p-3 text-center">GM</th>
                  <th className="border border-border p-3 text-center">Total</th>
                  <th className="border border-border p-3 text-center">Challenge Level</th>
                </tr>
              </thead>
              <tbody>
                {currentData.challenges.map((challenge, index) => (
                  <tr key={index} className="hover:bg-accent/50 transition-colors">
                    <td className="border border-border p-3">
                      <div>
                        <div className="font-medium">{challenge.schoolId}</div>
                        <div className="text-sm text-muted-foreground">{challenge.name}</div>
                      </div>
                    </td>
                    <td className="border border-border p-3 text-center">{challenge.bronze}</td>
                    <td className="border border-border p-3 text-center">{challenge.silver}</td>
                    <td className="border border-border p-3 text-center">{challenge.gold}</td>
                    <td className="border border-border p-3 text-center">{challenge.platinum}</td>
                    <td className="border border-border p-3 text-center">{challenge.diamond}</td>
                    <td className="border border-border p-3 text-center">{challenge.masters}</td>
                    <td className="border border-border p-3 text-center">{challenge.grandMasters}</td>
                    <td className="border border-border p-3 text-center font-bold">{challenge.total}</td>
                    <td className="border border-border p-3 text-center">
                      <Badge variant="secondary" className="text-xs">
                        {challenge.level}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Challenges;