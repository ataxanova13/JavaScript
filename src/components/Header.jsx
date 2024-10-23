import React, { useState } from 'react';
import Menu from "../assets/icons/Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__left">
            <div className="header__log">
              <img src="/public/logo.svg" alt="logo" />
            </div>
            <div className="header__nav">
              <a href="#" className="header__nav-item">Services</a>
              <a href="#" className="header__nav-item">About</a>
              <a href="#" className="header__nav-item">Articles</a>
              <a href="#" className="header__nav-item">Contact</a>
            </div>
          </div>
          <div className="header__right">
            <a href="tel:(123) 456-7890" className="header__tel">(123) 456-7890</a>
            <button className="header__button">Request Consultation</button>
          </div>
          <button className="header__menu" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="header__menu-dropdown">
          <a href="tel:(123) 456-7890" className="header__tel">(123) 456-7890</a>
              <a href="#" className="header__nav-item">Services</a>
              <a href="#" className="header__nav-item">About</a>
              <a href="#" className="header__nav-item">Articles</a>
              <a href="#" className="header__nav-item">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
