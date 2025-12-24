"use client";

import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

interface Header2Props {
  handleOpen: () => void;
  handleRemove: () => void;
  handleToggle: () => void;
  scroll: boolean;
  searchToggle: boolean;
}

const Header2: React.FC<Header2Props> = ({
  handleOpen,
  handleRemove,
  handleToggle,
  scroll,
  searchToggle,
}) => {

    return (
        <>
        <header className={`main-header header-style-two ${
                scroll ? "fixed-header" : ""
            } ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="outer-container">
                <div className="header-lower anim-fade-move" data-delay="0.25">
                <div className="inner-container">
                    <div className="main-box">
                    <div className="left-box">
                        <div className="logo-box">
                        <div className="logo">
                            <Link href="#"><img src="images/logo.png" alt="Logo" /></Link>
                        </div>
                        </div>
                        <div className="nav-outer">
                        <nav className="nav main-menu">
                            <NavLinks/>
                        </nav>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="action-box">
                            <Link href="#" className="header-phone_box">
                                <span className="icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
                                <span className="info">
                                Call Anytime
                                <strong>+ 88 ( 9800 ) 6802</strong>
                                </span>
                            </Link>
                            <button className="ui-btn search-btn" onClick={handleToggle}>
                                <i className="icon fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove}/>
                <nav className="menu-box">
                <div className="upper-box">
                    <div className="nav-logo">
                    <Link href="#"><img src="images/logo.png" alt="Image" /></Link>
                    </div>
                    <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"></i></div>
                </div>
                <ul className="navigation clearfix">
                    <MobileMenu/>
                </ul>
                <ul className="contact-list-one">
                    <li>
                    <i className="icon lnr-icon-envelope1"></i>
                    <span className="title">Send Email</span>
                    <div className="text"><Link href="#">alma.lawson@example.com</Link></div>
                    </li>
                </ul>
                <ul className="social-links">
                    <li>
                    <Link href="#"><i className="icon fab fa-twitter"></i></Link>
                    </li>
                    <li>
                    <Link href="#"><i className="icon fab fa-facebook-f"></i></Link>
                    </li>
                    <li>
                    <Link href="#"><i className="icon fab fa-pinterest-p"></i></Link>
                    </li>
                    <li>
                    <Link href="#"><i className="icon fab fa-vimeo-v"></i></Link>
                    </li>
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
            <div className={`sticky-header ${
          scroll ? "fixed-header animated slideInDown" : ""
        }`}>
                <div className="auto-container">
                <div className="inner-container">
                    <div className="logo">
                    <Link href="#"><img src="images/logo-2.png" alt="Image" /></Link>
                    </div>
                    <div className="nav-outer">
                    <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                        <ul className="navigation clearfix">
                            <NavLinks/>
                        </ul>
                        </div>
                    </nav>
                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
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
        </>
    );
};

export default Header2;