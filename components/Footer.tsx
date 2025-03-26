import React from "react";
import Link from "./foundational/Link";
import Image from "next/image";

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  companyName?: string;
  description?: string;
  productLinks?: Array<{ name: string; href: string }>;
  companyLinks?: Array<{ name: string; href: string }>;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo1.png",
  logoAlt = "Automatico",
  companyName = "Automatico",
  description = "High-performance computing solutions for your needs. Experience unparalleled performance with our cutting-edge technology.",
  productLinks = [
    { name: "RTX 4090", href: "/rtx4090" },
    { name: "RTX 5090", href: "/rtx5090" },
    { name: "Offerings", href: "/offerings" },
    { name: "Документация", href: "https://docs.cloudrift.ai/getting_started" },
  ],
  companyLinks = [
    { name: "О Нас", href: "/about" },
    { name: "Console", href: "/console" },
    { name: "Terms of Service", href: "/terms.pdf" },
  ],
}) => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={190}
                  height={200}
                  className="mb-4"
                />
              )}
            </Link>
            <p className="text-gray-400 mt-4">{description}</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.href.endsWith('.pdf') ? (
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;