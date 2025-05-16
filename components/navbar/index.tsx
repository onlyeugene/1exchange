"use client";

import { useState } from "react";
import Logo from "./logo";
import NavLinks from "./nav-links";
// import NavDropdownMenu from "./dropdown-menu";
import AuthButtons from "./auth-buttons";
import MobileMenu from "./mobile-menu";
import Container from "../ui/container";
import { colors } from "@/lib/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed w-full z-50 top-0 start-0 "
      style={{ backgroundColor: colors.background.blue }}
    >
      <Container>
        <div className="w-full flex items-center justify-between">
          <Logo />
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks />
            {/* <NavDropdownMenu /> */}
          </div>
          <AuthButtons />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
