"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
      <div className='bg-gradient-to-r from-gray-900 opacity-96 to-green-950 min-h-screen px-20'>
          <div className='flex'>
              <motion.div
                  initial={{ y: 300 }}
                  animate={{y:0}}
                  className='h-screen flex items-center w-full transition-all duration-100 ease-in-out'>
                  <div className='w-full'>
                      <div className='text-white text-4xl font-bold'>
                          I'm a Frontend Developer
                          <hr className='w-40 border border-dotted ml-44'/>
                      </div>
                      <p className='text-gray-50 py-5 text-lg'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus, at dolorem accusantium corporis debitis laudantium aspernatur nihil illum provident exercitationem dignissimos eveniet veritatis. Vel unde quaerat cumque rerum architecto.
                      </p>
                      <div className='space-x-5'>
                          <button className='text-gray-50 px-4 py-1 font-bold rounded-lg bg-gradient-to-r from-green-800 to-gray-800 shadow-md shadow-green-800'>Download Resume</button>
                          <button className='border px-4 py-1 text-gray-50 font-bold rounded-lg shadow-md shadow-green-800'> Contact Me</button>
                      </div>
                    </div>
                    <div className='w-1/2 text-center'>
                        welcome here
                    </div>
              </motion.div>
             
         </div>
    </div>
  )
}

export default Hero