import React, {Component} from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
import ScrollToComponent from "./ScrollToComponent";
import dokNaslovna from '../images/dok-first.jpg';

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
				<ClientPageBackButton parentThis={this} currentSlideGroup={1} />
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
								<p className="first-text">DOBRA STRANA PROMOCIJE</p>
								<ul className="t-brown text top-padding margin-bottom-0">
									<li>I najmoćnija. To su svakako – mediji.</li>
									<li>Smart tim osmišljava i kreira sve medijske nastupe brenda Dobra ovsena kaša.
										Brinemo o njihovom imidžu na društvenim mrežama, na web-u, na radiju,
										televiziji.
									</li>
									<li>Od ideje, preko scenarija, vizuelnog i sadržajnog uobličavanja medijskih poruka,
										do media planiranja i media buyinga – Smart rešenja su uvek dobra odluka!
									</li>
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
							<div className="absolute-text3 text-dok">
								<p className="first-text">BREND KAO ZVEZDA</p>
								<p className="t-brown text top-padding margin-bottom-0">Kada se na javnom događaju, koga
									prate mediji i široka javnost, o brendu priča i diskutuje, kada brend inspiriše na
									nove ideje i ciljeve, kada se sa brendom svi srode... onda je taj brend - zvezda
									događaja! Ponosni smo na sve naše zvezde.
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