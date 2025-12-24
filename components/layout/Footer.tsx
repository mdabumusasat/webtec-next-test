"use client";

import React from "react";
import Link from 'next/link';

function Footer(){
    return (
        <>
    <footer className="main-footer footer-style-one">
      <div className="widgets-section">
        <div className="anim-icon"><img src="images/icons/footer-h1-2.png" alt="Image"/></div>
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- Footer Column --> */}
            <div className="footer-column col-lg-5">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="footer-logo"><img src="images/logo-1.png" alt="Image"/></div>
              </div>
            </div>
            {/* <!-- footer column --> */}
            <div className="footer-column col-lg-2">
            </div>
            <div className="footer-column style-two col-lg-5">
              <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                <h5 className="text">Get the latest inspiration & insights</h5>
                <div className="subscribe-form-one">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="email" name="email" className="email" placeholder="Email Address" />
                      <button type="button" className="theme-btn d-flex align-items-center">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26 4.81c0-.15-.06-.3-.14-.43-.03-.06-.07-.12-.12-.17a.86.86 0 0 0-.49-.28L.34 9.54a.55.55 0 0 0-.1 1.03l7.2 3.8 1.24 7.01c.04.25.17.48.36.65.2.17.44.26.7.26h.15c.24 0 .47-.08.66-.22l4.8-3.2 5.02 3.26c.14.09.3.14.47.14.4 0 .75-.25.88-.63L25.97 4.93c.02-.07.03-.14.03-.22v-.1ZM20.98 7.61l-10.4 7.63-.14.16-.1.18-.01.02-1.19 3.86-.94-5.23 12.78-6.62Zm-11.06 12.56 1.18-3.9 1.84 1.19.53.35-1.78 1.19-1.77 1.17Zm12.64-14.33L7.82 13.38 1.7 10.15l20.86-3.31Zm-3.24 14.76-6.67-4.33-1.01-.66L24.66 5.97l-5.34 14.63Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-40"/>
          <div className="row">
            <div className="footer-column border-0 col-lg-5 col-sm-4">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="widget-content">
                  <div className="contact-area">
                    <div className="mb-3"><Link className="phone" href="#">+ (123) 456-7890</Link></div>
                    <div><Link className="mail" href="#">domain@example.com</Link></div>
                  </div>
                  <div className="social-widget mt-30">
                    <ul className="social-icon-list1 mb-5 mb-lg-0">
                      <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column border-0 col-lg-2 col-sm-1">
            </div>
            <div className="footer-column style-two border-0 col-lg-5 col-sm-7">
              <div className="row d-block d-sm-flex">
                <div className="footer-widget links-widget col wow fadeInLeft" data-wow-delay="400ms">
                  <h5 className="widget-title">Quick Link</h5>
                  <div className="widget-content mb-5 mb-sm-0">
                    <ul className="user-links">
                      <li><Link href="#">About</Link></li>
                      <li><Link href="#">Services</Link></li>
                      <li><Link href="#">Team Member</Link></li>
                      <li><Link href="#">Reviews</Link></li>
                      <li><Link href="#">Latest News</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget style-two links-widget col wow fadeInLeft" data-wow-delay="400ms">
                  <h5 className="widget-title">Our Services</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">Meet Our Team</Link></li>
                      <li><Link href="#">What We Do</Link></li>
                      <li><Link href="#">Latest News</Link></li>
                      <li><Link href="#">Contact</Link></li>
                      <li><Link href="#">Faqs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="inner-container">
                <div className="copyright-text">© Copyright Reserved by kodesolution.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
};

export default Footer;