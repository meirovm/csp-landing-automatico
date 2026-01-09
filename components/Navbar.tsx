import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaDiscord } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 absolute top-4 z-50">
      <nav className="w-full max-w-7xl rounded-2xl backdrop-filter backdrop-blur-[2px] bg-gradient-to-r from-[rgba(34,34,34,0.4)] via-[rgba(64,64,64,0.4)] to-[rgba(55,55,55,0.4)]">
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          {/* Logo (left) */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo1.png" alt="AUTOMATICO" width={40} height={40} />
              <span className="text-foreground font-bold text-xl">AUTOMATICO</span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-8">
              <Link href="/#pricing" className="text-foreground hover:text-accent transition-colors">
                Цены
              </Link>
              <Link href="https://docs.cloudrift.ai/getting_started" className="text-foreground hover:text-accent transition-colors">
                Документация
              </Link>
              <Link href="/#faq" className="text-foreground hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                О Нас
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://wa.me/77066868101" className="text-foreground hover:text-accent transition-colors">
              +7 (706) 68-68-101
            </Link>
            <Link href="https://discord.gg/Jyu5rV5N" className="text-accent hover:text-foreground transition-colors">
              <FaDiscord className="w-5 h-5" />
            </Link>
            <Link
              href="/console"
              className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-primary-dark hover:text-foreground transition-colors"
            >
              Арендовать GPU
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-accent focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mb-4 mx-4 py-2 px-4 rounded-md backdrop-filter">
            <div className="flex flex-col gap-3">
              <Link
                href="/#pricing"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Цены
              </Link>
              <Link
                href="https://docs.cloudrift.ai/getting_started"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Документация
              </Link>
              <Link
                href="/#faq"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                О Нас
              </Link>
              <Link
                href="https://wa.me/77066868101"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                +7 (706) 68-68-101
              </Link>
              <Link
                href="https://discord.gg/Jyu5rV5N"
                className="text-foreground hover:text-accent py-2 transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaDiscord className="w-5 h-5" /> Discord
              </Link>
              <Link
                href="/console"
                className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-primary-dark hover:text-foreground transition-colors inline-block w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Арендовать GPU
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
