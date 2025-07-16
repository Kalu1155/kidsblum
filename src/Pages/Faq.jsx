import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Faq = () => {
  
  return (
    <>
      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >FAQ</h1>
            <ul className="breadcumb-menu">
              <li  >
                <a href="/index">Home</a>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space overflow-hidden">
        <div className="container">
          <div className="row gy-40 justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="faq-tab-wrap">
                <h3 className="faq-title text-center" >
                  Shopping Information
                </h3>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse-item-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        1. How much is shipping and how long will it take?
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        2. How long will it take to get my package?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        3. Branding is simply a more efficient way to sell things?
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="faq-title text-center pt-20" >
                  Payment Information
                </h3>
                <div className="accordion" id="faqAccordion2">
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse2-item-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2-1"
                        aria-expanded="true"
                        aria-controls="collapse2-1"
                      >
                        1. How do I know if my order was successful?
                      </button>
                    </div>
                    <div
                      id="collapse2-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse2-item-1"
                      data-bs-parent="#faqAccordion2"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse2-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2-2"
                        aria-expanded="false"
                        aria-controls="collapse2-2"
                      >
                        2. How much is shipping and how long will it take?
                      </button>
                    </div>
                    <div
                      id="collapse2-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse2-item-2"
                      data-bs-parent="#faqAccordion2"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse2-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2-3"
                        aria-expanded="false"
                        aria-controls="collapse2-3"
                      >
                        3. How gathering image called, fifth good?
                      </button>
                    </div>
                    <div
                      id="collapse2-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse2-item-3"
                      data-bs-parent="#faqAccordion2"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="faq-title text-center pt-20" >
                  Order & Returns
                </h3>
                <div className="accordion" id="faqAccordion3">
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse3-item-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3-1"
                        aria-expanded="true"
                        aria-controls="collapse3-1"
                      >
                        1. Can I add VAT to my invoice?
                      </button>
                    </div>
                    <div
                      id="collapse3-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse3-item-1"
                      data-bs-parent="#faqAccordion3"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse3-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3-2"
                        aria-expanded="false"
                        aria-controls="collapse3-2"
                      >
                        2. How can I get a new returns note?
                      </button>
                    </div>
                    <div
                      id="collapse3-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse3-item-2"
                      data-bs-parent="#faqAccordion3"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card" >
                    <div className="accordion-header" id="collapse3-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3-3"
                        aria-expanded="false"
                        aria-controls="collapse3-3"
                      >
                        3. What is your international returns policy?
                      </button>
                    </div>
                    <div
                      id="collapse3-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse3-item-3"
                      data-bs-parent="#faqAccordion3"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nunc tincidunt cursus lectus ac semper. Aenean
                          ullamcorper quis arcu molestie consequat. Interdum et
                          malesuada fames ac ante ipsum primis in faucibus. Ut nec
                          lobortis elit, eu ultrices justo. Fusce auctor erat est,
                          non fringilla nibh tempus quis. Aenean dignissim turpis
                          ut interdum interdum. Nam molestie sed ex non tempus.
                          Donec sodales aliquam orci non imperdiet. Quisque tempus
                          dolor id nisi blandit tempor ut id lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Faq