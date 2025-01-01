import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from 'react-icons/fa';
import { FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiTensorflow } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Technologies = () => {
    return (
        <div id='tech-stack' className='border-b border-neutral-800 pb-24'>
            <motion.h2  
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}}
            className='my-20 text-center text-4xl'>Technology Stack
            </motion.h2>
            
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                variants={iconVariants(2.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className='text-7xl' style={{color: '#FFDE57'}} />
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaAws className='text-7xl text-white' />
                </motion.div>

                <motion.div 
                variants={iconVariants(4.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaDocker className='text-7xl' style={{color: '#1D63ED'}} />
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-7xl text-red-400' />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaDatabase className='text-7xl text-blue-400' />
                </motion.div>

                <motion.div 
                variants={iconVariants(4.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTensorflow className='text-7xl text-orange-400' />
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className='text-7xl text-sky-700' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;