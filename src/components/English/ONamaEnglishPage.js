import React, {Component} from 'react';
import ClientPageBackButton from "./../ClientPageBackButton";
import ScrollToComponent from "../ScrollToComponent";


import ONamaNaslovna from '../../images/smart-ekipa.jpg'

var ONamaNaslovnaImg = {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
    backgroundImage: `url(${ONamaNaslovna})`,
    marginTop: '0'
};

export default class ONamaEnglishPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
                <div className="main about clearfix">

                    <section className="clearfix o-nama-first"></section>
                    <section className="orange-o-nama">
                        <div className="">
                            <h1 className="contact-title">ABOUT US</h1>
                            <p className="">Smart Agency posluje već 10 godina. Smart tim čine profesionalci iz oblasti marketinga, PR- a i dizajna, sa preko 100 godina iskustva iz različitih oblasti ovih delatnosti - u zbiru, naravno.</p>
                            <p className="">Razumevanje potreba klijenata, apsolutna posvećenost kreativnim zadacima i cilju da se te potrebe pretvore u dobre i značajne marketing akcije, ono su što nas razlikuje od drugih. Često kažemo da se za svaki projekat našeg klijenta borimo kao da mi lično nastupamo na tržištu. Znanje, energija, inspiracija i entuzijazam su najvažniji podaci iz naše lične karte.</p>
                            <p className="">Kada nas pitaju koji brend ili projekat najviše volimo...znate već ono “svi su nam kao deca”, ne možemo da odlučimo. A od svakog i mi ponešto naučimo!</p>
                        </div>
                    </section>
                    <div className="o-nama-box left-person clearfix">
                        <div className="person-info person-info-1">
                            <div className="left-info">
                                <div className="name">
                                    <h4 className="orange-title">JELENA</h4>
                                    <h5>Petrović-Zvekić</h5>
                                </div>
                                <p>Partner & CEO</p>
                                <div className="box-text">
                                    <p>Master in marketing management, specialist in media relations. Over 19 years of professional experience in marketing, in top management positions, specially in a field of brand launching and brand development. Spent the first ten years as a marketing director for the regional leader in fashion industry, Legend Worldwide, then as a consultant for different clients, such as one of the biggest Pharmaceutical company in the region- Goodwill Pharma and one of the biggest integrated oil and gas company - Euro Petrol and Euro Gas. </p>
                                    <p>For the last ten years, engaged as a partner and director of Smart agency.</p>
                                </div>
                            </div>
                        </div>
                        <img className="img-person-right" src="/img/jelena-slika.jpg"/>
                    </div>
                    <div className="o-nama-box right-person clearfix">
                        <img className="img-person-left" src="/img/ivana-slika.jpg"/>
                            <div className="person-info person-info-2">
                                <div className="right-info">
                                    <div className="name">
                                        <h4 className="orange-title">IVANA</h4>
                                        <h5>Jovanović</h5>
                                    </div>
                                    <p>Partner & Creative Director</p>
                                    <div className="box-text">
                                        <p>16 years experience in copywriting, PR and corporate creative development - 7 years in field of industry and 8 years in marketing agency. Linguist.</p>
                                        <p>Specialized in creating concepts of marketing and advertising campaigns for clients, event management and other creative tasks. For the last eight years, engaged as a partner and creative director of Smart agency.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="o-nama-box left-person clearfix">
                        <div className="person-info person-info-1">
                            <div className="left-info">
                                <div className="name">
                                    <h4 className="orange-title">DANIELA</h4>
                                    <h5>Bucalo</h5>
                                </div>
                                <p>Partner & Art director</p>
                                <div className="box-text">
                                    <p>Graduated graphic design at the Faculty of Applied Arts in Belgrade.</p>
                                    <p>Over 16 years of experience as an art director of renowned foreign and domestic companies (Zepter International, ZlatibO2r voda, Higlo), and marketing director (Vinarija Čoka), as well as consultant for the development of visual brand concepts (Euro Petrol i Euro Gas). Member of ULUPUDS, winner of awards for graphic design. For the last eight years, works as a partner and art director of the Smart Agency.</p>

                                </div>
                            </div>
                        </div>
                        <img className="img-person-right" src="/img/daniela-slika.jpg"/>
                    </div>
                    <div className="o-nama-box right-person clearfix">
                        <img className="img-person-left" src="/img/viktor-slika.jpg"/>
                            <div className="person-info person-info-2">
                                <div className="right-info">
                                    <div className="name">
                                        <h4 className="orange-title">VIKTOR</h4>
                                        <h5>Juriga</h5>
                                    </div>
                                    <p>Designer Soldier</p>
                                    <div className="box-text">
                                        <p>Viktor Juriga has been doing graphic design for the last 18 years in various companies and on projects ranging from packaging, pharmaceutical design, car branding to advertising.</p>
                                        <p>He graduated at Lakeland Colege, Cleveland, Ohio in 1996 with Associate Degree in Applied. He received numerous awards, and participated in numerous exhibitions in Serbia. Since 2015 works with Smart Agency. Member of UPIDIV since 1999.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="o-nama-box left-person clearfix">
                        <div className="person-info person-info-1">
                            <div className="left-info">
                                <div className="name">
                                    <h4 className="orange-title">LARISA</h4>
                                    <h5>Ivanković</h5>
                                </div>
                                <p>Junior marketing manager</p>
                                <div className="box-text">
                                    <p>Graduated at Faculty of Economic in Subotica at Marketing management department.</p>
                                    <p>PExcept formal education, she participated in different non-formal workshops (public performance and communication, psychology, art). Her creative sensibility is expressed in different forms like digital drawing, graphic design and music.</p>
                                </div>
                            </div>
                        </div>
                        <img className="img-person-right" src="/img/lara-slika.jpg"/>
                    </div>
                    <div className="o-nama-box right-person clearfix">
                        <img className="img-person-left" src="/img/rio-slika.jpg"/>
                            <div className="person-info person-info-2">
                                <div className="right-info">
                                    <h4 className="orange-title">Damir</h4>
                                    <h5>Lučić</h5>
                                    <p>Mouver Things</p>
                                    <div className="box-text">
                                        <p>20 years of experience as a graphic designer. Simultaneously with the career of graphic designer, experimented with drawing comics. Making of styrofoam sculptures led to collaboration with a local fashion star.</p>
                                        <p>Spent five years doing graphic design and marketing tasks in the clothes manufacturing company. Whenever possible, experiments in the field of comics. Spends rest of the time working in the Smart agency.</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </main>
		)
	}
}