
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-greenwise-400 mr-2" />
              <span className="text-xl font-heading font-bold">Greenwise Repair Cafe</span>
            </div>
            <p className="text-gray-400 mb-6">
              A community initiative promoting repair culture and sustainability in Visakhapatnam.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-greenwise-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-greenwise-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-greenwise-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-gray-400 hover:text-greenwise-400 transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-greenwise-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#repairability" className="text-gray-400 hover:text-greenwise-400 transition-colors">
                  Repairability Checker
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-400 hover:text-greenwise-400 transition-colors">
                  Share Feedback
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-greenwise-400 transition-colors">
                  Contact & Volunteer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our monthly events and eco-tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 py-2 px-3 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-greenwise-500"
              />
              <button 
                type="submit" 
                className="bg-greenwise-600 hover:bg-greenwise-700 text-white py-2 px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Greenwise Repair Cafe, Visakhapatnam. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-greenwise-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-greenwise-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
