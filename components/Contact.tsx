"use client";

import { motion } from 'framer-motion';




const Contact = () => {
  

  return (
    <section className='py-32 relative' id="contact">
      <div className='max-w-7xl mx-auto px-6'>
        {/* section heading  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Contact</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800 mx-auto rounded-full'></div>

          {/* project grid */}
          <div
            className='grid xlg:grid-cols-1 gap-5 relative z-10 mt-10'>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              className='text-gray-50 font-bold text-lg'>Leave me Message</motion.p>
            <motion.input
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                  type="text"
                  name="text"
                  placeholder='Name'
                  className='border border-white/20 px-4 py-1 w-full md:w-[350px] h-[45px] rounded-md text-gray-50 placeholder:font-bold focus:outline-none'
              />
        
            <motion.input
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                  type="email"
                  name="email"
                  placeholder='Email'
                  className='border border-white/20 px-4 py-1 w-full md:w-[350px] h-[45px] rounded-md text-gray-50 placeholder:font-bold focus:outline-none'
              />
            <motion.textarea
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                  placeholder="Enter Your Message Here"
                  className='border border-white/20 px-4 py-1 w-full md:w-[350px] rounded-md focus:outline-none resize-y min-h-[5.5rem] text-gray-50 placeholder:font-bold'
                  style={{
                      overflow: 'hidden', 
                      height: 'auto',       
                  }}
                  onChange={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
            />
            <motion.button
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className='relative px-8 py-2 rounded-md bg-surface border border-white/10 hover:border-green-800/10 traansition-all group'>
                <span className='text-gray-50 transition-colors text-xl relative z-[1] font-bold'>
                  Send
                </span>
                <div className='absolute inset-0 rounded-md bg-gradient-to-r from-green-800/40 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity' />
              </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;