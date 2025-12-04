import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: 'Internship Portal',
      description: 'A comprehensive platform connecting students with internship opportunities',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      title: 'CMS Blogging Website',
      description: 'Full-featured content management system for bloggers and content creators',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      title: 'Car Buying & Selling App',
      description: 'Modern UI/UX design for automotive marketplace application',
      tech: ['React', 'Tailwind CSS', 'Figma'],
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <motion.div
                  className="text-white text-6xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  💻
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full border border-purple-400/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}