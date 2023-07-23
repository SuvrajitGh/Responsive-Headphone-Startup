import './navbar.css';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`navbar wrapper h-16 flex justify-between items-center ${showMenu ? 'mobile-menu' : ''}`}>
        <div className="company-logo">
          <h3 className="font-semibold">HEADPHONE LOGO</h3>
        </div>
        <ul className={`flex gap-9 items-center ${showMenu ? 'show' : ''}`}>
          <li><a href="/" className="navln hover-links font-semibold">Customer</a></li>
          <li><a href="/" className="navln hover-links font-semibold">Products</a></li>
          <li><a href="/" className="navln hover-links font-semibold">Services</a></li>
          <li><a href="/" className="navln font-semibold primary-button">sign in</a></li>
          <li><a href="/" className="navln secondary-button font-semibold">log in</a></li>
        </ul>
        <span className="nav-toggle" onClick={toggleMenu}><a href="/"><AlignJustify /></a></span>
      </div>
    </>
  );
};

export default Navbar;
