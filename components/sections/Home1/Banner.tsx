import React from "react";
import Link from 'next/link';


function Banner() {
  return (
    <section className="banner-section-h1">
      <div className="anim-icon"><img src="images/icons/banner-h1-2.png" alt="Image"/></div>
      <div className="outer-box">
        <div className="bg-image"><img src="images/banner/banner-h1-1.jpg" alt="Image"/></div>
        <div className="tm-text-editor">webtec</div>
        <div className="shape-1"><img src="images/banner/banner-h1-3.png" alt="Image"/></div>
        <div className="shape-2 bounce-y"><img src="images/banner/banner-h1-4.png" alt="Image"/></div>
        <div className="shape-3"><img src="images/banner/banner-h1-5.png" alt="Image"/></div>
        <div className="inner-box">
          <div className="banner-content">
            <div className="inner-content">
              <h1 className="banner-title wow fadeInUp" data-wow-delay="200ms">Your <span>Ultimate Digital</span> Agency</h1>
              <div className="text wow fadeInUp" data-wow-delay="400ms">Highlights the partnership between the client’s vision and the agency’s technical and creative skills. Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna vision and the agency’s technical</div>
              <div className="banner-info wow fadeInUp" data-wow-delay="600ms">
                <Link href="/page-contact" className="theme-btn btn-style-one">
                  <span className="btn-arrow-left">
                    <i className="far fa-chevron-right"></i>
                  </span>
                  <span className="btn-title"> Get In Touch</span>
                </Link>
                <div className="author-img"><img src="images/banner/banner-h1-1.png" alt="Image"/></div>
                <div className="text">Our 30k Satisfaction <br/>Clients</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="images/banner/banner-h1-2.png" alt="Image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
