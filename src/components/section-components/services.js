import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="services-area bg-gray-100 pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center">
                                <h2>Services We Offer</h2>
                                <p>Professional services designed to help you succeed in your personal and business endeavors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <img src={publicUrl+"assets/img/services/photography.png"} alt="Photography Service" />
                                </div>
                                <h3>Photography</h3>
                                <p>Professional photography services for personal branding and business needs. High-quality images that tell your story.</p>
                                <div className="service-price">₦150/session</div>
                                <Link className="btn btn-base" to="/service-details">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <img src={publicUrl+"assets/img/services/consulting.png"} alt="Consulting Service" />
                                </div>
                                <h3>Business Consulting</h3>
                                <p>Strategic guidance to help you grow your business and make informed decisions for long-term success.</p>
                                <div className="service-price">₦500/hour</div>
                                <Link className="btn btn-base" to="/service-details">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <img src={publicUrl+"assets/img/services/events.png"} alt="Event Planning Service" />
                                </div>
                                <h3>Event Planning</h3>
                                <p>Complete event management services from concept to execution, ensuring memorable experiences for all attendees.</p>
                                <div className="service-price">₦200/hour</div>
                                <Link className="btn btn-base" to="/service-details">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services
