
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from 'lucide-react';
import AuthButton from './AuthButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-greenwise-600" />
              <span className="text-xl font-heading font-bold text-greenwise-700">Greenwise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('events')}
            >
              Events
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('about')}
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('repairability')}
            >
              Repairability Checker
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('feedback')}
            >
              Feedback
            </Button>
            <Button 
              variant="default" 
              className="bg-greenwise-600 hover:bg-greenwise-700 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Volunteer
            </Button>
            <AuthButton />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <AuthButton />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('events')}
            >
              Events
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-greenwise-600 hover:bg-greenwise-50" 
              onClick={() => scrollToSection('about')}
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('repairability')}
            >
              Repairability Checker
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-greenwise-600 hover:bg-greenwise-50"
              onClick={() => scrollToSection('feedback')}
            >
              Feedback
            </Button>
            <Button 
              variant="default" 
              className="w-full bg-greenwise-600 hover:bg-greenwise-700 text-white mt-3"
              onClick={() => scrollToSection('contact')}
            >
              Volunteer
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
