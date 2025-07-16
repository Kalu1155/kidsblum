import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Testimonial = () => {

  return (
    <>
      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >Testimonials</h1>
            <ul className="breadcumb-menu">
              <li  >
                <a href="/index">Home</a>
              </li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title" >Customer Feedback</h2>
                <p className="sec-text" data-delay>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec at nulla nulla. Duis posuere ex lacus
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gy-30">
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Esther Howard</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Jussian Rose</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Michael Matthew</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Justin Dacosta</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Esther Howard</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Jussian Rose</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Michael Matthew</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
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
                    Suspendisse gravida vitae nisi className aptent taciti sociosqu ad
                    litora
                  </p>
                  <h3 className="box-title">Justin Dacosta</h3>
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

export default Testimonial