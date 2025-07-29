"use client"
import { ParticleCanvas } from '@/hooks/particle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Link  from 'next/link'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 opacity-96 to-green-950 min-h-screen relative overflow-hidden px-5 md:px-20'>
      <ParticleCanvas/>
      <div className='flex flex-col lg:flex-row items-center gap-16'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='h-screen flex items-center w-full'>
          <div className='w-full'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-white text-3xl md:text-4xl font-bold'>
                Frontend Developer
              <hr className='w-40 border border-dotted ml-16 md:ml-20' />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='text-gray-50 py-5 text-lg'>
              Creative frontend developer skilled in translating user needs into elegant and functional web interfaces using Javascript React, Nextjs & TailwindCss. Committed to clean code and continuous learning to deliver innovative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className='space-x-5 space-y-5'>
              <motion.button
                whileHover={{scale: 1.05, transition:{duration:0.2}}}
                className='text-gray-50 px-4 py-1 font-bold rounded-lg bg-gradient-to-r from-green-800 to-gray-800 shadow-md shadow-green-800 border-2 border-green-800'>Download Resume</motion.button>
              <Link
                href='/#contact'
                className='border px-4 py-1 text-gray-50 font-bold rounded-lg shadow-md shadow-green-800'>
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, dealy:0.5, ease: 'easeOut' }}
          className='w-full md:w-2/3 lg:w-1/2 text-center hidden md:inline-block'>
          <div className='relative w-full aspect-square group'>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror'
              }}
               className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-800/30 via-gray-950/30 to-gray-50/30 opaccity/50"
            />
          
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='w-full h-full aspect-square rounded-3xl overflow-hidden border border-white p-5 opacity-50 bg-surface backdrop-blur-sm'
            >
              <Image src="/Gogo.jpg" alt='Avata' fill={true} className=' scale-110 group-hover:scale-100 transition-transform duration-500 z-10' />
              <div
              className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
              />
             
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
