import { useState } from "react";
import { navLinks } from "../components/NavLink";
import logo from "../logos/Proyecto_nuevo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-auto md:h-16 py-4 md:py-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
					  <a href="/"><img src={logo.src} alt="" height={50} width={100} /></a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#4E5059] hover:text-[#323232] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <ul className="flex space-x-2">
              {navLinks.map(link => (
                <li key={link.name} className="px-4">
                    <a
                      href={link.href}
                      className="flex items-center gap-x-2 text-[#4E5059] hover:text-[#323232] gap-2 font-medium transition-colors duration-200 relative group py-2 text-sm"
                    > {link.icon}
                      <span>{link.name}</span>
                      <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span>
                    </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="w-full mt-4 md:hidden" aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-2 items-center">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 px-4 py-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
