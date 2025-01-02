"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient",
      className
    )}>
      {children}
    </span>
  );
}