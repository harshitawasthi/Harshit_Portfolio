import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Freelancer",
          "Researcher",
          "Web Crawler",
          // "Open Source Contributor",
          // "React Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
