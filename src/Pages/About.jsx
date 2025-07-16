import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import abouticon1 from "../assets/img/icon/about-grid-icon1.svg"
import abouticon2 from "../assets/img/icon/about-grid-icon2.svg"
import profile1 from "../assets/img/normal/about-profile1-1.png"
import normal1 from "../assets/img/childage1-2.png"
import normal2 from "../assets/img/childage3-4girl.png"
import normal3 from "../assets/img/childage5-6girl.png"

const About = () => {
  
  return (
    <>

      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >About</h1>
            <ul className="breadcumb-menu">
              <li  >
                <a href="/index">Home</a>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-sec1 space pt-5" id="about-sec">
        <div className="container pt-9">
          <div className="row gy-40 align-items-center">
            <div className="col-xxl-7 col-xl-6 ">
              <div className="img-box1">
                <div className="img1 " >
                  <img className="rounded-pill" src={normal1} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6">
              <div className="about-wrap1">
                <div className="title-area mb-37">
                  <span className="sub-title text-theme"
                  >About Us</span
                  >
                  <h2 className="sec-title">
                    Learn to play, conversewith confidence.
                  </h2>
                  <p className="sec-text">
                    Luctus. Curabitur nibh justo imperdiet non ex non tempus
                    faucibus urna Aliquam at elit vitae dui sagittis maximus eget
                    vitae diam In fermentum
                  </p>
                </div>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon1}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Kids Toys</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon2}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Easy To Learn</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap mt-45">
                  <div className="about-profile" >
                    <div className="avater">
                      <img
                        src={profile1}
                        alt="avater"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="about-profile-name">Ronald Richards</h5>
                      <p className="desig">CO Founder</p>
                    </div>
                  </div>
                  <div className="call-btn" >
                    <div className="box-icon">
                      <i className="far fa-phone-volume"></i>
                    </div>
                    <div className="media-body">
                      <p className="box-subtitle">Call Us Now</p>
                      <h3 className="box-title">
                        <a href="tel:+1632543654">+208-555-0112</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-sec1 space pt-5" id="about-sec">
        <div className="container pt-9">
          <div className="row gy-40 align-items-center">
            <div className="col-xxl-5 col-xl-6">
              <div className="about-wrap1">
                <div className="title-area mb-37">
                  <span className="sub-title text-theme"
                  >About Us</span
                  >
                  <h2 className="sec-title">
                    Learn to play, conversewith confidence.
                  </h2>
                  <p className="sec-text">
                    Luctus. Curabitur nibh justo imperdiet non ex non tempus
                    faucibus urna Aliquam at elit vitae dui sagittis maximus eget
                    vitae diam In fermentum
                  </p>
                </div>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon1}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Kids Toys</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon2}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Easy To Learn</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap mt-45">
                  <div className="about-profile" >
                    <div className="avater">
                      <img
                        src={profile1}
                        alt="avater"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="about-profile-name">Ronald Richards</h5>
                      <p className="desig">CO Founder</p>
                    </div>
                  </div>
                  <div className="call-btn" >
                    <div className="box-icon">
                      <i className="far fa-phone-volume"></i>
                    </div>
                    <div className="media-body">
                      <p className="box-subtitle">Call Us Now</p>
                      <h3 className="box-title">
                        <a href="tel:+1632543654">+208-555-0112</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="img-box1">
                <div className="img1 " >
                  <img className="rounded-pill" src={normal2} alt="About" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="about-sec1 space pt-5" id="about-sec">
        <div className="container pt-9">
          <div className="row gy-40 align-items-center">
            <div className="col-xxl-7 col-xl-6">
              <div className="img-box1">
                <div className="img1 " >
                  <img className="rounded-pill" src={normal3} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6">
              <div className="about-wrap1">
                <div className="title-area mb-37">
                  <span className="sub-title text-theme"
                  >About Us</span
                  >
                  <h2 className="sec-title">
                    Learn to play, conversewith confidence.
                  </h2>
                  <p className="sec-text">
                    Luctus. Curabitur nibh justo imperdiet non ex non tempus
                    faucibus urna Aliquam at elit vitae dui sagittis maximus eget
                    vitae diam In fermentum
                  </p>
                </div>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon1}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Kids Toys</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-grid" >
                      <div className="box-icon">
                        <img
                          src={abouticon2}
                          alt="img"
                        />
                      </div>
                      <div className="about-grid-details">
                        <h3 className="box-title h6">Easy To Learn</h3>
                        <p className="box-text">
                          Aliquam erat volutpat nullam imperdiet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap mt-45">
                  <div className="about-profile" >
                    <div className="avater">
                      <img
                        src={profile1}
                        alt="avater"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="about-profile-name">Ronald Richards</h5>
                      <p className="desig">CO Founder</p>
                    </div>
                  </div>
                  <div className="call-btn" >
                    <div className="box-icon">
                      <i className="far fa-phone-volume"></i>
                    </div>
                    <div className="media-body">
                      <p className="box-subtitle">Call Us Now</p>
                      <h3 className="box-title">
                        <a href="tel:+1632543654">+208-555-0112</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feedbackslider */}

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title" >Customer Feedback</h2>
                <p className="sec-text"  >
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec at nulla nulla. Duis posuere ex lacus
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area testi-slider1">
            <div
              className="ot-slider has-shadow row gy-30 justify-content-center"
              id="testiSlider1"
            >
              <div className="swiper-wrapper col-xxl-4 col-md-5 mx-4">
                <div className="testi-card" >
                  <div className="testi-quote-icon">
                    <svg
                      width="52"
                      height="38"
                      viewBox="0 0 52 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 23.5238C1 18.0052 3.11376 13.0585 7.45209 8.60441C11.525 4.46737 16.3559 1.97886 21.932 1.13839V1.82742C14.8141 5.99919 10.2935 11.3321 8.53936 17.8348L7.85804 20.3605L10.0504 18.9333C11.7847 17.8043 13.2793 17.3095 14.5099 17.3095C16.704 17.3095 18.5517 18.1692 20.1067 19.9643C21.666 21.7642 22.4614 23.9771 22.4614 26.6667C22.4614 29.6156 21.4367 32.0407 19.3565 34.0123L19.3527 34.0159C17.2878 35.9939 14.7248 37 11.6705 37C8.67622 37 6.18588 35.7751 4.12171 33.2276C2.05221 30.6735 1 27.455 1 23.5238ZM29.5627 23.5238C29.5627 18.0051 31.6766 13.0578 35.9918 8.60335C40.066 4.4654 44.8768 1.97752 50.4706 1.1378V1.82742C43.3527 5.99919 38.8322 11.3321 37.078 17.8348L36.3967 20.3605L38.589 18.9333C40.3187 17.8073 41.8381 17.3095 43.0967 17.3095C45.266 17.3095 47.1113 18.1685 48.6408 19.959L48.6454 19.9643C50.2046 21.7642 51 23.9771 51 26.6667C51 29.6163 49.9746 32.0434 47.9154 34.0159C45.8497 35.9946 43.3105 37 40.2332 37C37.2105 37 34.6996 35.7717 32.6637 33.2317C30.6151 30.6759 29.5627 27.4552 29.5627 23.5238Z"
                        fill="white"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="testi-card-content">
                    <p className="box-text">
                      Corquent per conubia nostra, per inceptos himenaeos.
                      Suspendisse gravida vitae nisi Class aptent taciti
                      sociosqu ad litora
                    </p>
                    <h3 className="box-title">Esther Howard</h3>
                  </div>
                </div>
              </div>
              <div className="swiper-wrapper col-xxl-4 col-md-5 mx-4">
                <div className="testi-card" >
                  <div className="testi-quote-icon">
                    <svg
                      width="52"
                      height="38"
                      viewBox="0 0 52 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 23.5238C1 18.0052 3.11376 13.0585 7.45209 8.60441C11.525 4.46737 16.3559 1.97886 21.932 1.13839V1.82742C14.8141 5.99919 10.2935 11.3321 8.53936 17.8348L7.85804 20.3605L10.0504 18.9333C11.7847 17.8043 13.2793 17.3095 14.5099 17.3095C16.704 17.3095 18.5517 18.1692 20.1067 19.9643C21.666 21.7642 22.4614 23.9771 22.4614 26.6667C22.4614 29.6156 21.4367 32.0407 19.3565 34.0123L19.3527 34.0159C17.2878 35.9939 14.7248 37 11.6705 37C8.67622 37 6.18588 35.7751 4.12171 33.2276C2.05221 30.6735 1 27.455 1 23.5238ZM29.5627 23.5238C29.5627 18.0051 31.6766 13.0578 35.9918 8.60335C40.066 4.4654 44.8768 1.97752 50.4706 1.1378V1.82742C43.3527 5.99919 38.8322 11.3321 37.078 17.8348L36.3967 20.3605L38.589 18.9333C40.3187 17.8073 41.8381 17.3095 43.0967 17.3095C45.266 17.3095 47.1113 18.1685 48.6408 19.959L48.6454 19.9643C50.2046 21.7642 51 23.9771 51 26.6667C51 29.6163 49.9746 32.0434 47.9154 34.0159C45.8497 35.9946 43.3105 37 40.2332 37C37.2105 37 34.6996 35.7717 32.6637 33.2317C30.6151 30.6759 29.5627 27.4552 29.5627 23.5238Z"
                        fill="white"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="testi-card-content">
                    <p className="box-text">
                      Corquent per conubia nostra, per inceptos himenaeos.
                      Suspendisse gravida vitae nisi Class aptent taciti
                      sociosqu ad litora
                    </p>
                    <h3 className="box-title">Esther Howard</h3>
                  </div>
                </div>
              </div>
              <div className="swiper-wrapper col-xxl-4 col-md-5 mx-4">
                <div className="testi-card" >
                  <div className="testi-quote-icon">
                    <svg
                      width="52"
                      height="38"
                      viewBox="0 0 52 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 23.5238C1 18.0052 3.11376 13.0585 7.45209 8.60441C11.525 4.46737 16.3559 1.97886 21.932 1.13839V1.82742C14.8141 5.99919 10.2935 11.3321 8.53936 17.8348L7.85804 20.3605L10.0504 18.9333C11.7847 17.8043 13.2793 17.3095 14.5099 17.3095C16.704 17.3095 18.5517 18.1692 20.1067 19.9643C21.666 21.7642 22.4614 23.9771 22.4614 26.6667C22.4614 29.6156 21.4367 32.0407 19.3565 34.0123L19.3527 34.0159C17.2878 35.9939 14.7248 37 11.6705 37C8.67622 37 6.18588 35.7751 4.12171 33.2276C2.05221 30.6735 1 27.455 1 23.5238ZM29.5627 23.5238C29.5627 18.0051 31.6766 13.0578 35.9918 8.60335C40.066 4.4654 44.8768 1.97752 50.4706 1.1378V1.82742C43.3527 5.99919 38.8322 11.3321 37.078 17.8348L36.3967 20.3605L38.589 18.9333C40.3187 17.8073 41.8381 17.3095 43.0967 17.3095C45.266 17.3095 47.1113 18.1685 48.6408 19.959L48.6454 19.9643C50.2046 21.7642 51 23.9771 51 26.6667C51 29.6163 49.9746 32.0434 47.9154 34.0159C45.8497 35.9946 43.3105 37 40.2332 37C37.2105 37 34.6996 35.7717 32.6637 33.2317C30.6151 30.6759 29.5627 27.4552 29.5627 23.5238Z"
                        fill="white"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="testi-card-content">
                    <p className="box-text">
                      Corquent per conubia nostra, per inceptos himenaeos.
                      Suspendisse gravida vitae nisi Class aptent taciti
                      sociosqu ad litora
                    </p>
                    <h3 className="box-title">Esther Howard</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}

export default About