import React, { useState } from 'react';
import Link from "./foundational/Link";
import "../app/globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black pb-3 pt-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <span onClick={closeMenu}>
              <h1>Your Logo</h1>
            </span>
          </Link>
        </div>
        <button
          className="text-white md:text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="mt-4 flex flex-col space-y-2 lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0">
            <li>
              <Link href="https://docs.cloudrift.ai/getting_started">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Documentation
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contactus">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="[[Discord]]">
                <span onClick={closeMenu} className="block px-4 py-0 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  <i className="bi bi-discord" style={{ fontSize: '1.5rem', position: 'relative', top: '-5px' }}></i>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;