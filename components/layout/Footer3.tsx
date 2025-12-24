import React from 'react';
import Link from 'next/link';

function Footer3 (){
  return (
    <footer className="main-footer footer-style-three">
      <div className="outer-box">
        <div className="anim-icon"><img src="images/icons/foter-h3-1.png" alt=""/></div>
        <div className="upper-box">
          <div className="inner-box">
            <div className="info-box">
              <div className="icon"><i className="fa-regular fa-location-dot"></i></div>
              <div className="info">
                <div className="text">Addres</div>
                <Link href="#">30 Broklyn Golden Street. USA</Link>
              </div>
            </div>
            <div className="info-box">
              <div className="icon"><i className="fa-regular fa-envelope"></i></div>
              <div className="info">
                <div className="text">Send Email</div>
                <Link href="#">needhelp@company.com </Link>
              </div>
            </div>
            <div className="info-box">
              <div className="icon"><i className="fa-regular fa-phone"></i></div>
              <div className="info">
                <div className="text">Call Anytime</div>
                <Link href="#">+00 (8800) 8630</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-3 col-md-4 col-sm-12">
                <div className="footer-widget about-widget">
                  <figure className="image"><Link href="#"><img src="images/logo-1.png" alt="Image"/></Link>
                  </figure>
                  <div className="text">Welcome to our digital agency. Lorem ipsum simply free text dolor sited amet cons cing elit.</div>
                  <ul className="social-icon-two">
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-md-4 col-sm-12">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Explore</h5>
                  <ul className="user-links">
                    <li><Link href="#">Meet Our Team</Link></li>
                    <li><Link href="#">What We Do</Link></li>
                    <li><Link href="#">Latest News</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li><Link href="#">Faqs</Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-md-4 col-sm-12">
                <div className="footer-widget links-widget two">
                  <h5 className="widget-title">Our Solutions</h5>
                  <ul className="user-links">
                    <li><Link href="#">Data Visualization</Link></li>
                    <li><Link href="#">UI/UX Designing</Link></li>
                    <li><Link href="#">Digital Marketing</Link></li>
                    <li><Link href="#">Marketing Strategy</Link></li>
                    <li><Link href="#">Data Analysis</Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column style-two col-xl-3 col-md-5 col-sm-12">
                <div className="footer-widget newsletter-widget">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="text">Sign up for alerts, our latest blogs, <br/>thoughts, and insights. </div>
                  <div className="newsletter-form">
                    <form method="post" action="#">
                      <div className="form-group">
                        <textarea name="message" placeholder="Email Address" required></textarea>
                      </div>
                      <div className="form-group">
                        <div className="btn-box">
                          <button className="theme-btn btn-style-one w-100" type="submit">
                            <span className="btn-title"> Subscribe</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container text-center">
              <div className="copyright-text">© Copyright 2025 by kodesolution.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
