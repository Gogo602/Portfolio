"use client";


import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";




const projects = [
  {
    tech: [
      { name: "Html5", icon: FaHtml5, color: "#E34F26" },
    ],
  },

  {
    tech: [
      { name: "CSS3", icon: FaCss3, color: "#1572B6" },
    ],
  },

  {
    tech: [
      { name: "Javascript", icon: FaJs, color: "#F7DF1E" },
    ],
    },
  {
    tech: [
      { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c" },
    ],
  },
  {
    tech: [
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    tech: [
      { name: "Git", icon: FaGit, color: "#F05033" },
    ],
    },
   {
    tech: [
      { name: "GitHub", icon: FaGithub, color: "#000000" },
    ],
  },
  { 
    tech: [
      { name: "React", icon: FaReact, color: "#06B6D4" },
    ],
    },
 { 
    tech: [
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
    ],
    },
 { 
    tech: [
      { name: "NPM", icon: RiNpmjsFill, color: "#CB3837" },
    ],
 },
 { 
    tech: [
      { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
    ],
  },
 { 
    tech: [
      { name: "Next JS", icon: RiNextjsFill, color: "#000000" },
    ],
  },
  
];

const Skills = () => {
  

  return (
    <section className='py-32 relative' id="skills">
      <div className='max-w-7xl mx-auto px-6'>
        {/* section heading  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Skills</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800  rounded-full'></div>

          {/* project grid */}
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 relative z-10 mt-10'>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className='group relative rounded-3xl overflow-hidden bg-surface  cursor-pointer'
              >
                {/* content section */}
                <motion.div
                  className='p-6 h-full bg-surface'
                  transition={{ duration: 0.3 }}
                >
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, j) => (
                      <div
                        key={j}
                        className=' text-gray-50 text-sm hover:bg-surface transition-colors h-full '
                      >
                            <tech.icon
                            style={{ color: tech.color }}
                            className='w-14 h-14 transition-colors mx-auto px-3 py-1 rounded-full bg-white/5'
                            />
                            <span className='hover:text-green-800 transition-colors text-center px-3 pt-1 font-bold'>
                            {tech.name}
                            </span>
                        </div>
                        
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;