import React from 'react'

export default function About() {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/a1.jpg" alt=""
                                className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5">
                                About Us
                            </h3>
                            <h1 className="display-6 mb-2">
                                What <b>We</b> Do
                            </h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">The best way to deal with the complexities of the Indian market for marketing and advertising purposes is to invest in and hire local knowledge. Both Indian and international companies specialise in marketing in India.
                                A comprehensive marketing plan that considers core elements such as your brand, stakeholder management, public relations, media and your product/brand value proposition is critical.</p>
                            <button className="btn btn-danger rounded-pill mx-4 py-2 px-4">More Info</button>
                            <button className="btn btn-danger rounded-pill mx-4 py-2 px-4">Contact</button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
