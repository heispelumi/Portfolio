import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed font top-0  left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="flex justify-between  items-center px-6 py-4 bg-[#1A1A1A] border-b border-gray-700">
      <h1 className="text-gray-500 text-[20px] md:text-[30px] font-bold">
  &lt;<span className="text-white">A</span><span className="text-orange-400">P</span>/&gt;
</h1>



        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <IoIosClose className="text-white w-8 h-8 transition-all duration-300" />
          ) : (
            <HiOutlineMenuAlt4 className="text-white w-8 h-8 transition-all duration-300" />
          )}
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-bold text-lg">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Full Screen Mobile Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#111111] text-white transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-8 py-10">
          <div className="flex flex-col gap-8">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <IoIosClose className="text-white w-10 h-10" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 text-[20px] font-bold">
              <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 transition">Home</Link>
              <Link to="/projects" onClick={toggleMenu} className="hover:text-yellow-400 transition">Projects</Link>
              <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-400 transition">About</Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-400 transition">Contact</Link>
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-600 my-6"></div>

            {/* Extra Contents */}
            <div className="space-y-4">
              <h2 className="text-lg text-gray-400">Get in Touch</h2>
              <Link to="/resume" onClick={toggleMenu} className="block text-center bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition">
                View My Resume
              </Link>
              <p className="text-sm text-gray-400">Let’s build something amazing together!</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            © 2025 Pelumi | All Rights Reserved
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
