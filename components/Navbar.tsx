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
              <table>
                <tbody>
                  <tr>
                    <td><img src="logo1.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} /></td>
                    <td><h1 className="text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">AUTOMATICO</h1></td>
                  </tr>
                </tbody>
              </table>
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
                  Документация
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Цены
                </span>
              </Link>
            </li>
            {/*<li>
              <Link href="/#contactus">
              <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                Contact
              </span>
              </Link>
            </li>*/}
            <li>
              <Link href="/about">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  О Нас
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/77066868101">
              <span className="block px-4 py-2 text-white lg:inline lg:py-0">
                +7 (706) 68-68-101
                </span>
              </Link>
              </li>
            <li>
              <Link href="https://discord.gg/Jyu5rV5N">
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