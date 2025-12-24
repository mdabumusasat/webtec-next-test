"use client";
import React from "react";
import CounterUp from '../../elements/CounterUp';

const FunFactSection = () => {
  return (
    <div className="ks-funfact-area ks-funfact-mlr home2-style">
      <div className="bg-image"><img src="images/resource/funfact-h2-1.jpg" alt="Image"/></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="sec-title-h2 white">
              <h6 className="sub-title white">numbers don’t lie</h6>
              <h2 className="title char-animation">They Reveal The True <br/>Power of a Company</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ks-funfact-wrap">
              <div className="ks_fade_anim" data-delay=".3" data-ease="bounce" data-fade-from="top" data-duration="1">
                <div className="ks-funfact-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="ks-funfact-icon">
                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M39.9 11.18H29.81V1.1l10.09 10.08ZM41 16.77v14.91c0 1.22-.24 2.44-.71 3.57a9.73 9.73 0 0 1-2.02 3.02 9.74 9.74 0 0 1-3.03 2.02 9.87 9.87 0 0 1-3.58.71H14.89a16.5 16.5 0 0 1-9.06-3.36A16.37 16.37 0 0 1 .51 29.95a16.2 16.2 0 0 1 6.93-16.76V9.32c0-2.47.98-4.85 2.74-6.59A9.3 9.3 0 0 1 16.76 0h7.46c.5 0 .97.2 1.32.55.36.35.56.83.56 1.31v9.32c0 .99.39 1.94 1.08 2.64a3.74 3.74 0 0 0 2.62 1.08H39.14c.5 0 .97.2 1.32.55.35.35.54.83.54 1.32ZM14.89 37.27c2.21 0 4.37-.65 6.22-1.88a12.4 12.4 0 0 0 4.12-5.02 12.4 12.4 0 0 0 .63-7.77 12.28 12.28 0 0 0-3.06-5.68 12.16 12.16 0 0 0-5.73-3.03 12.1 12.1 0 0 0-7.75.78 12.2 12.2 0 0 0-5.02 4.11A12.3 12.3 0 0 0 3.7 26.09a11.2 11.2 0 0 0 11.19 11.18Zm6.9-13.58c.34-.35.53-.82.53-1.31a1.84 1.84 0 0 0-.54-1.31 1.8 1.8 0 0 0-1.3-.54c-.49 0-.97.2-1.32.54l-5.37 5.29-1.86-1.86a1.84 1.84 0 0 0-1.32-.55c-.49 0-.96.2-1.31.55a1.8 1.8 0 0 0-.55 1.31c0 .49.2.97.55 1.31l3.19 3.13c.36.34.84.53 1.33.53s.97-.19 1.33-.53l6.71-6.92Z"/>
                      </svg>
                    </span>
                    <h5 className="ks-funfact-number"><i className="purecounter" data-purecounter-duration="1"><CounterUp end={223} /></i>k</h5>
                  </div>
                  <span>Completed Project</span>
                </div>
              </div>
              <div className="ks_fade_anim" data-delay=".5" data-ease="bounce" data-fade-from="top" data-duration="1">
                <div className="ks-funfact-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="ks-funfact-icon">
                      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.249 29.617 31.079 39.595c-.146.682-.525 1.294-1.072 1.733-.547.439-1.229.679-1.933.68h-8.139c-3.31 0-4.735-1.226-6.623-3.046h-2.307V26.768h1.589c3.645-2.456 5.595-5.987 6.677-9.52.082-.289.25-.546.482-.739.232-.192.517-.311.818-.341.672-.056 1.348.05 1.97.307a4.05 4.05 0 0 1 2.327 4.173c-.513 1.888-1.001 3.58-1.964 5.371h7.914c.355 0 .705.079 1.025.23.32.151.602.372.824.645.223.273.381.592.463.934.082.342.086.697.011 1.041ZM21.415.255l1.854 3.723c.033.067.081.126.142.17s.13.073.205.084l4.149.597c.085.013.165.049.231.104.066.055.115.127.142.208.027.081.03.168.01.251a.47.47 0 0 1-.105.218l-3.003 2.899a.47.47 0 0 0-.117.346l.709 4.091a.47.47 0 0 1-.64.46l-3.716-1.93a.47.47 0 0 0-.429 0l-3.716 1.93a.47.47 0 0 1-.64-.46l.709-4.091a.47.47 0 0 0-.117-.346l-3.003-2.899a.47.47 0 0 1-.095-.469.47.47 0 0 1 .368-.312l4.147-.597a.47.47 0 0 0 .373-.254L20.585.255A.47.47 0 0 1 21 0a.47.47 0 0 1 .415.255ZM35.254 3.898l1.855 3.723c.033.067.081.125.142.17.06.045.131.073.205.084l4.148.597c.085.013.165.049.231.104.067.055.116.127.143.208.027.081.03.168.01.251a.47.47 0 0 1-.106.218l-3 2.898a.47.47 0 0 0-.117.346l.71 4.091a.47.47 0 0 1-.64.46l-3.717-1.931a.47.47 0 0 0-.428 0l-3.716 1.931a.47.47 0 0 1-.64-.46l.708-4.091a.47.47 0 0 0-.116-.346l-3.007-2.891a.47.47 0 0 1-.085-.469.47.47 0 0 1 .368-.312l4.148-.597a.47.47 0 0 0 .372-.254l1.855-3.722A.47.47 0 0 1 34.842 3.64c.18 0 .352.1.412.257ZM7.573 3.898 9.427 7.62c.033.067.081.126.142.17.06.045.13.073.205.084l4.148.597c.085.013.165.049.231.104.067.055.116.127.143.208.027.081.03.169.01.251a.47.47 0 0 1-.106.218l-3.001 2.893a.47.47 0 0 0-.117.346l.71 4.091a.47.47 0 0 1-.64.46L7.374 15.192a.47.47 0 0 0-.429 0L3.228 17.124a.47.47 0 0 1-.64-.46l.716-4.09a.47.47 0 0 0-.117-.347L.139 9.251a.47.47 0 0 1-.095-.469.47.47 0 0 1 .368-.312L4.542 7.874a.47.47 0 0 0 .373-.254L6.746 3.897A.47.47 0 0 1 7.161 3.64c.18 0 .351.1.412.257ZM3.316 25.245h4.613c.204 0 .399.08.543.223.145.143.226.337.226.539v13.709c0 .202-.081.396-.226.539a.77.77 0 0 1-.543.223H3.316a.77.77 0 0 1-.544-.223.77.77 0 0 1-.225-.539V26.007c0-.202.081-.396.225-.539a.77.77 0 0 1 .544-.223Z" fill="currentColor"/>
                      </svg>
                    </span>
                    <h5 className="ks-funfact-number"><i className="purecounter" data-purecounter-duration="1"><CounterUp end={100} /></i>%</h5>
                  </div>
                  <span>satisfied customer</span>
                </div>
              </div>
              <div className="ks_fade_anim" data-delay=".7" data-ease="bounce" data-fade-from="top" data-duration="1">
                <div className="ks-funfact-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="ks-funfact-icon">
                      <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M.14 15.18a1 1 0 0 1 .48-.58l15.5-8.19a1 1 0 0 1 1.4.24l2.63 2.87 9.96-6.09-.56-.15a1 1 0 0 1-.78-1.16 1 1 0 0 1 1.24-.75l3.17.85a1 1 0 0 1 .71 1.23l-.85 3.17a1 1 0 0 1-1.23.71 1 1 0 0 1-.71-1.23l.1-.38-10.6 6.49a1 1 0 0 1-1.23-.16L16.4 7.89 1.7 15.66a1 1 0 0 1-1.56-.48ZM48 34.39a4 4 0 0 1-1.17 2.83 4 4 0 0 1-5.66 0l-5.03-5.03a1 1 0 0 1 0-1.41l.9-.9-1.29-1.29a11 11 0 1 1 2.37-2.4l1.3 1.3.9-.9a1 1 0 0 1 1.41 0l5.03 5.03c.75.75 1.17 1.77 1.16 2.83ZM37.95 20.12a8.83 8.83 0 1 0-12.18 8.08 8.83 8.83 0 0 0 12.18-8.08ZM35.03 41.68H34.2V31.9a14 14 0 0 1-6.28.49v9.29h-2.37v-9.96a14 14 0 0 1-3.64-2.67v12.63h-2.36V18.01a1 1 0 0 0-1-1h-5.11a1 1 0 0 0-1 1v23.67H8.28V26.96a1 1 0 0 0-1-1H2.58a1 1 0 0 0-1 1v14.72H1.16a1.16 1.16 0 0 0 0 2.32H35a1.16 1.16 0 0 0 0-2.32ZM32.41 20.12a3.29 3.29 0 0 0-5.53-2.33 3.29 3.29 0 0 0 2.33 5.62 3.29 3.29 0 0 0 3.2-3.29ZM37.36 19.5a11 11 0 0 0-7.24-3.99 8.34 8.34 0 0 1 3.14 14.27 11 11 0 0 0 4.1-10.28ZM25.5 20.12a11 11 0 0 0-7.24-3.99 8.34 8.34 0 0 1 3.14 14.28 11 11 0 0 0 4.1-10.29Z"/>
                      </svg>
                    </span>
                    <h5 className="ks-funfact-number"><i className="purecounter" data-purecounter-duration="1"><CounterUp end={960} /></i>k</h5>
                  </div>
                  <span>Seo & impression</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactSection;
