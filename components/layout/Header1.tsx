"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logoSticky from "@/public/images/logo-2.png";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

interface Header1Props {
  handleOpen: () => void;
  handleRemove: () => void;
  handleToggle: () => void;
  scroll: boolean;
  searchToggle: boolean;
}

const Header1: React.FC<Header1Props> = ({
  handleOpen,
  handleRemove,
  handleToggle,
  scroll,
  searchToggle,
}) => {
  return (
    <>
      <header className={`main-header header-style-one ${
        scroll ? "fixed-header" : ""
      } ${searchToggle ? "moblie-search-active" : ""}`}>
        <div className="outer-container">
          <div className="header-lower anim-fade-move">
            <div className="inner-container">
              <div className="main-box">
                {/* Logo */}
                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="Logo" />
                    </Link>
                  </div>
                </div>
                {/* Navigation */}
                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <NavLinks />
                  </nav>
                </div>
                {/* Action Box */}
                <div className="action-box">
                  <button className="ui-btn search-btn" onClick={handleToggle}>
                    <i className="icon fal fa-search"></i>
                  </button>
                  <Link href="/page-contact" className="theme-btn btn-style-one">
                    <span className="btn-arrow-left">
                      <i className="far fa-chevron-right"></i>
                    </span>
                    <span className="btn-title"> Get In Touch</span>
                  </Link>
                </div>
                {/* Mobile Toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
      <div className="mobile-menu">
        <div
          className="menu-backdrop"
          onClick={handleRemove}
        />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div
              className="close-btn"
              onClick={handleRemove}
            >
              <i className="fa fa-times" />
            </div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
        </nav>
      </div>

        {/* Search Popup */}
        <div className={`search-popup ${searchToggle ? "active" : ""}`}>
          <span className="search-back-drop" onClick={handleToggle}></span>
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times"></span>
          </button>
          <div className="search-inner">
            <form>
              <div className="form-group">
                <input type="search" placeholder="Search..." required autoFocus />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
        <div
        className={`sticky-header ${
          scroll ? "fixed-header animated slideInDown" : ""
        }`}
      >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <Image src={logoSticky} alt="Logo" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <ul className="navigation clearfix">
                    <NavLinks />
                  </ul>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
              <Link href="#" className="header-phone_box">
                <span className="icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span className="info">
                  Call Anytime
                  <strong>+88 017 500 500 88</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
