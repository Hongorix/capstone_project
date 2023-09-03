import "./styles/Main.css";
import HeroSection from "./main_components/HeroSection";
import Hightlights from "./main_components/Hightlights";
import Testimonials from "./main_components/Testimonials";
import About from "./main_components/About";

function Main() {
  return (
    <main className="page">
      <HeroSection />
      <Hightlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
