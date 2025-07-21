"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GithubIcon, LinkedInIcon } from './socialIcons'
import { FaWhatsapp } from 'react-icons/fa';
import { useForm, ValidationError } from "@formspree/react";


const socialLinks = {
    github: 'https://github.com/Gogo602',
    linkedin: 'https://www.linkedin.com/in/gogo-benson-bb0604308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    whatsapp: 'https://wa.me/+2349164925741'
};


const Contact = () => {
     const [state, handleSubmit] = useForm("xzzvdjog");

    if (state.succeeded) {
      return <p>Thanks for your submission!</p>;
    }

  return (
    <section className='py-32 relative' id="contact">
      <div className='w-full px-6'>
        {/* section heading  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Contact</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800 mx-auto rounded-full'></div>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, dealy:0.5, ease: 'easeOut' }}
                className='sm:w-5/6 w-full md:w-full text-center pt-15'>
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
                    <Image src="/Gogo.jpg" alt='Avata' fill className=' scale-110 group-hover:scale-100 transition-transform duration-500 z-10' />
                    <div
                    className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
                    />
                  </motion.div>
                  
                </div>
                <div className='pt-5'>
                    <ul className='flex items-center justify-center gap-5'>
                        <a
                            href={socialLinks.github}
                            className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                <GithubIcon className="h-7 w-7 text-gray-50 transition-colors"/>
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                <LinkedInIcon className="h-7 w-7 text-gray-50 transition-colors"/>
                        </a>
                      
                        <a 
                            href={socialLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                            <FaWhatsapp className="h-7 w-7 text-gray-50 transition-colors" />
                        </a>
                    
                    </ul>
                  </div>
            </motion.div>
            
            {/* contact form*/}
            <form
              onSubmit={handleSubmit}
              className='w-full'
            >
              <div
                className='space-y-7 relative z-10 mt-10 w-full'>
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
                      id="text"
                      type="text"
                      name="text"
                      placeholder='Name'
                      className='border border-white/20 px-4 block py-1 w-full  h-[45px] rounded-md text-gray-50 placeholder:font-bold focus:outline-none'
                      required
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
                      id="email"
                      placeholder='Email'
                      className='border border-white/20 px-4 py-1 block w-full  h-[45px] rounded-md text-gray-50 placeholder:font-bold focus:outline-none'
                      required
                  />
                <motion.textarea
                  initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                      id="message"
                      name="message"
                      placeholder="Enter Your Message Here"
                      className='border border-white/20 px-4 py-1 w-full rounded-md focus:outline-none resize-y min-h-[5.5rem] text-gray-50 placeholder:font-bold'
                      required
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
                    type="submit"
                    disabled={state.submitting}
                    className='w-full relative px-8 py-2 rounded-md bg-surface border border-white/10 hover:border-green-800/10 traansition-all group'>
                    <span className='text-gray-50 transition-colors text-xl relative z-[1] font-bold'>
                      Send
                    </span>
                    <div className='absolute inset-0 rounded-md bg-gradient-to-r from-green-800/40 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity' />
                </motion.button>
                 <ValidationError errors={state.errors} />
              </div>
            </form>  
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;