import React, {Component} from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "./../ScrollToComponent";

import bicNaslovna from '../../images/bic-naslovna1.jpg';

var bicNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	minHeight: "100vh",
	backgroundImage: `url(${bicNaslovna})`,
	marginTop: '0'
};

export default class BicEnglishPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#bic-water-polo',
		'#bic-arena',
		'#bic-tablet',
		'#bic-grey-back',
		'#bic-orange-back',
		'#bic-section-standovi',
		'#bic-section-odnosi-s-javnoscu'
	];

	render() {
		return (
			<div className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={0} path="/en" />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={bicNaslovnaImg}>
				</div>

				<div className="bic-water-polo" id="bic-water-polo">

					<div className="bic-water-polo-left">

						<div className="bic-water-polo-left-image">
							<img className="image-upaljac " src="/img/upaljac-bic.png"/>
						</div>

						<div className="bic-water-polo-left-text">
							<p>When we say full service, we mean absolutely everything in connection with marketing and promotions.</p>
							<p>For the world-famous French brand BIC, Smart Agency provides a full service for an area of roughly ten countries neighbouring Serbia.</p>
							<p>Smart Agency creates, designs, copywrites, records, produces, and promotes BIC.</p>
							<p>Our creative friendship and highly successful cooperation is already marking its 8thanniversary!</p>
						</div>

					</div>

					<div className="bic-water-polo-right">
						<img src="/img/vaterpolista.jpg"/>
					</div>
				</div>

				<div className="bic-arena" id="bic-arena">
					<div className="image-arena"><img src="/img/bic-prezentacija.jpg"/></div>
					<div className="arena-right-image">
						<img className="image-upaljac" src="/img/bic-upaljaci.png"/>
					</div>
				</div>

				<div className="bic-tablet" id="bic-tablet">
					<img src="/img/bic-tablet-crni.jpg"/>
				</div>

				<div className="bic-grey-back" id="bic-grey-back">
					<div className="vlado-slika"><img className="vlado" src="/img/bic-vlado.jpg"/></div>
					<div className="devojke-bic"><img className="prom" src="/img/bic-promoterke.jpg"/></div>
				</div>

				<div className="bic-orange-back flex-992" id="bic-orange-back">
					<div className="bic-left-bus">
						<div className="text-bic">
							<div className="align-text">
								<p className="first-text">TV PRODUCTION & MEDIA BUYING</p>
								<p className="text">Smart Agency team is responsible for the adaptation of international TV commercials in order to meet the needs and satisfy the taste of local buyers across the region.<br/>
									Our media buying experts, successfully work on media planning to ensure the effects of marketing campaigns are at the level of our top brands.</p>
							</div>
						</div>
						<div className='home-item-bic'>
							<div className="video-bic">
								<video width="496" height="297" controls="controls">
									<source src="video/bic_miss.mp4" type="video/mp4"/>
								</video>
							</div>
						</div>
					</div>
					<div className="bic-water-polo-right brand-bus">
						<img src="/img/bic-bus.jpg"/>
					</div>
				</div>

				<div className="bic-orange-back bic-section-standovi" id="bic-section-standovi">
					<div className="yellow-bic">
						<div className="text-bic-olovka">
							<p className="first-text">PROMOTION</p>
							<p className="text">For all three product categories: razors, lighters, school and office supplies, Smart Agency team devises promotional concepts for all marketing activities and designs all the necessary promotional material.</p>
							<img className="top-20" src="/img/olovka-bic.png"/>
						</div>
					</div>
					<div className="branding">
						<div className="stand first-img"><img className="img-width-100" src="/img/bic-polica.png"/>
						</div>
						<div className="stand second-img"><img className="img-width-100" src="/img/bic-pernica.jpg"/>
						</div>
						<div className="stand third-img"><img className="img-width-100" src="/img/kamel.jpg"/></div>
					</div>
				</div>

				<div className="bic-sec-8" id="bic-section-standovi-2">
					<div className="bic-vertical">
						<div className='home-item-bic'>
							<video width="496" height="297" controls="controls">
                                <source src="video/Smart-Agency-BIC.mp4" type="video/mp4"/>
							</video>
						</div>
					</div>
					<div className="bic-vertical2">
						<img className="prom sesion" src="/img/bic-sesion.jpg"/>
					</div>
				</div>

				<div className="bic-sec-9" id="bic-section-olovke">
					<div className="slika-olovke">
						<img className="olovke" src="/img/bic-olovke.jpg"/>
					</div>
					<div className="slika-ucenje">
						<img className="ucenje" src="/img/bic-ucenje.png"/>
					</div>
				</div>

				<div className="bic-sec-10" id="bic-section-odnosi-s-javnoscu">
					<div className="bic-last-section">
						<div className="text-bic vertical-align">
							<p className="first-text">PUBLIC RELATIONS</p>
							<p className="text">We create exciting copy for adverts for the printed media, publications, catalogues…<br/>
								We also write all the promotional text for a variety of PR announcements and we keep in touch with all the specific media that follows and informs on the work and innovations of our client.</p>
						</div>
					</div>
					<div className="last-book"><img className="kameleon" src="/img/katalog-bic.jpg"/></div>
				</div>
			</div>
		)
	}
}