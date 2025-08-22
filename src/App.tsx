
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Reviews from "./pages/Reviews";
import Promotions from "./pages/Promotions";
import Catering from "./pages/Catering";
import Franchise from "./pages/Franchise";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Loyalty from "./pages/Loyalty";
import Gift from "./pages/Gift";
import Nutrition from "./pages/Nutrition";
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
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/nutrition" element={<Nutrition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
