"use client";

import { motion } from 'framer-motion';



const projects = [
  {
    tech: [
      { name: "2+", desc: "Year of Experience", color: "#E34F26" },
    ],
    },
    {
    tech: [
      { name: "20+", desc: "Completed Projects", color: "#E34F26" },
    ],
    },
    {
    tech: [
      { name: "5+", desc: "Happy Clients", color: "#E34F26" },
    ],
  }
];

const Experience = () => {
  

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
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Experience</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800  rounded-full'></div>

          {/* project grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 relative z-10 mt-10'>
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
                className='group relative rounded-3xl overflow-hidden bg-surface cursor-pointer'
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
                        className=' text-gray-50 text-sm hover:bg-surface transition-colors h-full'
                      >
                            <div className=' w-16 h-16 transition-colors text-2xl font-bold mx-auto px-4 py-4 rounded-full bg-white/5'>
                            {tech.name}
                            </div>
                            <div className='hover:text-green-800 transition-colors text-center px-3 pt-3 font-bold'>
                            {tech.desc}
                            </div>
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

export default Experience;