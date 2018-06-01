import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollToComponent from "./ScrollToComponent";

import ZBNaslovna from '../images/zb-naslovna.jpg';

var ZBNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${ZBNaslovna})`
};

export default class ZvonkoBogdan extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section2',
		'#section4',
		'#section6',
		'#section7',
		'#section9',
		'#section10',
		'#section11',
		'#section12'
	];

	render () {
		return (
            <main className="smart-page">
	            <Link to="/" className="smart-page-back-button">back</Link>
	            <ScrollToComponent scrollNodes={this.scrollNodes}/>

                <div style={ ZBNaslovnaImg }></div>

				<div className="zvonko-signature" id="section1">
					<img className="image-logo zb-logo" src="/img/zb-potpis.png"/>
					<div className="container">
						<div className="text-width-40 float-right">
							<p className="white text top-padding">Through our work with our Clients on their brand, their visual identity, label design, brochures and advertising campaigns, we develop a very close bond, loyalty and a true sense of responsibility, on both sides.<br> Winery Zvonko Bogdan is one of the fastest growing wineries in this part of the world and is famous for its award-winning wines. We take great pride in being a part of their success with our Smart Designs.</p>
						</div>
					</div>
				</div>
				<section id="3_section" className="zb-two clearfix" id="section2">
					<div className="container">
						<div className="container-child">
							<div className="image-full">
								<img src="/img/zvonko-knjiga.png"/>
							</div>
						</div>
						<div className="container-child top-30">
							<p className="first-text light">MONOGRAPHY ‘ZVONKO BOGDAN’ – AS THE LIFE GOES ON</p>
							<p className="sand text top-padding">Mr. Zvonko Bogdan, the face of ‘Zvonko Bogdan’ Winery, is a celebrated singer and an author of our local folk music. The cover of the monographs - which represents the life achievements of this respected artist: his biography, his poetry, his love of horses and other moving stories from the plains of Vojvodina - was designed by the ‘Smart Agency’.</p>
							<div className="img-width">
								<img src="/img/zvonko-promocija.png"/>
							</div>
						</div>
					</div>
				</section>
				<section id="4_section">
					<div className="black-wrapper" id="section4">
						<div className="black">
							<div className="text-box-black">
								<p className="first-text wine">WINES FOR THE INSPIRED</p>
								<p className="orange text top-padding">A good wine inspires those who enjoy it! Us too! We strive to represent this inspiration, together with its unique quality, through our advertising solutions. Using representative photography and creative messages ‘Smart Agency’ is able to show just how far ahead of the competition, the wines from ‘Zvonko Bogdan’ Winery are, specifically in oenological terms.</p>
							</div>
						</div>
						<div className="image-full padding-0" id="section5">
							<img src="/img/zvonko-flasa.jpg"/>
						</div>
					</div>
				</section>
				<section id="5_section" className="full-one clearfix padding-top-0">
					<div className="container">
						<div className="image-full image-position-zb relative" id="section6">
							<img src="/img/zvonko-cd.png"/>
						</div>
						<div className="text-at-bottom" id="section7">
							<p className="t-brown text top-padding text-width-40 text-width-40-768">The title of Mr. Zvonko Bogdan’s latest album implies that in a song without a refrain we will be able to pay attention to the meaning of each and every line of poetry that is sung. The same can be said for our designs – every little detail carries a message. Smart Agency is proud to have designed the cover of this album!</p>
							<p className="first-text brown">„A SONG WITHOUT A REFRAIN…“</p>
						</div>
					</div>
				</section>
				<section id="6_section" className="image-full position-image-zb ispis" id="section8">
					<img src="/img/zb-ispis.jpg"/>
				</section>
				<section className="zb-two-down clearfix relative" id="section9">
					<div className="container min-230">
						<div className="text-at-top">
							<p className="t-brown text top-padding text-width-car min-height-200">Dynamic ideas, a love for innovation, a design on the move! Smart’s design team carries this message to the public and its customers through its successful branding services.</p>
						</div>
						<div className="black text-zb-black">
							<div className="zb-two center-zb">
								<p className="first-text brown">BRANDING</p>
							</div>	
						</div>
					</div>
				</section>
				<section className="image-full position-image-zb" id="section10">
					<img src="/img/zb-11a.png"/>
				</section>
				<section id="7_section" className="green-gray clearfix" id="section11">
					<div className="container">
						<div className="container-child">
							<p className="first-text brown">PROMOTIONAL MATERIALS</p>
						</div>
						<div className="container-child">
							<p className="t-brown text top-padding">A brand is a story - a story told in pictures and in words. Behind successful brands are experts in both these industries. Smart has designed all the promotional catalogues and brochures for ‘Zvonko Bogdan’ Winery with images and stories that totally inspire!</p>
						</div>
					</div>
				</section>
				<div className="image-full green-gradient" id="section12">
					<img src="/img/mockup.jpg"/>
				</div>
            </main>
        )
    }
}