import React, {Component} from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "./../ScrollToComponent";

import BossNaslovna from '../../images/boss.png';
import BossFirstSection from '../../images/Menu_JPEG.jpg';
import Packing from '../../images/Stara_P.png';

var BossNaslovnaImg = {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
    backgroundImage: `url(${BossNaslovna})`,
    marginTop: '0'
};

var BossFirstSectionImg = {
    height: '900px',
    backgroundImage: `url(${BossFirstSection})`
};

var PackingImg = {
    backgroundPositionX: "-55px",
    backgroundSize: "cover",
    height: "940px",
    backgroundImage: `url(${Packing})`,
    marginTop: '0'
};

export default class BossPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section_1',
		'#section_2',
		'#section_3',
		'#section_4'
	];

	render() {
		return (
			<main className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={2} path="/en" />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

                <div className="main-image-page main-boss" style={BossNaslovnaImg}></div>
                <section className="boss-section" id="section_1" style={BossFirstSectionImg}>
                    <div className="right-bottom-text background-black">
                        <p className="first-text">LJUBAV NA PRVI POGLED</p>
                        <p className="content-text">Ukus i način pripremanja hrane najvažniji su za uživanje u njoj. Ali, za nas iz sveta marketinga - važno je i "pakovanje".</p>
                        <p className="content-text">Caffe pizzeria Boss iz Subotice, koja diktira trendove ugostiteljstva i kulinarstva u zemlji, Smart dizajnerskom timu prepušta kreaciju svojih jelovnika.</p>
                    </div>
                </section>
                <section className="boss-section top-image" id="section_2">
                    <img className="image-top" src="/img/Boss-image-top.png" alt=""/>
                    <div className="left-bottom-text background-olive">
                        <p className="first-text">TRADICIJA I ISKUSTVO</p>
                        <p className="content-text">Stara Pizzeria, restoran sa dugom i bogatom tradicijom u centru Subotice, koja se profilisala i kao mesto odličnih rok svirki, sarađuje sa Smart kreativnim timom.</p>
                    </div>
                    <img className="image-bottom" src="/img/Boss-image-down.png" alt=""/>
                </section>
                <section className="boss-section chinese" id="section_3">
                    <img src="/img/ChinesePNG.png" alt=""/>
                    <div className="right-bottom-text background-gray-dark">
                        <p className="first-text">AMBALAŽA ZA HRANU</p>
                        <p className="content-text">Izazovan i inspirativan zadatak - dizajnirati privlačnu, praktičnu i jedinstvenu ambalažu za pakovanje hrane, koja nadograđuje imidž resorana. Smart voli kompleksne kreativne zadatke!</p>
                    </div>
                </section>
                <section className="boss-section packing" style={PackingImg} id="section_4">
                    <img src="/img/stara-p.png" alt=""/>
                    <div className="left-bottom-text background-gray">
                        <p className="first-text">KAKO SPAKOVATI PICU</p>
                        <p className="content-text">Zanimljiva kesa, modernog dizajna, sa širokom osnovom u koju staje kutija za picu. Svaki zadatak ima smart rešenje...</p>
                    </div>
                </section>
			</main>
		)
	}
}