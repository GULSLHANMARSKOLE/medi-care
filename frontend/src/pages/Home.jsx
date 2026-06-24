import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import WhyChooseUs from "../components/whyChooseUs.jsx";
import DoctorsSections  from "../components/DoctorsSections.jsx"
import Testimonials from "../components/Testimonials.jsx";
import Stats from "../components/Stats.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
   <>
   <Hero/>
   <Services/>
   <WhyChooseUs/>
   <DoctorsSections/>
   <Testimonials/>
   <Stats/>
   <CTA/>
   <Footer/>
   </>
  );
}

export default Home;