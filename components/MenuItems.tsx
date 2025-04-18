import { motion } from 'framer-motion'
import React from 'react'

const MenuItems = ({ children, index, href }: {
    children: React.ReactNode,
    index: number;
    href: string;
}) => {
    return (
        <motion.a
            href={href}
            initial={{ opacity: 0, y: -20 }}
            animate= {{opacity:1, y:0}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeInOut"
            }}
            className='relative overflow-hidden px-2'   
        >
            <span className='text-gray-50 hover:text-green-800 transaition-colors hover:cursor-pointer'>{children}</span>
      </motion.a>
  )
}

export default MenuItems