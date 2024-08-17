import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState } from 'react';

const links = ['home', 'about', 'work', 'skills', 'contact'];

const SocialLinks = () => (
  <div className='socials'>
    <a href='https://x.com/Devdotun' target='_blank' rel='noreferrer' aria-label='Twitter'>
      <BsTwitter />
    </a>
    <a href='https://www.linkedin.com/in/abdul-qawi-laniyan-173355248/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
      <BsLinkedin />
    </a>
    <a href='https://github.com/Oladotunlaniyan' target='_blank' rel='noreferrer' aria-label='GitHub'>
      <BsGithub />
    </a>
    <a href='mailto: oladotunlaniyan@gmail.com' aria-label='Email'>
      <MdEmail />
    </a>
  </div>
);

const NavbarLinks = ({ onClick }) => (
  <ul className='app__navbar-links'>
    {links.map(item => (
      <li className='app__flex p-text' key={item}>
        <div></div>
        <a href={`#${item}`} onClick={onClick}>{item}</a>
      </li>
    ))}
    <li>
      <a href={images.resume} rel='noreferrer' target='_blank'>My Resume</a>
    </li>
  </ul>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <b><i>Abdul-Qawi</i></b>
      </div>

      <div className='app__navbar-links-container'>
        <NavbarLinks />
      </div>

      <button
        className='app__navbar-menu'
        onClick={handleMenuToggle}
        aria-label='Toggle menu'
        aria-expanded={isMenuOpen}
      >
        <HiMenuAlt4 />
      </button>

      {isMenuOpen && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
          className='menu'
        >
          <HiX onClick={handleMenuToggle} aria-label='Close menu' />
          <NavbarLinks onClick={handleMenuToggle} />
          <div className='app__flex'>
            <h2>Let’s Collaborate</h2>
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
