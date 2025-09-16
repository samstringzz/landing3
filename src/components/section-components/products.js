import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="products-area bg-gray-100 pd-top-90 pd-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center">
                                <h2>Our Products</h2>
                                <p>Discover our curated collection of premium products designed to enhance your lifestyle and business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src={publicUrl+"assets/img/products/1.jpg"} alt="Leather Handbag" />
                                    <div className="product-overlay">
                                        <Link to="/product-details" className="product-link">
                                            <i className="fa fa-eye"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3>Leather Handbag</h3>
                                    <p>Premium quality leather handbag crafted for the modern professional.</p>
                                    <div className="product-price">₦29,000</div>
                                    <Link className="btn btn-base" to="/product-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src={publicUrl+"assets/img/products/2.jpg"} alt="Wireless Headphones" />
                                    <div className="product-overlay">
                                        <Link to="/product-details" className="product-link">
                                            <i className="fa fa-eye"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3>Wireless Headphones</h3>
                                    <p>High-quality wireless headphones with noise cancellation technology.</p>
                                    <div className="product-price">₦45,000</div>
                                    <Link className="btn btn-base" to="/product-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src={publicUrl+"assets/img/products/3.jpg"} alt="Smart Watch" />
                                    <div className="product-overlay">
                                        <Link to="/product-details" className="product-link">
                                            <i className="fa fa-eye"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3>Smart Watch</h3>
                                    <p>Advanced smartwatch with fitness tracking and health monitoring features.</p>
                                    <div className="product-price">₦65,000</div>
                                    <Link className="btn btn-base" to="/product-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src={publicUrl+"assets/img/products/4.jpg"} alt="Laptop Bag" />
                                    <div className="product-overlay">
                                        <Link to="/product-details" className="product-link">
                                            <i className="fa fa-eye"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3>Laptop Bag</h3>
                                    <p>Durable and stylish laptop bag perfect for business professionals.</p>
                                    <div className="product-price">₦18,000</div>
                                    <Link className="btn btn-base" to="/product-details">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Products
