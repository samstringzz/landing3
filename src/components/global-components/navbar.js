import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div>
        		<div className="dkt-sitebar-menu">
				  <div className="dkt-sitebar-menu">
				    <span className="dkt-sitebar-close"><i className="fa fa-times" /></span>
				    <div className="dkt-details-inner">
				      <div className="logo go-top">
				        <Link to="/"><img src={publicUrl+"assets/img/logo-3.png"} alt="img" /></Link>
				      </div>
				      <p className="details">Donsectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. </p>
				      <div className="address-inner">
				        <h5>Address</h5>
				        <p>3538 Cambridge Place Laurel, MD 20707</p>
				      </div>
				      <div className="address-inner">
				        <h5>Phone</h5>
				        <p>410-565-2575</p>
				      </div>
				      <div className="address-inner mb-0">
				        <h5>Email</h5>
				        <p>JohnPMills@dmarket.com</p>
				      </div>
				    </div>
				    <div className="dkt-market-earn">
				      <div className="address-inner">
				        <h5>Market Earning</h5>
				        <p>online store with lots of digital product and exclusive Item</p>
				      </div>
				      <div className="row">
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Item Sold</p>
				            <h5>12501</h5>
				          </div>
				        </div>
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Total Earning</p>
				            <h5>25804</h5>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
	            <div className="navbar-area go-top navbar-full-width">
				  <nav className="navbar navbar-expand-lg">
				    <div className="container-fluid nav-container">
				      <div className="logo">
				        <Link className="main-logo-h1" to="/"><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></Link>
				      </div>
				      <div className="nav-right-part">
				        <button className="menu toggle-btn" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				    </div>
				  </nav>
				</div>
			</div>


        )
    }
}


export default Navbar