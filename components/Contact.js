import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

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
        setSubmitSuccess(true);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-section-mobile md:text-section font-medium mb-16">
          Get In Touch
        </h2>

        {submitSuccess ? (
          <div className="text-center py-20">
            <p className="text-2xl md:text-3xl font-medium mb-4">
              Thank you for reaching out!
            </p>
            <p className="text-lg text-gray-dark">
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-dark leading-relaxed mb-8">
                  I&apos;m available for freelance work and full-time positions. Whether you have a project in mind or just want to connect, feel free to reach out.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Connect with me</h3>
                  <div className="flex items-center gap-6">
                    <Link
                      href="https://www.linkedin.com/in/dram%C3%A9-kanji-francina-443ba792/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:opacity-70 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn size={24} />
                    </Link>
                    <Link
                      href="https://github.com/Dramekanji"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:opacity-70 transition-opacity"
                      aria-label="GitHub"
                    >
                      <FaGithub size={24} />
                    </Link>
                    <Link
                      href="https://www.instagram.com/kanjifrancina"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:opacity-70 transition-opacity"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    className="w-full border border-gray-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    className="w-full border border-gray-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    name="subject"
                    onChange={handleChange}
                    className="w-full border border-gray-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    className="w-full border border-gray-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-gray-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-dark">
              © 2024 Dramé Kanji. All rights reserved.
            </p>
            <Link href="#home" className="text-sm hover:opacity-70 transition-opacity">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
