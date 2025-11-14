import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 isolate ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Kanji
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-base hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/#skills" className="text-base hover:opacity-70 transition-opacity">
              Skills
            </Link>
            <Link href="/#projects" className="text-base hover:opacity-70 transition-opacity">
              Projects
            </Link>
          </div>

          {/* Mobile Menu Icon - Animated */}
          <button
            onClick={handleNav}
            className="md:hidden cursor-pointer relative w-6 h-6 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={nav ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-6 h-0.5 bg-black"
            />
            <motion.span
              animate={nav ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute w-6 h-0.5 bg-black"
            />
            <motion.span
              animate={nav ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-6 h-0.5 bg-black"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Slide Animation */}
      {mounted && createPortal(
        <AnimatePresence>
          {nav && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
                onClick={handleNav}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[9999] md:hidden shadow-2xl overflow-y-auto isolate"
                style={{ backgroundColor: '#FFFFFF', willChange: 'transform' }}
              >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-8 h-20 border-b border-gray-border">
                  <Link href="/" className="text-xl font-medium" onClick={() => setNav(false)}>
                    Kanji
                  </Link>
                  <button
                    onClick={handleNav}
                    className="cursor-pointer relative w-6 h-6 flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <motion.span
                      animate={{ rotate: 45 }}
                      className="absolute w-6 h-0.5 bg-black"
                    />
                    <motion.span
                      animate={{ rotate: -45 }}
                      className="absolute w-6 h-0.5 bg-black"
                    />
                  </button>
                </div>

                {/* Menu Links with Stagger Animation */}
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="flex flex-col gap-1 p-8 flex-1"
                >
                  <motion.div
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: 50, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href="/#about"
                      onClick={() => setNav(false)}
                      className="block text-3xl font-medium py-4 hover:opacity-70 transition-opacity"
                    >
                      About
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: 50, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href="/#skills"
                      onClick={() => setNav(false)}
                      className="block text-3xl font-medium py-4 hover:opacity-70 transition-opacity"
                    >
                      Skills
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: 50, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href="/#projects"
                      onClick={() => setNav(false)}
                      className="block text-3xl font-medium py-4 hover:opacity-70 transition-opacity"
                    >
                      Projects
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="p-8 border-t border-gray-border"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setNav(false)}
                    className="block w-full text-center border border-black px-6 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
      )}
    </nav>
  );
};

export default Navbar;
