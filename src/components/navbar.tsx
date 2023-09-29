import React from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-4">
          {children}
          <ModeToggle />
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
