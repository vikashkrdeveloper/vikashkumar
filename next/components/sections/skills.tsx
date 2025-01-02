"use client";

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next JS", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React Native", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node JS", level: 90 },
        { name: "Express JS", level: 85 },
        { name: "MONGO DB", level: 85 },
        { name: "MY SQL", level: 80 },
        { name: "PHP", level: 70 },
        { name: "Socket IO", level: 80 },

      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Hostinger", level: 80 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress className='rounded-[10px] h-2' value={skill.level}  />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}