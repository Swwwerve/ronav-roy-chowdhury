import React from 'react'
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div id='work-experience' className='border-b border-neutral-900 pb-20'>
            <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                Work Experience
            </motion.h2>
            <div className='space-y-8'>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index} 
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 50}}
                        transition={{duration: 0.6, delay: index * 0.1}}
                        className='group relative'>
                        <div className='flex flex-wrap lg:justify-center'>
                            <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1}}
                            className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                                <div className='inline-block'>
                                    <p className='text-sm font-semibold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full border border-purple-400/20'>
                                        {experience.year}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1}}
                            className='w-full max-w-xl lg:w-3/4 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1'>
                                <h6 className='mb-3 text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                    {experience.role}
                                </h6>
                                <p className='mb-4 text-purple-300 font-medium flex items-center gap-2'>
                                    <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                                    {experience.company}
                                </p>
                                <p className='mb-6 text-neutral-300 leading-relaxed'>
                                    {experience.description.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {experience.technologies.map((tech, index) => (
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

export default Experience;