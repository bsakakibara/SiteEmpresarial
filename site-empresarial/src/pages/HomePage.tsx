import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSlider from "../components/sections/HeroSlider";
import AboutSection from "../components/sections/AboutSections";
import ContactForm from "../components/sections/ContectForm";
import Counters from "../components/sections/Counters";
import ServicesSection from "../components/sections/ServicesSection";
import TeamSection from "../components/sections/TeamSection";
import Testimonials from "../components/sections/Testimonials";


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <Testimonials />
      <Counters />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;