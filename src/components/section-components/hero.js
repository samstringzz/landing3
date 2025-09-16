import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <section className="hero-area" style={{background: 'url('+publicUrl+'assets/img/banner/2.png)'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="hero-inner text-center">
                                <div className="hero-logo">
                                    <img src={publicUrl+"assets/img/logo.png"} alt="Logo" />
                                </div>
                                <h2 className="hero-intro">Hi, I'm Alika Maya</h2>
                                <h1>Empowering Lives Through Style & Inspiration</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero
