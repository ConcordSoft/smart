import React, { Component } from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "./../ScrollToComponent";

import ksNaslovna from '../../images/ks-naslovna.jpg';

var ksNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${ksNaslovna})`
};

export default class KosiliEnglishPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section2',
		'#section5'
	];

	render () {
		return (
			<main className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={0} path="/en" />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={ ksNaslovnaImg }>
					<section id="1_section" className="back-dos background-fixed kosili">
						<div className="container-wrapper kosili-text-over3">
							<div className="width30l">
								<p className="first-text sun-red">CLEAR EMOTIONS</p>
								<p className="zelena text top-padding">We approach every Kosili marketing task with enthusiasm and clear, centred emotions. Promotional flyers and social media posts are 100% inspired by our pure and positive outlook!</p>
							</div>
						</div>
					</section>
				</div>
				<section id="2_section" className="video-kosili" id="section1">
					<div className="videoContainer-ks">
						<iframe className="videoContainer__video" src="http://www.youtube.com/embed/hYg2q7jojP4?modestbranding=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1" frameBorder="0"></iframe>
					</div>
				</section>
				<section id="3_section" className="kosili-blue clearfix" id="section2">
					<div className="container">
						<div className="kosili-blue-image">
							<img src="/img/ks-logo1.png" />
						</div>
						<div className="kosili-blue-text">
							<ul className="white text top-padding">
								<li>We really mean it when we say we have a close relationship with each and every one of our clients. </li>

								<li>However, one stands out for its gentleness, scent, and softness. People (as well as us) adore it! </li>

								<li>Collaboration with Kosili brand is especially inspiring for the women/girls in Smart Agency! Smart production team has created and devised the Kosili TV campaign and everything in connection with the marketing of this brand.</li>

								<li>We created, wrote the scenario, and produced the TV commercials, and planned their marketing campaign and media buying. </li>
							</ul></div>
					</div>
				</section>
				<section className="image-full relative">
					<img src="/img/kosili-mom&baby.jpg" />
					<div className="container-wrapper kosili-text-over" id="section3">
						<div className="container-first padding">
							<p className="blue-text text top-padding">Citylights campaign, billboards, city buses, fair stands – all carry the same message: gentleness means love! It makes us really happy when our surroundings are painted gentle Kosili colours of love!</p>
						</div>
						<div className="container-second padding" id="section4">
							<p className="first-text rose-text">KOSILI</p>
							<p className="second-text blue-text">EVERYWHERE AROUND US</p>
						</div>
					</div>
				</section>
				<section id="4_section" className="image-full relative" id="section5">
					<div className="container-wrapper kosili-text-over2">
						<div className="width30l">
							<p className="first-text white">HONEST STORIES</p>
							<p className="rose-text text top-padding">Smart Agency is wholly in charge of Kosili brand’s social network presence. Our posts are liked by so many – our audience reacts positively to our honest and transparent stories.</p>
						</div>
					</div>
					<img src="/img/ks-back1.jpg"/>
				</section>
			</main>
		)
	}
}