"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';

export function AboutSection() {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Technologies", value: "15+" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <GradientText>Me</GradientText>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Full Stack Developer with 5+ years of experience building web applications.
                  I specialize in creating scalable, user-friendly solutions using modern technologies.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey in tech started when I built my first website at 15.
                  Since then, I've worked with startups and enterprises, helping them bring their ideas to life.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Python", "AWS", "Docker"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold mb-2">
                        <GradientText>{stat.value}</GradientText>
                      </p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}