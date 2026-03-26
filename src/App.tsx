import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Policies from "./pages/Policies";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import Hizmetlerimiz from "./pages/hizmetlerimiz";
import ScrollToTop from "./components/ScrollToTop";

// -------------------------
// Page Transition Wrapper
// -------------------------
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}     // açılış animasyonu
      animate={{ opacity: 1, y: 0 }}      // görünür hâle geliyor
      exit={{ opacity: 0, y: -10 }}       // çıkış animasyonu
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

// -------------------------
// Animated Routes (Magic)
// -------------------------
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <ScrollToTop />  <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/politikalar"
          element={
            <PageTransition>
              <Policies />
            </PageTransition>
          }
        />

         <Route
          path="/hizmetlerimiz"
          element={
            <PageTransition>
              <Hizmetlerimiz />
            </PageTransition>
          }
        />
 <Route path="/hizmetlerimiz/:id" element={<ServiceDetail />} />
        <Route
          path="/iletisim"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/hakkimizda"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

// -------------------------
// MAIN APP
// -------------------------
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
