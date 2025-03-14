
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Telemedecine from "./pages/Telemedecine";
import TelemedecineDetails from "./pages/TelemedecineDetails";
import Education from "./pages/Education";
import EducationDetails from "./pages/EducationDetails";
import EconomicDevelopment from "./pages/EconomicDevelopment";
import EconomicDevelopmentDetails from "./pages/EconomicDevelopmentDetails";
import WaterManagement from "./pages/WaterManagement";
import WaterManagementDetails from "./pages/WaterManagementDetails";
import CivicEngagement from "./pages/CivicEngagement";
import CivicEngagementDetails from "./pages/CivicEngagementDetails";
import HomeDetails from "./pages/HomeDetails";
import MainNavigation from "./components/MainNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b p-2">
          <div className="container mx-auto">
            <MainNavigation />
          </div>
        </div>
        <div className="pt-16"> {/* Add padding to account for the fixed navigation */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home/details" element={<HomeDetails />} />
            <Route path="/telemedecine" element={<Telemedecine />} />
            <Route path="/telemedecine/details" element={<TelemedecineDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/details" element={<EducationDetails />} />
            <Route path="/economic-development" element={<EconomicDevelopment />} />
            <Route path="/economic-development/details" element={<EconomicDevelopmentDetails />} />
            <Route path="/water-management" element={<WaterManagement />} />
            <Route path="/water-management/details" element={<WaterManagementDetails />} />
            <Route path="/civic-engagement" element={<CivicEngagement />} />
            <Route path="/civic-engagement/details" element={<CivicEngagementDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
