import React, { useState } from 'react'
import Hamburger from './Hamburger';
import logo from "../assets/RRC_logo.png";
import { Link } from 'react-scroll';
import resume from "../assets/RRC_Resume.pdf";
import './Navbar.css';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6 sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 px-4 border-b border-neutral-800/50'>
                <div className='flex flex-shrink-0 items-center'>
                    <img className='mx-2 w-10 hover:scale-110 transition-transform duration-300' src={logo} alt='Logo' />
                </div>

                {/* Links container for desktop */}
                <div className='m-8 items-center justify-center gap-8 text-base font-medium hidden md:flex'>
                    <Link to="about-me" smooth={true} duration={1000} className='cursor-pointer relative group'>
                        <span className='hover:text-purple-400 transition-colors duration-300'>About Me</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link to="tech-stack" smooth={true} duration={1000} className='cursor-pointer relative group'>
                        <span className='hover:text-purple-400 transition-colors duration-300'>Tech Stack</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link to="work-experience" smooth={true} duration={1000} className='cursor-pointer relative group'>
                        <span className='hover:text-purple-400 transition-colors duration-300'>Work Experience</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <a href={resume} alt='Ronav Resume' target='_blank' className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-purple-200 border border-purple-700/30 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105'>
                        Resume
                    </a>
                    <Link to="projects" smooth={true} duration={1500} className='cursor-pointer relative group'>
                        <span className='hover:text-purple-400 transition-colors duration-300'>Projects</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link to="contact-me" smooth={true} duration={2000} className='cursor-pointer relative group'>
                        <span className='hover:text-purple-400 transition-colors duration-300'>Contact Me</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                </div>

                {/* Hamburger icon */}
                <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </nav>

            {/* Mobile menu that appears when hamburger is clicked */}
            {hamburgerOpen && (
                <div className='mobile-menu'>
                    <Link to="about-me" smooth={true} duration={1000} className='cursor-pointer' onClick={toggleHamburger}>About Me</Link>
                    <Link to="tech-stack" smooth={true} duration={1000} className='cursor-pointer' onClick={toggleHamburger}>Tech Stack</Link>
                    <Link to="work-experience" smooth={true} duration={1000} className='cursor-pointer' onClick={toggleHamburger}>Work Experience</Link>
                    <a href={resume} alt='Ronav Resume' target='_blank' onClick={toggleHamburger}>Resume</a>
                    <Link to="projects" smooth={true} duration={1500} className='cursor-pointer' onClick={toggleHamburger}>Projects</Link>
                    <Link to="contact-me" smooth={true} duration={2000} className='cursor-pointer' onClick={toggleHamburger}>Contact Me</Link>
                </div>
            )}
        </>
    );
};

export default Navbar;