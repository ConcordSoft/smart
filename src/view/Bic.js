import React, { Component } from 'react';
import bicNaslovna1 from '../component/images/bic-naslovna1.jpg';
import upaljacBic from '../component/images/upaljac-bic.png';
import vaterpolista from '../component/images/vaterpolista.jpg';
import bicTabletCrni from '../component/images/bic-tablet-crni.jpg';
import logoBic1 from '../component/images/logo-bic1.png';
import olovkaBic from '../component/images/olovka-bic.png';
import kamel from '../component/images/kamel.jpg';
import katalogBic from '../component/images/katalog-bic.jpg';


var backgroundHome = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${bicNaslovna1})`
};

export default class Bic extends Component {

	render () {                                   
		return (
			<div className="main">
				<section  id="1_section" className="back-bic back-dos background-fixed" style={ backgroundHome }></section>
				<section  id="2_section" className="bic-one clearfix height-auto x_section">
					<div className="height-100vh clearfix auto auto-767">
						<div className="col-md-8 col-sm-6 col-xs-12 height-100 section-bic-75 clearfix relative">
							<img className="image-upaljac " src={upaljacBic} alt="upaljac" />
							<ul className="white text top-padding margin-bottom-0 vertical-align padd-640">
								<li>Kada se kaže full service agencija  misli se - baš na sve što se tiče marketinga i promocije.</li>
								<li>Za francuski brend BIC, poznat širom sveta, Smart je full service agencija na tržištu Centralne i jugoistočne Evrope.</li>
								<li>U ovim zemljama Smart za BIC kreira, dizajnira, piše, snima, producira, promoviše…</li>
								<li>Naše kreativno prijateljstvo i veoma uspešna saradnja traju punih 8 godina.</li>
							</ul>
						</div>
						<div className="bic-poster">
							<img src={vaterpolista} className="poster-upaljac clearfix" alt="vaterpolista" />
						</div>
					</div>
				</section>

				<section id="3_section" className="image-full"><img src={bicTabletCrni} alt="tablet" /></section>
				<section  id="4_section" className="container-fluid height-100vh x_section">
					<div className="row">
						<div className="col-md-8 col-sm-6 col-xs-12 height-100 padding-0 auto">
							<div className="text-bic">
								<p className="first-text">TV PRODUKCIJA & MEDIA BUYING</p>
								<p className="text top-padding margin-bottom-0">Smart produkcijski tim zadužen je za adaptacije internacionalnih TV reklama, sa ciljem da se odgovori na potrebe i zadovolji ukus lokalnih kupaca po zemljama regiona.<br />
								Naši eksperti za media buying uspešno rade media planiranje kako bi efekti medijskih kampanja bili na nivou vrhunskog brenda.</p>
							</div>
							<div className='home-item-slide'>
								
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 padding-0 height-100 yellow-bic  bic">
							<img className="center-bic clearfix" src={logoBic1} alt="bic" />
						</div>
					</div>
				</section>

				<section  id="5_section" className="container-fluid height-auto x_section">
				<div className="row">
					<div id="section-5-left" className="col-md-8 col-sm-6 col-xs-12 padding-0 yellow-bic">
						<div className="text-bic vertical-align">
							<p className="first-text">PROMOCIJA</p>
							<p className="text top-padding margin-bottom-0">Za sve tri kategorije BIC proizvoda: brijače, upaljače i školski i kancelarijski pribor, Smart kreativni tim osmišljava idejne koncepte promotivnih aktivnosti, sajamskih nastupa i dizajnira sve promotivne materijale.</p>
							<img className="img-width-100 top-20" src={olovkaBic} alt="pan" />
						</div>
					</div>
					<div id="section-5-right" className="col-md-4 col-sm-6 col-xs-12 padding-0">
						<img className="kameleon clearfix" src={kamel} alt="kameleon" />
					</div>
				</div>
				</section>

				<section  id="6_section" className="container-fluid clearfix x_section">
				<div className="row">
					<div id="section-6-left" className="col-md-4 col-sm-6 col-xs-12 height-100 padding-0 bic-last-section">
						<div className="text-bic vertical-align">
							<p className="first-text">ODNOSI S JAVNOŠĆU</p>
							<p className="text top-padding margin-bottom-0">Naš potpis stoji na kreativnim oglasima za štampane medije, publikacije, kataloge…<br />
							Pored toga, osmišljavamo sve promotivne tekstove za različite PR objave i održavamo kontakte sa medijima koji prate rad i inovacije našeg klijenta.</p>
						</div>
					</div>
						<div id="section-6-right" className="col-md-8 col-sm-6 col-xs-12 padding-0">
							<img className="kameleon clearfix" src={katalogBic} alt="katalog" />
						</div>
				</div>
				</section>
			</div>
		)
	}
}