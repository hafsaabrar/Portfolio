import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (scrollCallback) => {
    if (router.pathname === "/") {
      if (typeof scrollCallback === "function") {
        scrollCallback();
      }
    } else {
      router.push("/").then(() => {
        if (typeof scrollCallback === "function") {
          setTimeout(() => {
            scrollCallback();
          }, 100);
        }
      });
    }
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link cursor-pointer"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="theme toggle"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="menu"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={() => router.push("/")}>Home</Button>
                <Button onClick={() => handleNavigation(handleWorkScroll)}>
                  Work
                </Button>
                <Button onClick={() => handleNavigation(handleAboutScroll)}>
                  About
                </Button>
                {showResume && (
                  <Button onClick={() => router.push("/resume")}>
                    Resume
                  </Button>
                )}
                <Button
                  onClick={() => {
                    window.open(
                      "https://wa.me/923365566580?text=Hi,%20I%20want%20to%20connect",
                      "_blank"
                    );
                  }}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        <div className="flex items-center">
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={() => handleNavigation(handleWorkScroll)}>
            Work
          </Button>
          <Button onClick={() => handleNavigation(handleAboutScroll)}>
            About
          </Button>
          {showResume && (
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              Resume
            </Button>
          )}

          <Button
            onClick={() => {
              window.open(
                "https://wa.me/923365566580?text=Hi,%20I%20want%20to%20connect",
                "_blank"
              );
            }}
          >
            Contact
          </Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="theme toggle"
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;