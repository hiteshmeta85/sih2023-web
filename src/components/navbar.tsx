import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 p-2 py-4 md:container">
      <div>
        <p className="text-2xl font-bold md:text-3xl">Lorem Epsum.</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button className="" variant="outline" type="button" onClick={() => console.log("clicked")}>Video Showcase</Button>
        <Button className="" variant="outline" type="button" onClick={() => console.log("clicked")}>Avatar Showcase</Button>
      </div>
    </nav>
  );
};

export default Navbar;
