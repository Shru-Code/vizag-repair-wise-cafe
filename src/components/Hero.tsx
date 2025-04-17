
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wrench, Recycle, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-greenwise-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-greenwise-800 leading-tight">
              Repair, Reuse, Renew Vizag!
            </h1>
            <p className="mt-4 text-xl text-gray-700 max-w-lg">
              A community-driven initiative to reduce waste, promote sustainability, and build a greener Visakhapatnam.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-greenwise-600 hover:bg-greenwise-700 text-white"
                onClick={() => {
                  const element = document.getElementById('events');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Find Next Event
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-greenwise-600 text-greenwise-700 hover:bg-greenwise-50"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Join as Volunteer
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative bg-white rounded-lg shadow-xl p-6 md:p-8">
              <div className="absolute -top-10 -left-10 bg-greenwise-500 text-white rounded-full p-4">
                <Wrench size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-2">How it Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-2 mr-4">
                    <Wrench className="h-6 w-6 text-greenwise-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Free Repair Events</h3>
                    <p className="text-gray-600">Monthly events where skilled volunteers help you repair your broken items.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-2 mr-4">
                    <Recycle className="h-6 w-6 text-greenwise-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Learn & Reuse</h3>
                    <p className="text-gray-600">We teach repair skills, not just fix things. Extend product lifecycles together.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-2 mr-4">
                    <Users className="h-6 w-6 text-greenwise-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Community Action</h3>
                    <p className="text-gray-600">Connect with neighbors and contribute to a sustainable Vizag.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
