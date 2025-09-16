import React from 'react';
import Navbar from './global-components/navbar';
import Hero from './section-components/hero';
import Gallery from './section-components/gallery';
import Events from './section-components/events';
import Tagline from './section-components/tagline';
import Services from './section-components/services';
import Testimonials from './section-components/testimonials';
import Products from './section-components/products';
import Newsletter from './section-components/newsletter';
import ContactForm from './section-components/contact-form';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Hero />
        <Gallery />
        <Events />
        <Tagline />
        <Services />
        <Testimonials />
        <Products />
        <Newsletter />
        <ContactForm />
        <Footer />
    </div>
}

export default Home_V1

