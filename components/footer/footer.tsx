import React from "react";
import Link from "next/link";
import { Twitter, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d7fa3] text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">1xchange</span>
        </div>
        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/markets" className="hover:underline underline-offset-4">
            Markets
          </Link>
          <Link href="/news" className="hover:underline underline-offset-4">
            News
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
        </nav>
        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#2fb6ff] transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/1e_xchange"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#2fb6ff] transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:support@1xchange.com"
            aria-label="Email"
            className="hover:text-[#2fb6ff] transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-[#0f98c1]">
        &copy; {new Date().getFullYear()} OneExchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
