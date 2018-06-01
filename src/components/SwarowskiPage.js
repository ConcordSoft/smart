import React, {Component} from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
import ScrollToComponent from "./ScrollToComponent";

import SwarovskiNaslovna from '../images/sw-main.jpg';
import SWBlue from '../images/sw-blue.jpg';
import BlueSwarovski from '../images/blue-sw.jpg';
import SwTwo from '../images/sw-two-sec.jpg';
import SwSecond from '../images/sw-two-two.jpg';
import SwCer from '../images/sw-cer.jpg';
import SwSingle from '../images/sw-only-img.jpg';
import SwFamily from '../images/family-sw.jpg';
import SwLastOne from '../images/sw-last-one.jpg';
import SwLastTwo from '../images/sw-last-two.jpg';

var SwarovskiNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: '100vh',
	backgroundImage: `url(${SwarovskiNaslovna})`
};

var SWBlueImg = {
	backgroundSize: "cover",
	backgroundImage: `url(${SWBlue})`
};

var BlueSwarovskiImg = {
	backgroundSize: "cover",
	backgroundImage: `url(${BlueSwarovski})`
};

var SwTwoImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwTwo})`
};

var SwSecondImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwSecond})`
};

var SwCerImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwCer})`
};

var SwSingleImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwSingle})`
};

var SwFamilyImg = {
	backgroundPosition: "topcenter",
	backgroundSize: "cover",
	backgroundImage: `url(${SwFamily})`
};

var SwLastOneImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwLastOne})`
};

var SwLastTwoImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundImage: `url(${SwLastTwo})`
};


export default class SwarovskiPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section_2_1',
		'#section_3_1',
		'#section_7'
	];

	render() {
		return (
			<div className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={2} />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={SwarovskiNaslovnaImg}>
				</div>

				<section id="section_2" className="full-one sw-blue" style={SWBlueImg}>
					<img className="ekipa" src="/img/sw-blue-one.jpg"/>
					<div className="flex1">
						<div className="sw-ceremony-text" id="section_2_1">
							<p className="amatek-title">GROUNDBREAKING CEREMONY</p>
							<p className="amatek-first-text white-text">Svaki veliki san počinje značajnim početnim
								korakom. U privredi, marketingu, životu...<br/>
								Smart Agency je bila organizaciona podrška firmi Swarovski kada su u Srbiji počinjali da
								grade svoj novi veliki san.</p>
							<img className="" src="/img/sw-slem.jpg"/>
						</div>
						<div className="sw-first-right text-right"><img className="float-right" src="/img/sw-blue-two.png"/>
						</div>
					</div>
				</section>

				<section id="section_3" className="sw-sec" style={BlueSwarovskiImg}>
					<div className="left-sec-sw" style={SwTwoImg}></div>
					<div className="right-sec-sw" style={SwSecondImg}></div>
					<div className="sw-ceremony-text" id="section_3_1">
						<p className="amatek-title">CEREMONIJA OTVARANJA</p>
						<p className="amatek-first-text white-text">Ugledne zvanice iz zemlje i inostranstva, mediji i široka javnost ispratili su svečanu ceremoniju otvaranja nove Swarovski fabrike u Subotici. Nosimo sjajne poslovne utiske vezane za organizaciju ovog sjajnog događaja.</p>
					</div>
				</section>

				<section id="section_4" className="sw-third" style={SwCerImg}></section>
				
				<section id="section_5" className="sw-four" style={SwSingleImg}></section>

				<section id="section_6" className="sw-five">
					<div className="sw-five-down" style={SwFamilyImg}>
						<div className="sw-family-right" id="section_7">
							<p className="amatek-title ">POSAO JE ZABAVAN</p>
							<p className="amatek-first-text white-text"> Nama iz marketing sveta - svaki dan.<br/>
							A potrudili smo se da i zaposlenima u fabrici Swarovski u Subotici, kao i njihovim porodicama, učinimo poslovno okruženje veselim i zabavnim.<br/>
							Smeh, sportske aktivnosti i zabavne igre za najmlađe, u okviru Porodičnog dana, osmislili smo i realizovali sa velikim zadovoljstvom.
							</p>
						</div>
					</div>				
				</section>

				<section className="sw-last">
					<div className="sw-last-one" style={SwLastOneImg}></div>	
					<div className="sw-last-two" style={SwLastTwoImg}></div>	
				</section>	

			</div>
		)
	}
}