import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Events extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="events-area bg-gray-100 pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center">
                                <h2>Upcoming Events</h2>
                                <p>Join us for exclusive events and experiences that bring people together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="event-image">
                                    <img src={publicUrl+"assets/img/events/1.jpg"} alt="Ashraf & Sultana Event" />
                                    <div className="event-date">
                                        <span className="day">08</span>
                                        <span className="month">AUG</span>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3>Ashraf & Sultana</h3>
                                    <p className="event-location">Kano, Nigeria</p>
                                    <p className="event-time">August 8, 2024 • 4:00 PM</p>
                                    <p className="event-description">Join us for an exclusive celebration featuring live music, gourmet dining, and networking opportunities.</p>
                                    <Link className="btn btn-base" to="/event-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="event-image">
                                    <img src={publicUrl+"assets/img/events/2.jpg"} alt="Business Summit Event" />
                                    <div className="event-date">
                                        <span className="day">15</span>
                                        <span className="month">AUG</span>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3>Business Summit 2024</h3>
                                    <p className="event-location">Lagos, Nigeria</p>
                                    <p className="event-time">August 15, 2024 • 9:00 AM</p>
                                    <p className="event-description">Connect with industry leaders and discover new opportunities in the business world.</p>
                                    <Link className="btn btn-base" to="/event-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Events
