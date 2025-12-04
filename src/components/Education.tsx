import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      icon: GraduationCap,
      title: 'Higher Secondary Education',
      institution: 'Modern English Higher Secondary School',
      score: '65%',
      description: 'Completed higher secondary education with focus on science and mathematics',
    },
    {
      icon: Award,
      title: 'Bachelor of Vocation in Software Development',
      institution: 'Laxmi Institute of Technology',
      score: 'SPI: 8.94 (Sem 1) | 8.65 (Sem 2)',
      description: 'Currently pursuing degree with specialization in software development and programming',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Education</span>
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <edu.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-2">{edu.title}</h3>
                  <p className="text-xl text-purple-400 mb-2">{edu.institution}</p>
                  <motion.div
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-400/50 mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white">{edu.score}</span>
                  </motion.div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}