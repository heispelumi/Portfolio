import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg',
    color: '#E34F26',
    description: 'Structuring content with semantic HTML elements.',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg',
    color: '#1572B6',
    description: 'Styling with modern layouts like Flexbox and Grid.',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg',
    color: '#F7DF1E',
    description: 'Enhancing interactivity with ES6+ features.',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    color: '#61DAFB',
    description: 'Building dynamic UIs with component-based architecture.',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg',
    color: '#06B6D4',
    description: 'Rapid UI development with utility-first CSS framework.',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg',
    color: '#F05032',
    description: 'Version control for collaborative development.',
  },
  {
    name: 'Framer Motion',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg',
    color: '#0055FF',
    description: 'Animating React components with ease.',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
    color: '#1A1A1A',
    description: 'Server-side rendering and static site generation for React.',
  },

];

const Stack = () => {
  return (
    <section className="w-full font h-full  bg-[#1A1A1A] text-white   px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[25px] md:text-[35px]  font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore My  {' '}
      
          <span className="text-yellow-500">Development</span> Stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center bg-[#333] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-full"
                style={{ backgroundColor: tech.color }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
              <p className="text-center text-gray-300 text-[10px] mt-2">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
