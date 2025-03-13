
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Telemedecine from "./pages/Telemedecine";
import Education from "./pages/Education";
import EconomicDevelopment from "./pages/EconomicDevelopment";
import WaterManagement from "./pages/WaterManagement";
import CivicEngagement from "./pages/CivicEngagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/telemedecine" element={<Telemedecine />} />
          <Route path="/education" element={<Education />} />
          <Route path="/economic-development" element={<EconomicDevelopment />} />
          <Route path="/water-management" element={<WaterManagement />} />
          <Route path="/civic-engagement" element={<CivicEngagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
