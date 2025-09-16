import React, { Component } from 'react';

class Testimonials extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="testimonials-area pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center">
                                <h2>What Our Clients Say</h2>
                                <p>Hear from our satisfied clients about their experiences with our services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>"The photography service exceeded our expectations. Professional quality and excellent customer service. Highly recommended for any business needs."</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={publicUrl+"assets/img/testimonials/1.jpg"} alt="Sarah Johnson" />
                                    <div className="author-info">
                                        <h5>Sarah Johnson</h5>
                                        <p>CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>"The business consulting helped us identify key growth opportunities. Their expertise and guidance were invaluable for our expansion."</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={publicUrl+"assets/img/testimonials/2.jpg"} alt="Michael Chen" />
                                    <div className="author-info">
                                        <h5>Michael Chen</h5>
                                        <p>Founder, GrowthCo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>"Outstanding event planning service! They handled every detail perfectly, making our corporate event a huge success."</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={publicUrl+"assets/img/testimonials/3.jpg"} alt="Emily Rodriguez" />
                                    <div className="author-info">
                                        <h5>Emily Rodriguez</h5>
                                        <p>Marketing Director, InnovateCorp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonials
