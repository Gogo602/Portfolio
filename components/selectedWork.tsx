"use client"

import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
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
    image:'/projects/currency'
  },
  
  {
    title: "Random Password Generator",
    description: "Random Password Generator with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/projects/currency'
  },

  {
    title: "Todo App",
    description: "Todo List with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/projects/currency'
  },
  {
    title: "Calculator",
    description: "Calculator App with React and Javascript",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image:'/projects/currency'
  },
  
  ]

const SelectedWork = () => {
  return (
    <section className='py-32 relative id="work"'>
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
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10'>
            {
              projects.map((projects, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration:0.6, delay: i * 0.1}}
                  className='group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer'
                >
                  <motion.div className='h-[250px] relative'>
                    <Image 
                      src={projects.image}
                      alt={projects.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className='object-cover'
                      priority
                    />
                  </motion.div>
                </motion.div>
              ))
              };
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SelectedWork;