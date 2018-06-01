import React, {Component} from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
import ScrollToComponent from "./ScrollToComponent";

import bicNaslovna from '../images/bic-naslovna1.jpg';

var bicNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	minHeight: "100vh",
	backgroundImage: `url(${bicNaslovna})`,
	marginTop: '0'
};

export default class BicPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#bic-water-polo',
		'#bic-arena',
		'#bic-tablet',
		'#bic-orange-back',
		'#bic-section-standovi',
		'#bic-section-odnosi-s-javnoscu'
	];

	// onBackButtonClick = (currentSlideGroup) => {
	// 	var self = this;
	//
	// 	scrollToElement('body', {
	// 		offset: 0,
	// 		ease: 'inQuad',
	// 		duration: 1200
	// 	});
	//
	// 	// $( ".smart-page" ).animate({
	// 	// 	width: '33.3333vw',
	// 	// 	marginLeft: '33.3333vw'
	// 	// }, 3000, function() {
	// 	// 	// Animation complete.
	// 	// });
	//
	// 	setTimeout(function(){
	// 		// self.props.history.push("/");
	//
	// 		self.props.history.push({
	// 			pathname: '/',
	// 			state: { currentSlideGroup: currentSlideGroup }
	// 		});
	//
	// 		// $('.smart-page').addClass('smart-page-on-back');
	// 		// setTimeout(function(){
	// 		// 	self.props.history.push("/");
	// 		// }, 2200);
	// 	}, 1300);
	// };

	render() {
		return (
			<div className="smart-page">
				{/*<Link to="/"*/}
				      {/*className="smart-page-back-button"*/}
				      {/*onClick={(e) => this.onSlideItemClick(2, e, this)}>back</Link>*/}

				<ClientPageBackButton parentThis={this} currentSlideGroup={0} />

				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={bicNaslovnaImg}>
				</div>

				<div className="bic-water-polo" id="bic-water-polo">

					<div className="bic-water-polo-left">

						<div className="bic-water-polo-left-image">
							<img className="image-upaljac " src="/img/upaljac-bic.png"/>
						</div>

						<div className="bic-water-polo-left-text">
							<p>Kada se kaže full service agencija misli se - baš na sve što se tiče marketinga i
								promocije.</p>
							<p>Za francuski brend BIC, poznat širom sveta, Smart je full service agencija na tržištu
								Centralne i jugoistočne Evrope.</p>
							<p>U ovim zemljama Smart za BIC kreira, dizajnira, piše, snima, producira, promoviše…</p>
							<p>Naše kreativno prijateljstvo i veoma uspešna saradnja traju punih 8 godina.</p>
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
								<p className="first-text">TV PRODUKCIJA & MEDIA BUYING</p>
								<p className="text">Smart produkcijski tim zadužen je za adaptacije internacionalnih TV
									reklama, sa ciljem da se odgovori na potrebe i zadovolji ukus lokalnih kupaca po
									zemljama regiona.<br/>
									Naši eksperti za media buying uspešno rade media planiranje kako bi efekti medijskih
									kampanja bili na nivou vrhunskog brenda.</p>
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
							<p className="first-text">PROMOCIJA</p>
							<p className="text">Za sve tri kategorije BIC proizvoda: brijače, upaljače i školski i
								kancelarijski pribor, Smart kreativni tim osmišljava idejne koncepte promotivnih
								aktivnosti, sajamskih nastupa i dizajnira sve promotivne materijale.</p>
							<img className="top-20" src="/img/olovka-bic.png"/>
						</div>
					</div>
					<div className="branding">
						<div className="stand first-img"><img className="img-width-100" src="/img/Kupi3.png"/>
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
							<p className="first-text">ODNOSI S JAVNOŠĆU</p>
							<p className="text">Naš potpis stoji na kreativnim oglasima za štampane medije, publikacije,
								kataloge…<br/>
								Pored toga, osmišljavamo sve promotivne tekstove za različite PR objave i održavamo
								kontakte sa medijima koji prate rad i inovacije našeg klijenta.</p>
						</div>
					</div>
					<div className="last-book"><img className="kameleon" src="/img/katalog-bic.jpg"/></div>
				</div>
			</div>
		)
	}
}