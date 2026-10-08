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
            <div className="mt-5">
              <Button
                type="primary"
                onClick={() => {
                  window.open(
                    "https://wa.me/923365566580?text=Hi,%20I%20want%20to%20schedule%20a%20call",
                    "_blank"
                  );
                }}
              >
                Schedule a call
              </Button>
            </div>
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