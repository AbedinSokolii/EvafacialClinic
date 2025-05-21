import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/eva.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["Home", "About", "Services", "Socials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const shouldBeScrolled = window.scrollY > 10;
      setScrolled(shouldBeScrolled);
      if (shouldBeScrolled && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "bg-blue-700/85 backdrop-blur-md shadow-lg" 
          : "bg-white/30 backdrop-blur-sm dark:bg-transparent"}`}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div
          onClick={() => handleScrollTo("home")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img src={logo} alt="Eva Logo" className="h-12 w-auto" />
          <span className={`text-lg font-semibold select-none ${
            scrolled ? 'text-white' : 'text-blue-700 dark:text-white'
          }`}>
            Eva Facial Clinic
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScrollTo(link)}
              className={`transition-colors ${
                scrolled 
                  ? 'text-white hover:text-blue-200' 
                  : 'text-blue-700 hover:text-blue-900 dark:text-white dark:hover:text-blue-200'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            scrolled ? 'text-white' : 'text-blue-700 dark:text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div 
              className="bg-blue-700 shadow-lg"
              style={{
                borderBottomLeftRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem',
              }}
            >
              <div className="flex flex-col px-6 py-4 space-y-4 text-white font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleScrollTo(link)}
                    className="text-left hover:text-blue-200 transition-colors text-lg"
                  >
                    {link}
                  </button>
                ))}
                {/* Theme toggle in mobile */}
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
