import React, { Component } from 'react';

class Tagline extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        
        return (
            <section className="tagline-area pd-top-90 pd-bottom-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tagline-inner text-center">
                                <h2>Empowering entrepreneurs to build brands they love</h2>
                                <div className="content-hub">
                                    <h3>Content Hub</h3>
                                    <div className="social-icons">
                                        <a href="#" className="social-icon instagram-icon" aria-label="Instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" className="social-icon youtube-icon" aria-label="YouTube">
                                            <i className="fab fa-youtube"></i>
                                        </a>
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

export default Tagline
