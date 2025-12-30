import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NoPage from "./pages/NoPage";
import GiftSelection from "./pages/GiftSelection";
import CollagePage from "./pages/CollagePage";
import FlowerPage from "./pages/FlowerPage";
import MusicPage from "./pages/MusicPage";
import LetterPage from "./pages/LetterPage";
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
          <Route path="/no" element={<NoPage />} />
          <Route path="/gifts" element={<GiftSelection />} />
          <Route path="/collage" element={<CollagePage />} />
          <Route path="/flower" element={<FlowerPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
