import React, {Component} from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "./../ScrollToComponent";
import dokNaslovna from '../../images/dok-first.jpg';

var dokNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${dokNaslovna})`
};

export default class DobraOvsenaKasa extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section2',
		'#section5',
		'#section7'
	];

	render() {
		return (
			<main className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={1} path="/en" />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={dokNaslovnaImg}>
				</div>
				<section id="2_section" className="image-full position-image-zb" id="section1">
					<img src="/img/dos-site.jpg"/>
				</section>
				<section id="3_section" className="white-back dok">
					<div className="relative clearfix div-set" id="section2">
						<div className="container-top-class">
							<div className="text-dok" id="section3">
								<p className="first-text">THE GOOD SIDE OF PROMOTION</p>
								<ul className="t-brown text top-padding margin-bottom-0">
									<li>And, the most powerful side of promotion is through media. </li>
									<li>Smart Agency comes up with and creates all the ideas for the media exposure of the ‘Dobra ovsena kasa’ brand. We take care of all their social media, as well as internet, radio and television presence.</li>
									<li>From the very first original idea, followed by creating the scripts for the scenario, visual and content editing of media messages, to media planning and buying – Smart Agency solutions are always a good decision!</li>
								</ul>
							</div>
						</div>
						<div className="container-bottom-class bottom-image" id="section4">
							<img src="/img/dos-ekipa.jpg"/>
						</div>
					</div>
				</section>
				<section id="4_section" className="image-full position-image-zb" id="section5">
					<img src="/img/dok-ekran.jpg"/>
				</section>

				<section id="5_section" className="image-full position-image-zb" id="section6">
					<img src="/img/dos-femina1.jpg"/>
				</section>

				<section id="6_section" className="white-back" id="section7">
					<div className="container-top-class">
						<div className="image-full relative xs-480">
							<div className="absolute-text3">
								<p className="first-text">BRAND AS A STAR</p>
								<p className="t-brown text top-padding margin-bottom-0">When at a public event, followed by the media and the general public, the brand is talked and discussed, when the brand inspires new ideas and goals, when all brands are branded ... then that brand is the star of the event! We are proud of all our stars.
								</p>
							</div>
							<img className="md-480" src="/img/dos-jagodica.png" />
						</div>
					</div>
				</section>
			</main>
		)
	}
}