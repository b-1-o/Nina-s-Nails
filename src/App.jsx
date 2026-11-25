import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import { Philosophy, Services, Testimonials, BookingSection } from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

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
    </div>
  );
}
