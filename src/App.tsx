import Benefits from "./componets/Benefits";
import Classes from "./componets/Classes";
import ContactUs from "./componets/ContactUs";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Home from "./componets/Home";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-2 origin-[0%] bg-red-900"
        style={{ scaleX }}
      />
      <div className="app bg-gray-50">
        <Header />
        <Home />
        <Benefits />
        <Classes />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
