import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import Integration from "../components/Integration";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <Integration />
      <Footer />
    </div>
  );
};

export default HomePage;
