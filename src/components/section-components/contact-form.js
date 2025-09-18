import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        return (
            <section className="contact-form-area pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2>Contact Us</h2>
                                <p>Get in touch with us for any inquiries or to book our services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper">
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Your Name" 
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Your Email" 
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="tel" 
                                                    className="form-control" 
                                                    placeholder="Phone Number" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Subject" 
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            rows="5" 
                                            placeholder="Your Message" 
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-base">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm