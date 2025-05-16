"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Crypto Markets", href: "/markets" },
  { label: "Crypto News", href: "/news" },
  { label: "FAQs", href: "/faqs" },
];

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={toggleMenu}
        type="button"
        className=" block md:hidden items-center p-2 w-10 h-10 justify-center text-sm cursor-pointer rounded-lg focus:ring-0"
      >
        <span className="sr-only">Open main menu</span>
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[400px] max-[400px]:w-full bg-[#0f98c1] z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg text-white font-bold">One Exchange</h1>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    onClick={toggleMenu}
                    href={link.href}
                    className={`text-white border-b py-3 border-[#22222223] items-center block text-sm font-semibold transition-colors duration-200 ${
                      pathname === link.href ? "font-medium" : " "
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <div className="flex justify-center">
                <button className="border w-full text-white mx-10 cursor-pointer border-[#74bfd8] hover:border-[#74bfd8] font-semibold hover:bg-[#74bfd8] py-2 rounded-md">
                  Contact Us
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
