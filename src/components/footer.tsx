import React from "react";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="container py-16">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Packed with power beyond your imagination, yet feels so incredibly
          simple to use.
        </p>
      </footer>
    </>
  );
};

export default Footer;
