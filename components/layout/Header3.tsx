"use client";

import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

interface Header3Props {
  handleOpen: () => void;
  handleRemove: () => void;
  handleToggle: () => void;
  scroll: boolean;
  searchToggle: boolean;
}

const Header3: React.FC<Header3Props> = ({
  handleOpen,
  handleRemove,
  handleToggle,
  scroll,
  searchToggle,
}) => {
  return (
    <header
      className={`main-header header-style-three ${
        scroll ? "fixed-header" : ""
      } ${searchToggle ? "moblie-search-active" : ""}`}>
      <div className="outer-container">
        <div className="header-lower">
          <div className="inner-container">
            <div className="main-box">
              <div className="left-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo-3.png" alt="Logo" />
                  </Link>
                </div>
                  <div className="nav-outer">
                    <nav className="nav main-menu">
                      <NavLinks />
                    </nav>
                  </div>
              </div>
              <div className="right-box">
                <div className="action-box">
                  <Link href="#" className="header-phone_box">
                    <span className="icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
                    <span className="info">
                      Call Anytime
                      <strong>+(123) 456 7890</strong>
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="ui-btn search-btn"
                    onClick={handleToggle}>
                    <i className="icon fal fa-search" />
                  </button>
                </div>
                <div className="action-box-two">
                  <Link href="/page-contact" className="theme-btn btn-style-three">
                    <span className="btn-arrow-left">
                      <i className="far fa-chevron-right"></i>
                      <i className="far fa-chevron-right"></i>
                    </span>
                    <span className="btn-title"> Get In Touch</span>
                  </Link>
                </div>
              <div
                className="mobile-nav-toggler"
                onClick={handleOpen}>
                <span className="icon lnr-icon-bars" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
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

      {/* SEARCH POPUP */}
      <div className={`search-popup ${searchToggle ? "active" : ""}`}>
        <span
          className="search-back-drop"
          onClick={handleToggle}
        />

        <button
          type="button"
          className="close-search"
          onClick={handleToggle}
        >
          <span className="fa fa-times" />
        </button>

        <div className="search-inner">
          <form>
            <div className="form-group">
              <input
                type="search"
                placeholder="Search here..."
                autoFocus
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* STICKY HEADER */}
      <div
        className={`sticky-header ${
          scroll ? "fixed-header animated slideInDown" : ""
        }`}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo-2.png" alt="Logo" />
              </Link>
            </div>
            <nav className="main-menu">
              <NavLinks />
            </nav>
            <div
              className="mobile-nav-toggler"
              onClick={handleOpen}>
              <span className="icon lnr-icon-bars" />
            </div>
            <Link href="#" className="header-phone_box">
              <span className="icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
              <span className="info">
                Call Anytime
                <strong>+88 017 500 500 88 </strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3;
