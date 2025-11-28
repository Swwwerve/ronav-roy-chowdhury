import React from 'react'
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rrc_profile.png";
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-20 lg:mb-35'>
            <div className='flex flex-wrap items-center lg:justify-center'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 
                        variants={container(0)}
                        initial='hidden'
                        animate='visible'
                        className='pb-8 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                            Ronav Roy Chowdhury
                        </motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial='hidden'
                        animate='visible'
                        className='bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-semibold mb-6'>
                            Software Engineer
                        </motion.span>
                        <motion.div
                        variants={container(1)}
                        initial='hidden'
                        animate='visible'
                        className='w-full'>
                            <div className='bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'>
                                <p className='text-neutral-300 leading-relaxed text-lg'>
                                    {HERO_CONTENT}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{x:100, opacity:0}} 
                        animate={{x:0, opacity:1}} 
                        transition={{duration:1, delay:1.2}}
                        className='rounded-2xl max-w-md w-full border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105' 
                        src={profilePic} alt="Ronav Roy Chowdhury" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;