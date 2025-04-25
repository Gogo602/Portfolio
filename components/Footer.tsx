import React from 'react'
import { GithubIcon, LinkedInIcon } from './socialIcons'
import { EnvelopeIcon } from '@heroicons/react/16/solid'

const Footer = () => {
  return (
      <footer className='bg-black/30 border-t border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                  <div>
                      <h3 className='text-lg font-semibold text-gray-50 mb-4'>About</h3>
                      <p className='text-gray-100'>
                          Building digital experiences that combime modern technology with exceptional design 
                      </p>
                  </div>
                  <div>
                      <h3 className='text-lg font-semibold text-gray-50 mb-4'>Links</h3>
                      <ul className='space-y-2'>
                          <li>
                              <a href='#work' className='text-gray-100 hover:text-gray-50 transition-colors'>Projects</a>
                          </li>
                          <li>
                              <a href='#about' className='text-gray-100 hover:text-gray-50 transition-colors'>About</a>
                          </li>
                          <li>
                              <a href='#contact' className='text-gray-100 hover:text-gray-50 transition-colors'>Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h3 className='text-lg font-semibold text-gray-50 mb-4'>Legal</h3>
                      <ul className='space-y-2'>
                          <li>
                              <a href='#privacy' className='text-gray-100 hover:text-gray-50 transition-colors'>Privacy</a>
                          </li>
                          <li>
                              <a href='#terms' className='text-gray-100 hover:text-gray-50 transition-colors'>Terms</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h3 className='text-lg font-semibold text-gray-50 mb-4'>Connect</h3>
                      <ul className='space-x-4 space-y-4 flex md:block'>
                            <GithubIcon href='#work' className='w-6 h-6 text-gray-100 hover:text-gray-50 transition-colors'/>
                            <LinkedInIcon href='#work' className='w-6 h-6 text-gray-100 hover:text-gray-50 transition-colors'/>
                            <EnvelopeIcon href='#work' className='w-6 h-6 text-gray-100 hover:text-gray-50 transition-colors'/>
                      </ul>
                  </div>
                  
              </div>
               <div className='border-t w-full border-gray-800 mt-12 pt-8 text-center'>
                    <p className='text-gray-100'>
                    &copy; {new Date().getFullYear()} Gogo Benson. All rights reserved
                    </p>
                </div>
          </div>
         
    </footer>
  )
}

export default Footer