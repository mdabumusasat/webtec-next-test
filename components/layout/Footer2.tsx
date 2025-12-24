import React from 'react';
import Link from 'next/link';
import ScrollToTop from "@/components/elements/ScrollToTop";

function Footer2 (){
  return (
    <footer className="main-footer footer-style-two">
      <div className="anim-icon"><img src="images/icons/footer-h2-2.png" alt="Image"/></div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <figure className="image"><Link href="#"><img src="images/logo-1.png" alt="Image"/></Link>
                </figure>
                <div className="text">At vero eos et accusamus iusto odio dignissimos ducimus blanditiise
                </div>
                <div className="newsletter-form light-bg">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="email" name="email" className="email" placeholder="Email Address" />
                      <button type="submit" className="form-btn"><i className="far fa-paper-plane"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="right-side col-lg-8">
              <div className="row">
                <div className="footer-column col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-widget links-widget">
                    <h5 className="widget-title style">Quick Link</h5>
                    <ul className="user-links style">
                      <li><Link href="#">Data Visualization</Link></li>
                      <li><Link href="#">UI/UX Designing</Link></li>
                      <li><Link href="#">Digital Marketing</Link></li>
                      <li><Link href="#">Marketing Strategy</Link></li>
                      <li><Link href="#">Data Analysis</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-column col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-widget links-widget two">
                    <h5 className="widget-title style">Company</h5>
                    <ul className="user-links style">
                      <li><Link href="#">About</Link></li>
                      <li><Link href="#">Services</Link></li>
                      <li><Link href="#">Team Member</Link></li>
                      <li><Link href="#">Reviews</Link></li>
                      <li><Link href="#">Latest News</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-column col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-widget newsletter-widget">
                    <h4 className="widget-title style">Contact</h4>
                    <ul className="list-style-five">
                      <li><i className="fal fa-map-marker-alt"></i><span><span>55 Main Street, 2nd block <br/> Melbourne,
                      Australia</span></span></li>
                      <li><i className="fal fa-envelope"></i><span>support@gmail.com</span></li>
                      <li><i className="fal fa-phone"></i><span>+000 (123) 44 55</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">© Copyright 2025 by kodesolution.com</div>
            <ul className="footer-nav">
              <li>Faqs</li>
              <li>Setting</li>
              <li>Privacy</li>
              <li>Contact</li>
            </ul>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
