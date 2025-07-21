"use client";

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from 'react-icons/si';
import { SiAppwrite } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FiFramer } from "react-icons/fi";




const projects = [
  {
    title: "Agricon",
    description: "A Platform that connects farmers to Facilities, like Dryers, cold Rooms and Storage Facilities",
    live: <Link href='https://agricon.com.ng'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/agricon-frontend">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer-Motion", icon: FiFramer, color: "#FFFF00" },
    ],
    image: '/agriconLand.PNG'
  },
  {
    title: "Currency Converter",
    description: "Modern Currency converter with Javascript and React",
    live: <Link href='https://currency-converter-zeta-602.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/Currency-Converter.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/converter.png'
  },

  {
    title: "Password Generator",
    description: "Random Password Generator with Javascript and React",
    live: <Link href='https://password-generator-xi-azure.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/Password-Generator.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/random.png'
  },

  {
    title: "Admin Dashboard",
    description: "Admin Dashboard with React and Javascript",
    live: <Link href='https://admin-dashboard-wheat-theta.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/Admin-Dashboard.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/admindashboard.png'
  },
  {
    title: "Findash",
    description: "Findash is a modern dashboard designed to help you track your cryptocurrency and stock investments in one place",
    live: <Link href='https://findash-phi.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/FinDash.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/Findash.png'
  },
  {
    title: "Bookit",
    description: "An hotel booking system with Javascript, React and App-write as a server",
    live: <Link href='https://gobookit.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/Bookit.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "Next.js", icon: RiNextjsLine, color: "#f4f4f4" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "App-write", icon: SiAppwrite, color: "#780606" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/gobookit.png'
  },
  {
    title: "React Jobs",
    description: "React-Job is a web application that allows users to search for jobs and manage job listings seamlessly",
    live: <Link href='https://react-jobs-tau.vercel.app'>Live</Link>,
    repo: <Link href="https://github.com/Gogo602/React-Job.git">Repo</Link>,
    tech: [
      { name: "Javacript", icon: IoLogoJavascript, color: "#FFFF00" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: '/ReactJobs.png'
  },
];

const SelectedWork = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsSectionRef = useRef<HTMLElement>(null); 

    const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

    const handleViewLess = () => {
        setShowAllProjects(false);
        if (projectsSectionRef.current) { // Check if it exists
            projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleViewAll = () => {
        setShowAllProjects(true);
    }

    // useEffect to check ref.
    // useEffect(() => {
    //     if (projectsSectionRef.current) {
    //     }
    // }, []);
 

  return (
    <section className='py-32 relative' id="work" ref={projectsSectionRef}>
      <div className='max-w-7xl mx-auto px-6'>
        {/* section heading  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>Selected Work</h2>
          <div className='w-32 h-2 bg-gradient-to-r from-green-800 to-gray-800  rounded-full'></div>

          {/* project grid */}
          <div className='grid grid-cols-1 sm:px-20 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mt-10'>
            {displayedProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className='group relative h-[550px] md:h-[530px] pb-5 rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer'
              >
                <motion.div className='h-1/2 w-full relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="max-width-[768px] 100vw, 33vw"
                    className='object-cover'
                    priority
                  />
                </motion.div>

                {/* content section */}
                <motion.div
                  className='p-6 h-[25px] bg-surface'
                  transition={{ duration: 0.3 }}
                >
                  <div className='flex justify-between items-start mb-4 group/title'>
                    <h3 className='text-2xl font-bold text-gray-50'>
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon className='h-6 w-6 text-gray-50 group-hover/title:text-green-800 transition-colors duration-300' />
                  </div>
                  <p className='text-gray-50 mb-4'>
                    {project.description}
                  </p>
                  <div className='flex items-center gap-4 mb-2 text-gray-50 font-bold'>
                    <p className='bg-white/5 px-4 py-1 rounded-full'>{project.live}</p>
                    <p className='bg-white/5 px-4 py-1 rounded-full'>{project.repo}</p>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className='px-3 py-1 rounded-full bg-white/5 text-gray-50 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech'
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className='w-4 h-4 transition-colors'
                        />
                        <span className='hover:text-green-800 transition-colors'>
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* view all button */}
          {projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='flex justify-center mt-20 relative z-[5]'
            >
              <button
                onClick={showAllProjects ? handleViewLess : handleViewAll}
                className='relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-green-800/10 traansition-all group' id='work'>
                <span className='text-gray-50 transition-colors relative z-[1] font-bold'>
                  {showAllProjects ? 'View Less Projects' : 'View All Projects'}
                </span>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-green-800/40 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity' />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;



