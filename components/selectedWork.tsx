"use client"

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';


const projects = [
  {
    title: "Currency Converter",
    description: "Modern Currency converter with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/signup.jpg'
  },
  
  {
    title: "Random Password Generator",
    description: "Random Password Generator with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/signup.jpg'
  },

  {
    title: "Todo App",
    description: "Todo List with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/signup.jpg'
  },
  ]

const SelectedWork = () => {
  return (
    <section className='py-32 relative' id="work">
      <div className='max-w-7xl mx-auto px-6'>
        {/* section heading   */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.6}}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Selected Work</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800  rounded-full'></div>

          {/* project grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10 mt-10'>
            {
              projects.map((projects, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition:{duration:0.2}
                  }}
                  className='group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer'
                >
                  <motion.div className='h-1/2 w-full relative'>
                    <Image 
                      src={projects.image}
                      alt={projects.title}
                      fill
                      sizes="max-width-[768px] 100vw, 33vw"
                      className='object-cover'
                      priority
                    />
                  
                  </motion.div>

                  {/* content section */}
                  <motion.div
                    className='p-6 h-[25px] bg-surface'
                    transition={{duration:0.3}}
                  >
                    <div className='flex justify-between items-start mb-4 group/title'>
                      <h3 className='text-2xl font-bold text-gray-50'>
                        {projects.title}
                      </h3>
                      <ArrowUpRightIcon className='h-6 w-6 text-gray-50 group-hover/title:text-green-800 transition-colors duration-300'/>
                    </div>
                    <p className='text-gray-50 mb-4'>
                      {projects.description}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {
                        projects.tech.map((tech, j) => (
                          <span
                            key={j}
                            className='px-3 py-1 rounded-full bg-white/5 text-gray-50 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech'
                          >
                            <tech.icon
                              style={{color:tech.color}}
                              className='w-4 h-4 transition-colors'
                            />
                            <span className='hover:text-green-800 transition-colors'>
                              {tech.name}
                            </span>
                          </span>
                        ))
                      }
                    </div>
                  </motion.div>
                </motion.div>
              ))
              };
          </div>

          {/* view all button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='flex justify-center mt-20 relative z-[5]'
          >
            <button className='relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-green-800/10 traansition-all group'>
              <span className='text-gray-50 transition-colors relative z-[1] font-bold'>View All Projects</span>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-green-800/40 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SelectedWork;