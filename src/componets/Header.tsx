import { useCallback, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import useScroll from "../hooks/useScroll";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  let matches = useMediaQuery("(min-width:1023px)");
  let changeColor = useScroll();

  const handleScroll = useCallback((elem: any, ev: any) => {
    const element = document.querySelector(elem);

    const bodyRect = document.body?.getBoundingClientRect(),
      elemRect = element?.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;

    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
    ev.preventDefault();
  }, []);

  useEffect(() => {
    if (matches) setShowSidebar(false);
  }, [matches]);

  return (
    <>
      <div
        className={`fixed top-0 z-30 w-full ${
          changeColor ? "bg-slate-100" : "bg-primary-100"
        } py-4 drop-shadow-3xl transition-all`}
      >
        <nav className="mx-auto flex w-5/6 items-center justify-between gap-16">
          <img src={Logo} alt="logo" />
          <div className=" hidden w-full items-center justify-between lg:flex">
            <div className="flex gap-8">
              <a
                href="#"
                className="links"
                onClick={(ev) => handleScroll(".home", ev)}
              >
                Home
              </a>
              <a
                href="#"
                className="links"
                onClick={(ev) => handleScroll(".benefits", ev)}
              >
                Benefits
              </a>
              <a
                href="#"
                className="links"
                onClick={(ev) => handleScroll(".toclass", ev)}
              >
                Our Classes
              </a>
              <a
                href="#"
                className="links"
                onClick={(ev) => handleScroll(".contactus", ev)}
              >
                Contact Us
              </a>
            </div>
            <div className="flex items-center justify-between gap-8">
              <p>sign in</p>
              <button className="rounded bg-orange-500 p-2 capitalize text-white shadow">
                Become a Member
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:hidden ">
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`fixed ${
          showSidebar ? "right-0" : "-right-[19.75rem]"
        } bottom-0 top-0 z-40 h-full w-[18.75rem] bg-primary-100 py-4 drop-shadow-4xl transition-all duration-300`}
      >
        <button
          className="float-right mr-12 p-2"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
        <nav className="flex h-full w-full flex-col items-center gap-5 py-2">
          <a
            href="#"
            className="links"
            onClick={(ev) => handleScroll(".home", ev)}
          >
            Home
          </a>
          <a
            href="#"
            className="links"
            onClick={(ev) => handleScroll(".benefits", ev)}
          >
            Benefits
          </a>
          <a
            href="#"
            className="links"
            onClick={(ev) => handleScroll(".toclass", ev)}
          >
            Our Classes
          </a>
          <a
            href="#"
            className="links"
            onClick={(ev) => handleScroll(".contactus", ev)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
