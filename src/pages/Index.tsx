
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventSchedule from '@/components/EventSchedule';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import RepairabilityChecker from '@/components/RepairabilityChecker';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

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
