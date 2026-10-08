import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  // Email ko chhor kar baqi sab socials (Github, LinkedIn) filter kar rahe hain
  const filteredSocials = yourData.socials.filter(
    (social) => social.title.toLowerCase() !== "email"
  );

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {filteredSocials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;