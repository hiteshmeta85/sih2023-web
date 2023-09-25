import React from "react";
import Logo from "@/components/logo";
import Link from "next/link";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav className="container flex flex-wrap items-center justify-between gap-4 p-4">
        <Link href={"/"}>
          <Logo />
        </Link>
        {children}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
