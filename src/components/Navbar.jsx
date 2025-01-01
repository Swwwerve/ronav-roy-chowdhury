import React, { useState } from 'react'
import Hamburger from './Hamburger';
import logo from "../assets/RRC_logo.png";
import { Link } from 'react-scroll';
import resume from "../assets/RRC_Resume.pdf";

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <img className='mx-2 w-10' src={logo} alt='Logo' />
                </div>

                {/* Links container for desktop */}
                <div className='m-8 items-center justify-center gap-6 text-lg hidden md:flex'>
                    <Link to="about-me" smooth={true} duration={1000} className='cursor-pointer'>About Me</Link>
                    <Link to="tech-stack" smooth={true} duration={1000} className='cursor-pointer'>Tech Stack</Link>
                    <Link to="work-experience" smooth={true} duration={1000} className='cursor-pointer'>Work Experience</Link>
                    <a href={resume} alt='Ronav Resume' target='_blank'>Resume</a>
                    <Link to="projects" smooth={true} duration={1500} className='cursor-pointer'>Projects</Link>
                    <Link to="contact-me" smooth={true} duration={2000} className='cursor-pointer'>Contact Me</Link>
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

            {/* Styles for hamburger and mobile menu */}
            <style jsx>{`
                .hamburger {
                    display: none;
                }

                @media (max-width: 767px) {
                    .hamburger {
                        display: block;
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        z-index: 10;
                    }

                    .mobile-menu {
                        display: block;
                        position: absolute;
                        top: 80px;  /* Adjust to place it below the navbar */
                        right: 0;
                        background-color: #333;
                        color: white;
                        width: 100%;
                        text-align: center;
                        padding: 20px;
                    }

                    .mobile-menu a {
                        display: block;
                        padding: 10px;
                        margin: 10px 0;
                        text-decoration: none;
                        color: white;
                        font-size: 18px;
                    }

                    .mobile-menu a:hover {
                        background-color: #555;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;