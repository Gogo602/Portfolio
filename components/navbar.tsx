"use client"
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";
import { GithubIcon, LinkedInIcon } from "./socialIcons";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const navItems = [
    { name: "Projects", href: '#work' },
    { name: "Skills", href: '#skills' },
    { name: "Experience", href: '#experience' },
    {name: "Contact", href: '#contact'}
]

const socialLinks = {
    github: '#',
    linkedin: '#',
    twitter: '#'
};

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <motion.nav
            initial = {{y:-100}}
            animate = {{y:0}}
            className='fixed w-full z-50 bg-black/30 back-drop-blur-2xl transition-all duration-300 ease-out px-10'>
            <div className="flex items-center justify-between">

                <div className="max-width-7xl px-6 py-3">
                    <motion.div
                        whileHover={{scale: 1.05}}
                        className='flex items-center text-2xl font-bold transition-all duration-200 ease-in-out hover:cursor-pointer'>
                        <span className="text-gray-100">Gogo</span>
                        <span className="text-green-800 font-bolder text-3xl">.</span>
                        <span className="text-gray-100">Benson</span>
                    </motion.div>
                </div>
            
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex justify-between font-bold items-center text-gray-50 gap-6 bg-black/10 rounded-full px-4    py-2 border border-white/5 shadow-md shadow-green-800">
                        {
                        navItems.map((items, i) => (
                            <MenuItems key={items.name} index={i} href={items.href}>{items.name}</MenuItems>
                        ))
                        }
                    </div>
                    <div className="h-6 w-px bg-white/10 mx-2"></div>
                    <div className='flex gap-6'>
                        <a
                            href={socialLinks.github}
                            className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                <GithubIcon className="h-5 w-5 text-gray-50 transition-colors"/>
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                <LinkedInIcon className="h-5 w-5 text-gray-50 transition-colors"/>
                        </a>
                       
                    </div>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden inline p-2 rounded-lg bg-white/5 hover:bg-green-800 transition-colors">
                       {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-white"/>
                        ): (
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        )}
                </button>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate = {{opacity:1, y:0}}
                    className="md:hidden mt-4 pb-4 space-y-4 backdrop-filter backdrop-blur-lg"
                >
                    {
                        navItems.map((item) =>(
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-white hover:text-green-800 hover:bg-gray-50/50 rounded-lg transition-colors font-bold"
                            >
                                {item.name}
                        </a>
                        ))
                    }

                    <div className="pt-4 border-t border-white/5 hover:text-green-800">
                        <div className='flex gap-6 px-4'>
                            <a
                                href={socialLinks.github}
                                className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                    <GithubIcon className="h-5 w-5 text-gray-50 transition-colors"/>
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                className='p-2 rounded-lg bg-white/5 hover:bg-green-800 transitions-colors group'>
                                    <LinkedInIcon className="h-5 w-5 text-gray-50 transition-colors"/>
                            </a>
                       
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}