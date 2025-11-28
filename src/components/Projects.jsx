import React, { useState, useEffect } from 'react'
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id='projects' className='border-b border-neutral-900 pb-20'>
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={isMobile ? {opacity: 1, y: 0} : {opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                Projects
            </motion.h2>
            <div className='space-y-8'>
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index}
                        whileInView={{opacity: 1, y: 0}}
                        initial={isMobile ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                        transition={{duration: 0.6, delay: index * 0.1}}
                        className='group relative'>
                        <div className='flex flex-wrap lg:justify-center'>
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={isMobile ? {opacity: 1, x: 0} : {opacity: 0, x: -100}}
                                transition={{duration: 1}}
                                className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className='inline-block'>
                                    <img 
                                        src={project.image} 
                                        width={150} 
                                        height={150} 
                                        alt={project.title} 
                                        className='rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 border border-neutral-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20' 
                                    />
                                </a>
                            </motion.div>
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={isMobile ? {opacity: 1, x: 0} : {opacity: 0, x: 100}}
                                transition={{duration: 1}}
                                className='w-full max-w-xl lg:w-3/4 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h6 className='mb-3 text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent cursor-pointer hover:from-purple-300 hover:to-pink-300 transition-all duration-300'>
                                        {project.title}
                                    </h6>
                                </a>
                                <p className='mb-6 text-neutral-300 leading-relaxed'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className='px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-purple-200 border border-purple-700/30 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-200 hover:scale-105 cursor-default'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;