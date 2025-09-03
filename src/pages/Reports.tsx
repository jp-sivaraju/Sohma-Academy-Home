import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const Reports = () => {
  const reportsData = [
    {
      year: "AY 2025-26",
      reports: [
        { title: "Annual Report 2025-26", category: "Annual", image: "/api/placeholder/300/400" }
      ]
    },
    {
      year: "AY 2024-25", 
      reports: [
        { title: "Q1 Report 2024-25", category: "Quarterly", image: "/api/placeholder/300/400" },
        { title: "Q2 Report 2024-25", category: "Quarterly", image: "/api/placeholder/300/400" },
        { title: "Q3 Report 2024-25", category: "Quarterly", image: "/api/placeholder/300/400" },
        { title: "Annual Report 2024-25", category: "Annual", image: "/api/placeholder/300/400" },
        { title: "Half Yearly Report 2024-25", category: "Semi-Annual", image: "/api/placeholder/300/400" },
        { title: "Monthly Report Jan 2025", category: "Monthly", image: "/api/placeholder/300/400" },
        { title: "Monthly Report Feb 2025", category: "Monthly", image: "/api/placeholder/300/400" },
        { title: "Monthly Report Mar 2025", category: "Monthly", image: "/api/placeholder/300/400" }
      ]
    }
  ];

  const openDummyPDF = (reportTitle: string) => {
    // Create a dummy PDF blob
    const dummyPDFContent = `%PDF-1.3
%âãÏÓ
1 0 obj
<<
/Type /Catalog
/Outlines 2 0 R
/Pages 3 0 R
>>
endobj
2 0 obj
<<
/Type /Outlines
/Count 0
>>
endobj
3 0 obj
<<
/Type /Pages
/Count 1
/Kids [4 0 R]
>>
endobj
4 0 obj
<<
/Type /Page
/Parent 3 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
/MediaBox [0 0 612 792]
/Contents 6 0 R
>>
endobj
5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Times-Roman
>>
endobj
6 0 obj
<<
/Length 44
>>
stream
BT
/F1 18 Tf
0 0 Td
(${reportTitle}) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000173 00000 n 
0000000301 00000 n 
0000000380 00000 n 
0000000484 00000 n 
trailer
<<
/Size 7
/Root 1 0 R
>>
startxref
565
%%EOF`;

    const blob = new Blob([dummyPDFContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    
    // Clean up the URL after a delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Reports</h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed">
                Here we document the progress, innovations, and key milestones of Robotics in Academics (RIA). Explore our monthly updates, 
                exhibition highlights, and sponsor reports showcasing our impact in robotics education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {reportsData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
                {yearData.year}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {yearData.reports.map((report, reportIndex) => (
                  <Card 
                    key={reportIndex}
                    className="group cursor-pointer overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
                    onClick={() => openDummyPDF(report.title)}
                  >
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                          <div className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                            {report.category}
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Download className="w-4 h-4" />
                          <span className="text-sm font-medium">View PDF</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-center group-hover:text-primary transition-colors">
                        {report.title}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reports;