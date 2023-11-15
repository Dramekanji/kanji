import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { PiFlowerLotusFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#008080]">
          Contact
        </p>
        <h2 className="py-4 text-gray-300">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/contact-img.png"
                  alt="/"
                  width={500}
                  height={200}
                  className="rounded-xl hover:scale-105 ease-in duration-300 "
                />
              </div>
              <div>
                <h2 className="py-2">Dramé Kanji</h2>
                <p>Web | Software Developer</p>
                <p>
                  I'm available for freelance and full-time positions. Fell free
                  to get in touch.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Let's Connect</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <FaLinkedinIn />
                  </div>{" "}
                  <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <FaGithub />
                  </div>{" "}
                  <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <FaInstagram />
                  </div>{" "}
                  <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-[#008080] text-black"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-[#008080] text-black"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email </label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-[#008080] text-black"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject </label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-[#008080] text-black"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message </label>
                  <textarea
                    className="boreder-2 rounded-lg p-3 border-[#008080] text-black"
                    rows={15}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white mt-5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 mt-6">
          <Link href={"/"}>
            <div className="rounded-full shadow-lg shadow-gray-950 bg-[#008080]  p-4 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
              <PiFlowerLotusFill className="m-auto" size={50} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
