import React from "react";
import Logo from "@/components/logo";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <nav className="container flex flex-wrap items-center justify-between gap-4 p-4">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
