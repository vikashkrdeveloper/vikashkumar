"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { NavItem } from '@/components/ui/nav-item';

const navItems = [
  { Icon: Home, href: "#home", label: "Home" },
  { Icon: User, href: "#about", label: "About" },
  { Icon: Briefcase, href: "#experience", label: "Experience" },
  { Icon: Code, href: "#projects", label: "Projects" },
  { Icon: Mail, href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update nav background opacity based on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg shadow-lg' : 'py-6'
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-center gap-2">
          {navItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.Icon}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.href.slice(1)}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
}