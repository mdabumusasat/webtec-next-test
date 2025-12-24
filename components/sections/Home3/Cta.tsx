"use client";

import Image from "next/image";
import Link from "next/link";
import CounterUp from "../../elements/CounterUp";

const CtaSectionH3 = () => {
  return (
    <section className="cta-section-h3">
        <div className="outer-box">
            <div className="upper-box">
                <div className="ks-funfact-2-area">
                    <div className="auto-container">
                    <div className="ks-funfact-2-border">
                        <div className="row">
                        {[
                            { count: 8, text: "Worldwide business", delay: ".3", suffix: "K" },
                            { count: 10, text: "Satisfied Clients", delay: ".5", suffix: "K", style: "style-one" },
                            { count: 7, text: "Countries Served", delay: ".7", suffix: "K+", style: "style-two" },
                            { count: 25, text: "Award winning", delay: ".9", suffix: "", style: "style-three" },
                        ].map((item, i) => (
                            <div
                            key={i}
                            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ks_fade_anim"
                            data-delay={item.delay}>
                            <div className={`ks-funfact-2-item ${item.style || ""}`}>
                                <h4 className="ks-funfact-2-number">
                                <CounterUp end={item.count} />
                                {item.suffix}
                                </h4>
                                <span className="text-white">{item.text}</span>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="lower-box">
                <div className="ks-step-area position-relative">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                            <div className="sec-title-h2 white text-center">
                                <h6 className="sub-title white">work process</h6>
                                <h2 className="title split-text split-in-right">
                                Our work process <br /> in 3 easy steps
                                </h2>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ks_fade_anim" data-delay=".3">
                            <div className="ks-step-item text-center mb-55">
                                <span className="ks-step-icon position-relative mb-30">
                                <svg width="38" height="52" viewBox="0 0 38 52" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white" d="M5.428 16.969V11.917c0-1.724.686-3.378 1.908-4.597 1.222-1.218 2.879-1.903 4.607-1.903s3.386.685 4.608 1.903c1.222 1.219 1.908 2.873 1.908 4.597v4.333c.226 0 .439.052.66.074 1.317-1.421 2.181-3.201 2.481-5.113.3-1.912.023-3.87-.796-5.624-.819-1.754-2.142-3.226-3.802-4.227-1.66-1.001-3.58-1.487-5.518-1.396-1.938.091-3.805.756-5.362 1.91-1.558 1.153-2.737 2.743-3.386 4.567-.649 1.823-.74 3.799-.26 5.674.48 1.875 1.508 3.565 2.954 4.856Z"/>
                                    <path fill="white" d="M34.743 23.833c-.863 0-1.692.343-2.303.952-.611.609-.954 1.436-.954 2.298v3.708c0 .144-.057.282-.159.384-.102.102-.24.159-.384.159s-.282-.057-.384-.159c-.102-.102-.159-.24-.159-.384v-2.709c0-.862-.343-1.688-.954-2.298-.611-.609-1.44-.952-2.303-.952s-1.692.343-2.303.952c-.611.61-.954 1.436-.954 2.298v4.875c0 .144-.057.282-.159.384-.102.102-.24.159-.384.159s-.282-.057-.384-.159c-.102-.102-.159-.24-.159-.384V22.75c0-.862-.343-1.688-.954-2.298-.611-.609-1.44-.952-2.303-.952s-1.692.343-2.303.952c-.611.61-.954 1.436-.954 2.298v4.875c0 .144-.057.282-.159.384-.102.102-.24.159-.384.159s-.282-.057-.384-.159c-.102-.102-.159-.24-.159-.384V11.917c0-.862-.343-1.688-.954-2.298-.611-.609-1.44-.952-2.303-.952s-1.692.343-2.303.952c-.611.61-.954 1.436-.954 2.298V31.417c-.288 0-.564-.114-.768-.317-.204-.203-.318-.479-.318-.767v-4.333H6.528c-3.572 0-6.53 2.878-6.529 6.442.011 11.441 8.359 19.558 13.492 19.558h13.652c2.88 0 5.642-1.142 7.678-3.173 2.036-2.032 3.18-4.787 3.18-7.66V27.083c0-.862-.344-1.688-.954-2.298-.611-.61-1.44-.953-2.303-.953Z"/>
                                </svg>
                                <b className="ks-step-number">01</b>
                                </span>
                                <h5 className="ks-step-title">
                                <Link href="/page-projects">Choose Service</Link>
                                </h5>
                                <p className="mb-0">
                                In a free hour, when our power of <br /> choice is untrammeled and
                                </p>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ks_fade_anim" data-delay=".5">
                            <div className="ks-step-item text-center mb-55 position-relative">
                                <span className="ks-step-icon position-relative mb-30">
                                <svg width="53" height="53" viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white" d="M11.91 33.306l2.75 2.748 4.692-4.74c-2.115-2.529-3.538-5.562-4.13-8.804-.591-3.242-.332-6.582.754-9.694l6.248 6.248c-.007 2.485.776 4.909 2.235 6.921 1.459 2.012 3.519 3.509 5.884 4.275 2.365.766 4.911.761 7.272-.014 2.361-.765 4.415-2.27 5.867-4.288l-7.093-7.095-4.919 4.919-18.287-18.295v4.148H9.973V0h9.626v3.209H15.449l16.02 16.029 4.919-4.919 8.648 8.649c.837-2.399.873-4.994.102-7.415-.77-2.421-2.305-4.526-4.374-6C38.693 8.067 36.201 7.305 33.661 7.37c-2.54.065-4.99.952-6.982 2.529L21.493 4.711c2.758-2.39 6.145-3.938 9.758-4.458 3.613-.521 7.299 0 10.619 1.516 3.32 1.516 6.134 3.955 8.107 6.026 1.974 3.071 3.023 6.644 3.023 10.294 0 10.499-8.541 19.041-19.039 19.041-4.529.011-8.911-1.605-12.348-4.555l-4.684 4.731 2.76 2.761-11.911 11.927-7.777-7.786 11.91-11.911Z"/>
                                    <path fill="white" d="M52.945 43.376H27.281v3.208h25.664V43.376Z"/>
                                    <path fill="white" d="M36.905 49.792H17.656v3.208h19.249V49.792Z"/>
                                </svg>
                                <b className="ks-step-number">02</b>
                                </span>
                                <h5 className="ks-step-title">
                                <Link href="/page-projects">Start Optimizing</Link>
                                </h5>
                                <p className="mb-0">
                                In a free hour, when our power of <br /> choice is untrammeled and
                                </p>
                                <Image
                                src="/images/icons/step-1-2.png"
                                alt="Shape"
                                width={120}
                                height={40}
                                className="ks-step-shape-2 d-none d-xl-block"
                                />
                                <Image
                                src="/images/icons/step-1-2.png"
                                alt="Shape"
                                width={120}
                                height={40}
                                className="ks-step-shape-3 d-none d-xl-block"
                                />
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ks_fade_anim" data-delay=".7">
                                <div className="ks-step-item text-center mb-55">
                                    <span className="ks-step-icon position-relative mb-30">
                                    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="white" d="M12.982 47.057c1.29-1.324 2.007-3.104 1.996-4.954-.011-1.85-.749-3.622-2.054-4.931-1.305-1.309-3.072-2.05-4.918-2.061-1.846-.011-3.622.708-4.943 2.001C1.11 39.07.343 42.103.099 44.843c-.138 1.553-.127 3.116.029 4.668.016.123.072.236.158.324s.198.146.32.165h.018c.157 0 2.397.051 3.089-2.138.122-.409.304-.798.54-1.154.096-.144.237-.25.401-.302.164-.053.341-.048.502.014.161.062.296.177.383.326s.12.323.095.494c-.112.833.06 1.68.488 2.403.047.08.117.145.201.185s.178.053.27.038c2.342-.354 4.746-1.158 6.391-2.807Z"/>
                                        <path fill="white" d="M35.708 39.077V33.017c.725-.626 1.433-1.284 2.125-1.975l1.92-1.923c7.186-7.206 10.694-16.444 10.202-24.741-.145-2.442-1.886-4.187-4.32-4.332-8.272-.495-17.493 3.021-24.682 10.228l-1.919 1.922c-.694.696-1.35 1.407-1.969 2.133H11.022a4 4 0 0 0-3.059 1.882l-3.555 6.402c-.094.256-.159.521-.194.791a1.73 1.73 0 0 0 1.728 1.732h4.488c-.585 1.967-.195 3.9 1.051 5.148l7.586 7.605c1.245 1.249 3.174 1.638 5.135 1.054v4.507a1.73 1.73 0 0 0 1.73 1.728c.27-.036.535-.101.79-.136l7.108-3.564a4 4 0 0 0 1.88-3.067Zm-4.17-20.568c-1.172-1.176-1.902-2.722-2.065-4.376-.162-1.654.252-3.314 1.173-4.696.921-1.382 2.292-2.401 3.878-2.884 1.586-.483 3.291-.399 4.823.236 1.532.636 2.797 1.784 3.579 3.25.782 1.466 1.033 3.158.711 4.789-.322 1.631-1.198 3.099-2.479 4.155s-2.887 1.633-4.545 1.634c-.942 0-1.875-.185-2.746-.546-.87-.361-1.661-.891-2.327-1.559Z"/>
                                    </svg>
                                    <b className="ks-step-number">03</b>
                                    </span>
                                    <h5 className="ks-step-title">
                                    <Link href="/page-projects">Launch Now</Link>
                                    </h5>
                                    <p className="mb-0">
                                    In a free hour, when our power of <br /> choice is untrammeled and
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-10 col-lg-10">
                            <div className="ks-step-bottom d-flex align-items-center justify-content-between">
                                <h5 className="mb-0">
                                Let’s Request a Schedule For Free Consultation
                                </h5>
                                <Link href="/page-contact" className="theme-btn btn-style-one">
                                <span className="btn-arrow-left">
                                    <i className="far fa-chevron-right"></i>
                                </span>
                                <span className="btn-title">Get In Touch</span>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CtaSectionH3;
