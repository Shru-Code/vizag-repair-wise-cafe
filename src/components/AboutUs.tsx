
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, HandHelping, Leaf, Lightbulb, Heart, Trash2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Greenwise Repair Cafe is a community-driven initiative in Visakhapatnam that aims to promote sustainability, reduce waste, and build a more environmentally conscious city.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We organize free repair events where skilled volunteers help residents fix their broken household items, from electronics and clothing to furniture and bicycles. But we don't just fix things for you—we teach you how to make the repairs yourself!
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2023, our mission is aligned with the United Nations Sustainable Development Goal 12 (Responsible Consumption and Production), particularly target 12.5 which aims to substantially reduce waste generation through prevention, reduction, recycling, and reuse.
            </p>
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-greenwise-800 mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">500+</p>
                  <p className="text-sm text-gray-600">Items Repaired</p>
                </div>
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">20+</p>
                  <p className="text-sm text-gray-600">Events Hosted</p>
                </div>
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">1500kg+</p>
                  <p className="text-sm text-gray-600">Waste Diverted</p>
                </div>
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">30+</p>
                  <p className="text-sm text-gray-600">Skilled Volunteers</p>
                </div>
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">800+</p>
                  <p className="text-sm text-gray-600">People Served</p>
                </div>
                <div className="text-center p-4 bg-greenwise-50 rounded-lg">
                  <p className="text-3xl font-bold text-greenwise-700">5</p>
                  <p className="text-sm text-gray-600">Locations Across Vizag</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-greenwise-800 mb-6">Why We Matter</h3>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-3 mr-4">
                      <Trash2 className="h-6 w-6 text-greenwise-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-greenwise-800">Reduces Waste (SDG 12.5)</h4>
                      <p className="text-gray-600">By repairing items instead of discarding them, we prevent useful products from ending up in landfills, reducing Vizag's waste footprint.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-3 mr-4">
                      <Recycle className="h-6 w-6 text-greenwise-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-greenwise-800">Sustainable Consumption</h4>
                      <p className="text-gray-600">We encourage people to value and extend the lifespan of their products, promoting a shift away from throwaway culture.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-3 mr-4">
                      <Lightbulb className="h-6 w-6 text-greenwise-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-greenwise-800">Empowers Skills</h4>
                      <p className="text-gray-600">By teaching repair skills, we empower community members to make more conscious choices and develop self-sufficiency.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-greenwise-100 rounded-full p-3 mr-4">
                      <HandHelping className="h-6 w-6 text-greenwise-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-greenwise-800">Community Action</h4>
                      <p className="text-gray-600">Locals helping locals creates stronger community bonds and a shared commitment to a greener Visakhapatnam.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
