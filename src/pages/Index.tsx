
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlockDiagram from '@/components/BlockDiagram';
import EventSchedule from '@/components/EventSchedule';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import RepairabilityChecker from '@/components/RepairabilityChecker';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import RepairEducation from '@/components/RepairEducation';

const Index = () => {
  // Make sure document has smooth scrolling for navigation
  React.useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BlockDiagram />
      <RepairEducation />
      <EventSchedule />
      <AboutUs />
      <RepairabilityChecker />
      <Feedback />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
