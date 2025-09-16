import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="gallery-area pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2>Media Gallery</h2>
                                <p>Capturing moments that matter. Browse through our collection of memorable events and experiences that showcase our work and community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/1.jpg"} alt="Event photography showcasing our professional work" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/2.jpg"} alt="Business event documentation and coverage" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/3.jpg"} alt="Corporate event photography and videography" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/4.jpg"} alt="Professional headshots and branding photography" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/5.jpg"} alt="Product photography and commercial work" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <img src={publicUrl+"assets/img/gallery/6.jpg"} alt="Lifestyle photography and personal branding" />
                                    <div className="gallery-overlay">
                                        <Link to="/gallery" className="gallery-link" aria-label="View gallery image">
                                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-12 text-center">
                            <Link className="btn btn-base" to="/gallery">View Full Gallery</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery
