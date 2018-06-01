import React, { Component } from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
import ScrollToComponent from "./ScrollToComponent";

import ZBNaslovna from '../images/zb-naslovna.jpg';
import BrownSection from '../images/brown-section.png';

import scrollToElement from "scroll-to-element";

var ZBNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${ZBNaslovna})`
};
var BrownSectionImg = {
	backgroundImage: `url(${BrownSection})`,
	backgroundSize: "100% 100%",
	backgroundRepeat: "no-repeat"
}

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
		'#section11',
		'#section13'
	];

	render () {
		return (
            <main className="smart-page zvonko-bogdan">
	            <ClientPageBackButton parentThis={this} currentSlideGroup={1} />
	            <ScrollToComponent scrollNodes={this.scrollNodes}/>

                <div className="main-image-page" style={ ZBNaslovnaImg }></div>

				<div className="zvonko-signature" id="section1">
					<img className="image-logo zb-logo" src="/img/zb-potpis.png"/>
					<div className="container">
						<div className="text-width-40 float-right">
							<p className="white text top-padding">Kada si sa klijentom od prvog dana, a to znači kada si učestvovao u kreiranju brenda, vizuelnog identiteta, dizajnu etikete, brošura, oglasa...onda je to posebno jaka veza. Ali i odgovornost.<br />Vinarija Zvonko Bogdan se za kratko vreme upisala  na vinsku mapu kao jedna od najboljih u ovom delu sveta. Ponosni smo na svaki njihov uspeh. I pratimo ga svojim Smart kreacijama.</p>
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
							<p className="first-text light">MONOGRAFIJA ZVONKO BOGDAN – ŽIVOT TEČE</p>
							<p className="sand text top-padding">Zaštitno lice Vinarije je proslavljeni autor i izvođač tamburaške muzike, Zvonko Bogdan. Naš dizajnerski tim zaslužan je za dizajn korica monografije „Život teče“, u kojoj su sabrani Zvonkova poezija, muzika, biografija, konji, i druge važne priče vojvođanske ravnice.</p>
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
								<p className="first-text wine">VINO ZA INSPIRISANE</p>
								<p className="orange text top-padding">Vino inspiriše. I one koji u njemu uživaju i nas koji imamo zadatak da kroz oglasna rešenja dočaramo njegovu snagu i kvalitet. Vina Vinarije Zvonko Bogdan pomeraju enološke granice, Smart  o tome govori slikama i kreativnim porukama.</p>
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
							<p className="t-brown text top-padding text-width-40 text-width-40-768">Iz Smart kreativne radionice izašao je i omot poslednjeg CD-a Zvonka Bogdana. Neke pesme nemaju refren, važan je svaki stih. Tako je i u dizajnu – svaki detalj ima svoje zašto i prenosi svoju poruku.</p>
							<p className="first-text brown">„OVA PISMA REFREN NEMA“</p>
						</div>
					</div>
				</section>
				<section id="6_section" className="image-full position-image-zb ispis" id="section8">
					<img src="/img/zb-ispis.jpg"/>
				</section>
				<section className="zb-two-down clearfix relative" id="section9">
					<div className="container min-230">
						<div className="text-at-top">
							<p className="t-brown text top-padding text-width-car min-height-200">Dinamične ideje, ljubav prema inovacijama, dizajn u pokretu. Smartov dizajnerski tim sve to efektno prenosi u javnost, kroz uslugu brendiranja.</p>
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
							<p className="first-text brown">PROMOTIVNI MATERIJALI</p>
						</div>
						<div className="container-child">
							<p className="t-brown text top-padding">Brend je priča. U slikama i rečima. Iza uspešnih brendova nalaze se eksperti u obe branše. Smart potpisuje sve promotivne kataloge i brošure Vinarije Zvonko Bogdan, sa slikama i pričama koje nadahnjuju.</p>
						</div>
					</div>
				</section>
				<div className="image-full green-gradient" id="section12">
					<img src="/img/mockup.jpg"/>
				</div>
				<section id="section13" className="brown-section" style={BrownSectionImg}>
                    <div className="container">
                        <div className="container-child">
                            <p className="first-text-brown">POSAO I UŽITAK</p>
                            <p className="brown-section-description">Koliko god voleli svoj posao, u nekim poslovnim situacijama uživa se - na posebno lep način. <br/>Svako vino ima svoju marketinšku priču, a dok ih osmišljavamo i dizajniramo, timski uživamo. Posebno ako smo u prilici i da degustiramo.</p>
                        </div>
                    </div>
                    <img className="zb-brown-image" src="img/ZB-brown-section-images.png" alt=""/>
				</section>
            </main>
        )
    }
}