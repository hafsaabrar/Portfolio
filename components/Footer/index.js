import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-10 laptop:mt-40 p-4 laptop:p-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold mt-2">
              TOGETHER
            </h1>
            <a href="mailto:hafsaabrar58@gmail.com">
  <Button type="primary">Schedule a call</Button>
</a>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 laptop:px-10 pb-10">
        <p className="text-sm font-bold mt-2 laptop:mt-10">
          Made With ❤ by{" "}
          <span className="text-pink-500 font-bold">
            Hafsa Bint E Abrar
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;