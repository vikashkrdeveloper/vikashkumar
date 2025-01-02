"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully!');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      required 
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[150px] glass-card"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full glass-card hover:bg-primary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      john.doe@example.com
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      San Francisco, CA
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Social Links</h3>
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, index) => (
                      <Button 
                        key={index}
                        variant="outline" 
                        size="icon" 
                        className="glass-card hover:bg-primary/20"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}