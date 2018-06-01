import React, { Component } from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
import ScrollToComponent from "./ScrollToComponent";

import ksNaslovna from '../images/ks-naslovna.jpg';

var ksNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${ksNaslovna})`
};

export default class KosiliPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section3',
		'#section2',
		'#section5'
	];

	render () {
		return (
			<main className="smart-page kosili">
				<ClientPageBackButton parentThis={this} currentSlideGroup={0} />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={ ksNaslovnaImg }></div>
                <section className="back-dos background-fixed kosili">
                    <div className="container-wrapper kosili-text-over3" id="section1">
                        <div className="wrapping-container">
                            <p className="first-text">ČISTA EMOCIJA</p>
                            <p className="text top-padding zelena">I kada dizajniramo promotivne materijale, i kada osmišljavamo kampanje i aktivnosti za društvene mreže i kada zajednički planiramo promotivne nastupe– vode nas 100% čiste i prirodne emocije.</p>
                        </div>
                    </div>
                </section>
				<section className="video-kosili">
					<div className="videoContainer-ks">
						<iframe className="videoContainer__video" src="http://www.youtube.com/embed/hYg2q7jojP4?modestbranding=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1" frameBorder="0"></iframe>
					</div>
				</section>
				<section id="section3" className="kosili-blue clearfix">
					<div className="container">
						<div className="kosili-blue-image">
							<img src="/img/ks-logo1.png" />
						</div>
						<div className="kosili-blue-text">
							<ul className="white text top-padding">
								<li>Nije fraza – volimo i imamo blizak odnos sa svakim Smart klijentom.</li>

								<li>Ipak, jedan je nežniji, mirisniji, mekši od ostalih. I ljudi ga naprosto – obožavaju.</li>

								<li>Saradnja sa brendom Kosili je posebno inspirativna, naročito za ženski deo Smarta.</li>

								<li>Smart produkcijski tim autorski potpisuje Kosili TVC i sve u vezi sa njim, od pisanja scenarija, preko produkcije, do media planiranja  i media buyinga.</li>
							</ul></div>
						</div>
				</section>
				<section  id="section2" className="image-full relative">
					<img src="/img/kosili-mom&baby.jpg" />
					<div className="container-wrapper kosili-text-over" id="section3">
						<div className="container-first padding">
							<p className="blue-text text top-padding">Citylights kampanje, bilbordi, gradski autobusi, sajamski štandovi prenose jedinstvenu poruku: nežnost znači ljubav… Zaista smo srećni kada našu okolinu oplemenimo nežnim Kosili bojama ljubavi.</p>
						</div>
						<div className="container-second padding" id="section4">
							<p className="first-text rose-text">KOSILI</p>
							<p className="second-text blue-text">SVUDA OKO NAS</p>
						</div>
					</div>
				</section>
				<section id="4_section" className="image-full relative" id="section5">
					<div className="container-wrapper kosili-text-over2">
						<div className="width30l">
							<p className="first-text white">ISKRENE PRIČE</p>
							<p className="rose-text text top-padding">Smart svakodnevno brine o imidžu brenda Kosili na društvenim mrežama. I imamo samo jedan “problem”:  vrlo često ne možemo da prebrojimo lajkove. Publika uvek reaguje na iskrene i čiste priče.</p>
						</div>
					</div>
					<img src="/img/ks-back1.jpg"/>
				</section>
			</main>
		)
	}
}