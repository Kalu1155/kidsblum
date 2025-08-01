import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Events = () => {
    return (
        <>
            <Navbar />
            <div
                className="breadcumb-wrapper">
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" >Events</h1>
                        <ul className="breadcumb-menu">
                            <li  >
                                <a href="/index">Home</a>
                            </li>
                            <li>Events</li>
                        </ul>
                    </div>
                </div>
            </div>
            .
            <h1 className="text-center my-8">OUR EVENTS </h1>
            <p className="text-center mb-9">Our series of events are organised to keep you informed and updated on the best LOOK.
                We also introduce you to new FABRICS, don't miss out on our BLOG NEWS too.</p>

            <h1 className="text-center">NO EVENTS AVAILABLE CURRENTLY</h1>
            <Footer />
        </>
    )
}

export default Events