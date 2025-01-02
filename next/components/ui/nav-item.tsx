"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
  isActive?: boolean;
}

export function NavItem({ icon: Icon, href, label, isActive }: NavItemProps) {
  return (
    <motion.a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all hover-glow ${
        isActive 
          ? 'bg-primary/20 text-primary text-glow' 
          : 'hover:bg-white/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline font-medium">{label}</span>
    </motion.a>
  );
}