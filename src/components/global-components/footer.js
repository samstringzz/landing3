import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="footer-area pd-top-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-8">
							<div className="footer-widget widget widget_contact text-center">
								<h4 className="widget-title">Contact Us</h4>
								<div className="media">
									<div className="thumb">
										<img src={publicUrl + "assets/img/footer/1.png"} alt="img" />
									</div>
									<div className="media-body">
										<p>2200 Pooz Street</p>
										<p>Henderson, TN 38340</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/2.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">example@mail.com</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/3.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">517-383-6673</p>
									</div>
								</div>
								<ul className="social-area">
									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" /></a></li>
									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" /></a></li>
									<li><a href="https://www.google-plus.com/solverwp/"><i className="fab fa-google-plus-g" /></a></li>
									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/*Footer bottom*/}
				<div className="container">
					<div className="copyright-area">
						<div className="row">
							<div className="col-lg-12 text-center">
								<p>©2024 Alika Maya. All rights reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>


		)
	}
}


export default Footer_v1