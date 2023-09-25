import React from "react";
import Logo from "@/components/logo";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 py-4">
        <Logo />
        {children}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
