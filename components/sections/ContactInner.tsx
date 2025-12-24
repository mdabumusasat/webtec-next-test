"use client";
import Link from 'next/link';
import React, { useState, FormEvent } from 'react'

function ContactInner() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });
            if (response.ok) {
                setSubmitStatus('success');
                e.currentTarget.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <section className="contact-section-h2 pt-100 pb-100">
            <div className="outer-box">
                <div className="bg bg-pattern-13"></div>
                <div className="shape-11"></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title-h1 white">
                            <h6 className="sub-title mb-10">Contact us</h6>
                            <h2 className="title">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form method="post" action="#" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"/>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea
                                            name="message"
                                            placeholder="Write a Message"
                                            ></textarea>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <div className="btn-box">
                                            <button className="theme-btn btn-style-one" type="submit">
                                                <span className="btn-title">Send a Message</span>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image">
                                <img
                                    src="/images/resource/contact1-1.jpg"
                                    alt="Contact"
                                />
                                </figure>
                                <div className="info-box">
                                <i className="icon fa fa-phone"></i>
                                <div className="content">
                                    <div className="title">Call us anytime</div>
                                    <h4 className="phone">
                                    <Link href="#">+00 000 222 000</Link>
                                    </h4>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default ContactInner