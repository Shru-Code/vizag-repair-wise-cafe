
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Feedback = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !rating || !comments) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('feedback')
        .insert({
          name,
          email,
          rating: parseInt(rating),
          comments,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Feedback submitted!",
        description: "Thank you for sharing your experience with Greenwise Repair Cafe.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setRating('');
      setComments('');
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="section-padding bg-earth-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-greenwise-800 mb-6">Share Your Experience</h2>
          <p className="text-lg text-gray-700">
            Have you attended one of our repair events? We'd love to hear about your experience!
            Your feedback helps us improve our service and inspire others to join the repair movement.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="bg-earth-200 border-b">
              <CardTitle className="flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2 text-greenwise-600" />
                Event Feedback Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>How would you rate your experience?</Label>
                  <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex flex-col items-center">
                        <RadioGroupItem 
                          value={value.toString()} 
                          id={`rating-${value}`} 
                          className="peer sr-only" 
                        />
                        <Label 
                          htmlFor={`rating-${value}`}
                          className="cursor-pointer h-12 w-12 rounded-full flex items-center justify-center border-2 border-greenwise-200 text-gray-500 peer-data-[state=checked]:bg-greenwise-100 peer-data-[state=checked]:border-greenwise-500 peer-data-[state=checked]:text-greenwise-700 hover:bg-greenwise-50"
                        >
                          <Star className={`h-6 w-6 ${parseInt(rating) >= value ? 'fill-greenwise-500 text-greenwise-500' : ''}`} />
                        </Label>
                        <span className="text-sm mt-1">{value}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comments">Tell us about your experience</Label>
                  <Textarea 
                    id="comments" 
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="What did you like? What could we improve? Did you successfully repair your item?" 
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-greenwise-600 hover:bg-greenwise-700 text-white"
                  disabled={loading || !name || !email || !rating || !comments}
                >
                  {loading ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
