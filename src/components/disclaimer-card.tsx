import React from "react";

export default function DisclaimerCard() {
  return (
    <div className="mx-auto max-w-screen-md text-left text-sm text-muted-foreground">
      <span className="text-primary">Disclaimer:</span> Currently the backend is
      not deployed. For a working demo please contact us at:{" "}
      <a
        href="tel:+917588339211"
        className="transform transition-all duration-300 hover:text-primary"
      >
        7588339211
      </a>{" "}
      /{" "}
      <a
        href="tel:+918485850146"
        className="transform transition-all duration-300 hover:text-primary"
      >
        8485850146
      </a>
      , or email us at:{" "}
      <a
        href="mailto:osurve20ece@student.mes.ac.in"
        className="transform transition-all duration-300 hover:text-primary"
      >
        osurve20ece@student.mes.ac.in
      </a>{" "}
      /{" "}
      <a
        href={"mailto:hmeta20comp@student.mes.ac.in."}
        className="transform transition-all duration-300 hover:text-primary"
      >
        hmeta20comp@student.mes.ac.in
      </a>
    </div>
  );
}
