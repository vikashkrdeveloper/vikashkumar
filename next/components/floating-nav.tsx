"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Wrench, Mail } from 'lucide-react';

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', Icon: Home },
    { id: 'about', Icon: User },
    { id: 'experience', Icon: Briefcase },
    { id: 'projects', Icon: Code },
    { id: 'skills', Icon: Wrench },
    { id: 'contact', Icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-background/80 backdrop-blur-lg rounded-full border shadow-lg">
            {navItems.map(({ id, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`p-2 rounded-full transition-colors ${
                  activeSection === id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}