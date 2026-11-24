import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import BookingWidget from "./components/BookingWidget.jsx";
import { Philosophy, Services, Testimonials, BookingSection } from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

function MobileBookingBar() {
  return (
    <motion.div
      className="mobile-booking-bar"
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
    >
      <BookingWidget label="Book your visit" className="mobile-sticky-booking" />
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}
