import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React JS', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Java', level: 80, color: 'from-red-500 to-orange-600' },
    { name: 'PHP', level: 75, color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-lg">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute right-0 top-0 bottom-0 w-2 bg-white/50"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
