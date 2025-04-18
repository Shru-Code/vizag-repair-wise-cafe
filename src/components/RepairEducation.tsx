
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { 
  Wrench, 
  Hammer, // Replacing Tool with Hammer
  Lightbulb, 
  ShieldAlert, 
  Scroll,
  HelpCircle 
} from 'lucide-react';

const repairGuides = [
  {
    title: "Safety First",
    icon: <ShieldAlert className="h-5 w-5" />,
    content: [
      "Always unplug electrical items before repair",
      "Work in a well-lit and ventilated area",
      "Use appropriate safety gear (gloves, goggles)",
      "Keep a first aid kit nearby",
      "If unsure, consult an expert"
    ]
  },
  {
    title: "Basic Tool Kit",
    icon: <Hammer className="h-5 w-5" />, // Using Hammer icon instead of Tool
    content: [
      "Screwdrivers (Phillips and flathead)",
      "Pliers and wire cutters",
      "Measuring tape",
      "Safety equipment",
      "Cleaning supplies"
    ]
  },
  {
    title: "Common Problems & Solutions",
    icon: <Wrench className="h-5 w-5" />,
    content: [
      "Loose connections - check and tighten screws",
      "Sticky mechanisms - clean and lubricate",
      "Broken plastic - consider epoxy repair",
      "Torn fabric - basic sewing techniques",
      "Squeaky hinges - proper lubrication"
    ]
  },
  {
    title: "Repair Tips",
    icon: <Lightbulb className="h-5 w-5" />,
    content: [
      "Document the disassembly process with photos",
      "Keep screws and small parts organized",
      "Research your item before starting",
      "Don't force stuck mechanisms",
      "Test repairs before full reassembly"
    ]
  },
  {
    title: "When to Seek Professional Help",
    icon: <HelpCircle className="h-5 w-5" />,
    content: [
      "Complex electrical issues",
      "Gas appliance repairs",
      "Major structural damage",
      "Warranty-covered items",
      "Safety-critical components"
    ]
  }
];

const RepairEducation = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-white to-earth-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-greenwise-800 mb-6">
            Repair Education Center
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn the basics of repair and maintenance to give your items a longer life.
            These guides will help you understand when and how to attempt repairs safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {repairGuides.map((guide, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-greenwise-100 flex items-center justify-center text-greenwise-600">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold text-greenwise-800">{guide.title}</h3>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="content">
                  <AccordionTrigger className="text-greenwise-700">
                    View Guide
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mt-2">
                      {guide.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Scroll className="h-4 w-4 mt-1 flex-shrink-0 text-greenwise-600" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairEducation;
