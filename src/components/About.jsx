import React from 'react'
import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about-me' className='border-b border-neutral-900 pb-20'>
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                About <span className='bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent'>Me</span>
            </motion.h2>
            <div className='flex flex-wrap items-center lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/3 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img 
                            className='rounded-2xl w-64 h-64 object-cover border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105' 
                            src={aboutImg} 
                            alt="about" 
                        />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-2/3 lg:pl-8'>
                    <div className='bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'>
                        <p className='text-neutral-300 leading-relaxed text-lg'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;