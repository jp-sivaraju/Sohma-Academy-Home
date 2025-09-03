import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FTC from "./pages/FTC";
import Reports from "./pages/Reports";
import ExhibitionsEvents from "./pages/ExhibitionsEvents";
import Training from "./pages/activities/Training";
import Challenges from "./pages/activities/Challenges";
import InnovationMela from "./pages/activities/InnovationMela";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ftc" element={<FTC />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/exhibitions-events" element={<ExhibitionsEvents />} />
          <Route path="/activities/training" element={<Training />} />
          <Route path="/activities/challenges" element={<Challenges />} />
          <Route path="/activities/innovation-mela" element={<InnovationMela />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
