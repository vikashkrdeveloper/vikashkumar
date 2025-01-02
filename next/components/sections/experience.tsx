"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led development of enterprise applications using React and Node.js. Managed team of 5 developers.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Inc",
      period: "2019 - 2021",
      description: "Built and maintained multiple web applications. Implemented CI/CD pipelines.",
      skills: ["Vue.js", "Python", "Docker", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions",
      period: "2018 - 2019",
      description: "Developed responsive web interfaces and improved site performance.",
      skills: ["JavaScript", "HTML", "CSS", "React"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge  key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}