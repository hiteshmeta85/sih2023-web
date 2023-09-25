import React from "react";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="container py-16">
        <Logo />
        <p className="max-w-sm text-sm text-muted-foreground">
          Unlocking Communication Horizons: From Text to Video, PIB Press
          Releases Speak 15 Languages, Uniting a Nation of Diverse Voices!
        </p>
      </footer>
    </>
  );
};

export default Footer;
