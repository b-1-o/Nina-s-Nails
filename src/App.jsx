import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollScenes from "./components/ScrollScenes.jsx";
import Gallery from "./components/Gallery.jsx";
import { Philosophy, Services, Testimonials, Booking } from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollScenes />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
