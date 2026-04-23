import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import VideoPromoSection from './components/VideoPromoSection';
import DataStatistics from './components/DataStatistics';
import GlobalThinkers from './components/GlobalThinkers';
import ProgramsSection from './components/ProgramsSection';
import ThroughCreativity from './components/ThroughCreativity';
import WhyChooseUs from './components/WhyChooseUs';
import InspirationalBanner from './components/InspirationalBanner';
import EasyStepToApply from './components/EasyStepToApply';
import AlumniTestimonial from './components/AlumniTestimonial';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <WhoWeAre />
        <VideoPromoSection />
        <DataStatistics />
        <GlobalThinkers />
      </section>
      <section id="programs">
        <ProgramsSection />
        <ThroughCreativity />
        <WhyChooseUs />
      </section>
      <section id="e-learning">
        <InspirationalBanner />
        <EasyStepToApply />
      </section>
      <section id="faculty">
        <AlumniTestimonial />
        <FAQ />
      </section>
      <section id="contact">
        <CTASection />
      </section>
      <Footer />
    </>
  );
};

export default App;
