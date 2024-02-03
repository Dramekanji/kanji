import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { PiFlowerLotusFill } from "react-icons/pi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === "Ok") {
        setSubmitSuccess(true); // Set success state to true
        // Optionally reset form fields here
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#008080]">
          Contact
        </p>
        <h2 className="py-4 text-gray-300">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/contact-img.png"
                  alt="/"
                  width={500}
                  height={200}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Dramé Kanji</h2>
                <p>Web | Software Developer</p>
                <p>
                  I'm available for freelance and full-time positions. Feel free
                  to get in touch.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-950 p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <Link
                      href="https://www.linkedin.com/in/dram%C3%A9-kanji-francina-443ba792/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-950 p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <Link
                      href="https://github.com/Dramekanji"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-950 p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <Link
                      href="https://www.instagram.com/kanjifrancina"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                  {/* <div className="rounded-full shadow-lg shadow-gray-950 p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
                    <AiOutlineMail />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              {submitSuccess ? (
                <div className="text-center text-white text-4xl">
                  Thank you! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        name="name"
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 flex border-[#008080] text-black"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        name="phoneNumber"
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 flex border-[#008080] text-black"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 flex border-[#008080] text-black"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      name="subject"
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 flex border-[#008080] text-black"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 border-[#008080] text-black"
                      rows={10}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 text-white mt-5 hover:bg-[#4DD0E1]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 mt-6 ml-40">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-950 bg-[#008080] p-4 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
              <PiFlowerLotusFill className="m-auto" size={50} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
