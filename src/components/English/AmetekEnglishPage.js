import React, {Component} from 'react';
import ClientPageBackButton from "../ClientPageBackButton";
import ScrollToComponent from "../ScrollToComponent";

import AmetekNaslovna from '../../images/ametek.jpg';
import AmetekFour from '../../images/amatek-four.jpg';
import AmetekFive from '../../images/amatek-five.jpg';

var AmetekNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${AmetekNaslovna})`,
	marginTop: '0'
};

var AmetekFiveImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${AmetekFive})`,
	marginTop: '0'
};

var AmetekFourImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${AmetekFour})`,
	marginTop: '0'
};

export default class AmetekPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section2',
		'#section3',
		'#privredni_razvoj',
		'#medijska_podrska'
	];

	render() {
		return (
			<div className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={2} />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>
                <img src="/img/Ametek-9-samo-baloni.jpg" alt="heading image" className="ametek-first-image"/>
                <section className="first-section-padding">
                    <div className="images-holder-ametek">
                        <img className="top" src="/img/amatek-left-first.jpg" alt=""/>
                        <img className="bottom" src="/img/amatek-index1.jpg" alt=""/>
                    </div>
                </section>
				<section id="section2" className="full-one red-amatek">
					<div className="cont-992 ">
						<div className="amatek-logo">
							<div className="am-logo"><img className="" src="/img/amatek-logo.png"/></div>
						</div>
						<div className="">
							<div className="amatek-left-top">
								<p className="amatek-title">NOVI BIZNIS KAMPUS</p>
								<p className="amatek-first-text">U našem event portfoliju nalazi se i američka kompanija
									Ametek, proizvođač motora širokog spektra, koja je 2017. u Subotici otvorila novi
									biznis kampus.<br/>Fabriku je otvorio predsednik države, uz prisutvo medija i
									uglednih zvanica.</p>
							</div>
						</div>
					</div>
				</section>

				<section id="section3" className="amatek-sec">
					<div className="amatek-first-abs"><img src="/img/amatek-first-abs.jpg"/></div>
				</section>


				<section id="section_4" className="amatek-third flex1">
					<div className="amatek-third-top">
						<img src="/img/amatek-third-back-one.jpg"/>
						<div className="left-60" id="privredni_razvoj">
							<p className="amatek-title text-float-left">PRATIMO PRIVREDNI RAZVOJ</p>
							<p className="amatek-first-text white-text">Uz privredne gigante pratimo privredni razvoj, a
								među njima je i nemačka kompanija Dunkermotoren, za koju smo prilikom proširivanja
								proizvodnih pogona organizovali svečanost kojom je kompanija obeležila svoj razvoj.
								Tehnička podrška i organizacija događaja, dizajn pratećih materijala, koordinacija
								zvanica, samo je deo aktivnosti koju smo tom prilikom realizovali.</p>
						</div>
					</div>
					<div className="amatek-third-right" id="amatek_third_back">
						<img src="/img/amatek-third-back-two.jpg"/>
					</div>
				</section>

				<div className="amatek-four" id="amatek_four" style={AmetekFourImg}>
				</div>

				<section id="section_6" className="amatek-five" style={AmetekFiveImg}>
					<div className="amatek-five-text" id="medijska_podrska">
						<div className="width-ametek-text">
							<p className="amatek-title text-float-left">MEDIJSKA I PR PODRŠKA</p>
							<p className="amatek-first-text ">Osim kreativne i tehničke podrške otvaranju fabrike
								Dunkermotoren, Smart tim je bio zadužen i da ovaj značajan razvojni projekat dobije
								zasluženu medijsku podršku.</p>
						</div>
					</div>
				</section>

				<section id="section_7" className="amatek-last"><img className="small-img" src="/img/amate-last-one.jpg"/>
				</section>

			</div>
		)
	}
}