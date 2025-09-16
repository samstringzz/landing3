import React, { Component } from 'react';

class Newsletter extends Component {

    render() {
        return (
            <section className="newsletter-area pd-top-90 pd-bottom-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="newsletter-inner text-center">
                                <h2>Want Something Extra?</h2>
                                <p>Sign up for our newsletter to stay updated with the latest events, services, and exclusive offers.</p>
                                <form className="newsletter-form">
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address" 
                                            className="form-control"
                                            required
                                        />
                                        <button type="submit" className="btn btn-base">Subscribe</button>
                                    </div>
                                </form>
                                <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Newsletter
