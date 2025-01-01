import React from 'react'
import { CONTACT } from '../constants';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div id='contact-me' className='border-b border-neutral-900 pb-20'>
            <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y:-100}}
            transition={{duration: 0.5}}
            className='my-10 text-center text-4xl'>Get In Touch
            </motion.h2>
            <div className='text-center tracking-tighter'>
                <motion.p 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x:-100}}
                transition={{duration: 1}}
                className='my-4'>{CONTACT.address}
                </motion.p>
                <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/ronavrc/" alt='Ronav linkedin' target='_blank'><FaLinkedin /></a>
                <a href="http://github.com/Swwwerve" alt='Ronav Github' target='_blank'><FaGithub /></a>
                <a href="https://www.instagram.com/ron_v__/" alt='Ronav Instagram' target='_blank'><FaInstagram /></a>
            </div>
        </div>
    );
};

export default Contact;