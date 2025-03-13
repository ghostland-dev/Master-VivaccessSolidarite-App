
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServicesSection from '../components/sections/ServicesSection';
import TelemedecineFeatureSection from '../components/sections/TelemedecineFeatureSection';
import GridFeaturesSection from '../components/sections/GridFeaturesSection';
import CtaSection from '../components/sections/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <TelemedecineFeatureSection />
        <GridFeaturesSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
