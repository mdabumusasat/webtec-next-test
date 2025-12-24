"use client";
import Link from "next/link";
import Image from "next/image";

const ContactSectionH3 = () => {
  return (
    <section className="contact-section-h3">
      <div className="bg-image">
        <Image
          src="/images/background/contact-h3-1.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="anim-icon-two bounce-y">
        <img
          src="/images/icons/contact-h3-2.png"
          alt="Icon"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6">
            <div className="inner-column">
              <div className="anim-icon">
                <Image
                  src="/images/icons/contact-h3-1.png"
                  alt="Icon"
                  width={206}
                  height={140}
                />
              </div>
              <div className="sec-title-h2 white">
                <h6 className="sub-title white">why choose us</h6>
                <h2 className="title">
                  Recognized As <br className="d-none d-lg-block" />
                  One Of The <br className="d-none d-lg-block" />
                  Leading Company!
                </h2>
              </div>
              <div className="info-box">
                <div className="inner-box">
                  <div className="info">
                    <div className="icon">
                      <i className="fa-regular fa-phone"></i>
                    </div>
                    <div className="text">company@gmail.com</div>
                    <Link href="#">+00 (2200) - 2222</Link>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <i className="fa-regular fa-location-dot"></i>
                    </div>
                    <div className="text">
                      90 Washington. mg <br />
                      Manchester, Kentucky USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-column col-lg-6 wow fadeInLeft">
            <div className="inner-column">
              <div className="sec-title-h1 wow fadeInUp">
                <h6 className="sub-title mb-10">Contact us</h6>
                <h2 className="title">Get in Touch</h2>
              </div>
              <div className="contact-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required/>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required/>
                    </div>
                    <div className="form-group col-lg-12 col-sm-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Write a subject"
                        required/>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 mb-0">
                      <textarea
                        name="message"
                        placeholder="What you’re looking for?"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="btn-box">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit">
                          <span className="btn-title">Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionH3;
