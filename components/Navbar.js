import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 bg-[#008080] shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/"}>
          <Image
            src="/assets/images/kanjidevlogowhite3.png"
            alt="/"
            width={100}
            height={125}
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase ">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase ">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase ">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase ">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#008080] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p=10 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/images/kanjidevlogowhite3.png"
                alt="/"
                width={80}
                height={30}
              />
              <div
                onClick={handleNav}
                className="rounded-full hover:scale-125 shadow-xl shadow-black p-3 cursor-pointer ease-in duration-300"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build your brand and grow your business
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest ">Get In Touch</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-950 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/dram%C3%A9-kanji-francina-443ba792/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-950  p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <Link
                    href="https://github.com/Dramekanji"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-950  p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <Link
                    href="https://www.instagram.com/kanjifrancina"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </div>
                {/* <div className="rounded-full shadow-lg shadow-gray-950  p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiOutlineMail />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
