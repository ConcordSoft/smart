import React, { Component } from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "./../ScrollToComponent";

import EPNaslovna from '../../images/ep-first.jpg';
import EPauti from '../../images/ep-auti.jpg';

var EPNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${EPNaslovna})`,
	marginTop: '0'
};

var AutiNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${EPauti})`,
	marginTop: '0'
};

export default class EuroPetrolPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section_4',
		'#section_5',
		'#section_6',
		'#section_7'
	];

	render () {
		return (
			<div className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={1} path="/en" />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-background" style={EPNaslovnaImg}>
				</div>

				<section id="2_section" className="full-one ep-grey-background " id="section1">
					<div className="cont flex1">
						<div className="ep-box-one">
							<p className="first-text brown">TV PRODUKCIJA</p>
							<p className="white text top-padding">Vrhunski kvalitet, besprekorna usluga, briga za potrošača, inovativnost, i sve to zaokruženo značajnim jubilejom – 20 godina uspešnog rada. Scenario i kompletnu produkciju  poslednjeg TV spota Euro Petrol je poverio Smart timu.</p>
							<p className="white text bottom-padding">Media buying, pre svega kada je u pitanju televizijsko oglašavanje, povereno je Smart Agency, kako na najvećim nacionalnim TV stanicama, tako i na najaktuelnijim sportskim kablovskim kanalima sa kojima partnerski sarađujemo.</p>
							<img className="image-position petrol" src="/img/logo-ep.png"/>
						</div>
						<div className="ep-center">
							<iframe width="760" height="428" src="https://www.youtube.com/embed/1MnIY2IBTGo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
				</section>

				<div className="background-image" style={AutiNaslovnaImg} id="section_auto">
				</div>

				<section id="section_4" className="full-three clearfix">
					<div className="cont flex1">
						<div className="left-ep">
							<p className="first-text green">SNAGA JE U KVALITETU</p>
						</div>
						<div className="right-ep"><p className="green text top-padding">Kada klijent, na prvom mestu,
							vodi računa o vrhunskom kvalitetu svojih proizvoda i usluga, i od svoje agencije zahteva
							isto. Kroz dugogodišnju saradnju zajedno rasetmo i usavršavamo se.</p></div>
					</div>
				</section>

				<section id="section_lion" className="full-four">
					<div className="cont">
						<p className="first-text grey">LION GRUPA</p>
						<div className="padding-0 top-20 icons flex1">
							<div className="client center-992"><a href=""><img src="img/lion-ep.png"/></a></div>
							<div className="client center-992"><a href=""><img src="img/therm-ep.png"/></a></div>
							<div className="client center-992"><a href=""><img src="img/trans-ep.png"/></a></div>
							<div className="client center-992"><a href=""><img src="img/euro-real-estate.png"/></a>
							</div>
							<div className="client center-992"><a href=""><img src="img/lioncaffe-ep.png"/></a></div>
							<div className="client center-992"><a href=""><img src="img/eurogarni-ep.png"/></a></div>
						</div>
						<div className="clearfix"></div>
					</div>
				</section>

				<div className="cleardiv"></div>

				<section className="image-full relative sec-over">
					<img src="/img/ep-memo.png"/>
					<p className="absolute-text grey text top-padding" style={{marginTop: '90px'}}>LION grupa, u okviru koje posluje Euro Petrol,
						zauzima značajno mesto u Smart portfoliu. Smart kreativni tim zaokružio je vizuelni identitet
						svih članica LION grupe. Bili smo zaduženi za brending voznog parka.</p>
				</section>

				<section id="section_5" className="image-full minus-14"><img src="/img/girl-ep.jpg"/></section>

				<section className="top-20 relative-pos" id="section_6">
					<img className="right img-992" src="/img/ep-bilbord.jpg"/>
					<div className="cleardiv"></div>
					<div className="full-eight">
						<div className="cont">
							<div className="below-banner"><p className="light-grey text top-padding">Smart dizajneri
								osmišljavaju sve reklamne materijale za članice LION grupe. Biramo lokacije, kreiramo
								privlačne poruke i inovativna dizajnerska rešenja za sve OOH kampanje.</p></div>
						</div>
					</div>
				</section>

				<section id="section_7" className="full-nine">
					<div className="cont">
						<img className="img-left clearfix img-992" src="/img/ep-snaga.jpg"/>
						<img className="img-right img-right-1 clearfix img-992" src="/img/ep-energija.jpg"/>
						<img className="img-left clearfix img-992" src="/img/ep-oslonac.jpg"/>
						<img className="img-right clearfix img-992" src="/img/ep-izolacija.jpg"/>
					</div>
				</section>

			</div>
		)
	}
}