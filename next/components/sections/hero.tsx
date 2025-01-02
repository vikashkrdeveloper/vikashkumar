"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { NavBar } from '@/components/layout/nav-bar';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden star-field bg-fixed`">
      <NavBar />
      
      <div className="container px-4 min-h-screen flex items-center justify-center">
        <div className="text-center mt-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-purple-600/50 animate-pulse blur-xl" />
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full border-2 border-primary/50 p-1"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Hi I&apos;m John
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Crafting elegant solutions to complex problems with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="glass-card hover:bg-primary/20 group"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card hover:bg-primary/20"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}