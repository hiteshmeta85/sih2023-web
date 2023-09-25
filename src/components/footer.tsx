import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:container flex flex-col justify-between items-center gap-6 space-y-8 md:flex-row mb-[2rem]">
      <div>
        <p className="text-2xl font-bold md:text-3xl">Lorem Epsum.</p>
        <p className="text-sm">
          Packed with power beyond your imagination, yet feels so inceredibly
          simple to use.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
