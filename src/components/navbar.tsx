import React from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import Image from "next/legacy/image";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-1">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Logo />
          </Link>
          {/*logo*/}
          <div className="px-2 pt-2 dark:bg-white">
            <Image
              src="/images/ministry_of_information_and_broadcasting_logo.png"
              alt="logo"
              width={100}
              height={56}
              objectFit="contain"
            />
          </div>
        </div>
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
