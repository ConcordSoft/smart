import React, {Component} from 'react';
import ONamaNaslovna from '../images/smart-ekipa.jpg'

var ONamaNaslovnaImg = {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
    backgroundImage: `url(${ONamaNaslovna})`,
    marginTop: '0'
};

export default class ONamaPage extends Component {
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
                            <h1 className="contact-title">O NAMA</h1>
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
                                <p>Partner i direktor</p>
                                <div className="box-text">
                                    <p>Magistar marketing menadžmenta, specijalista za odnose sa medijima i media buying. Gotovo 20 godina iskustva u polju marketinga, na vodećim menadžment pozicijama, posebno na polju lansiranja novih brendova na tržište, razvoja brendova i strateškog brend menadžmenta. </p>
                                    <p>Prvih deset godina je provela na poziciji direktora marketinga i razvoja poznatog brenda u industriji mode „Legend WorldWide“, zatim kao konsultant mnogih klijenata kao što su u širem regionu poznata farmaceutska kompanija  „Goodwill Pharma“ i jedna od najvećih integrisanih kompanija za naftu i gas „Euro Petrol“ i „Euro Gas“. Dugogodišnje iskustvo u vođenju kompleksnih marketinških projekata, saradnji sa medijima i zakupu medija i kreiranju prodajnih i marketinških strategija. Poslednjih deset godina radi na poziciji partnera i direktora Smart Agency.</p>
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
                                    <p>Partner i kreativni direktor</p>
                                    <div className="box-text">
                                        <p>Diplomirani profesor književnosti. Specijalizovana za kreiranje koncepta marketing i promotivnih kampanja za klijente, menadžement događaja i drugih kreativnih zadataka.</p>
                                        <p>Iskustvo dugo 18 godina u copywriting-u, PR aktivnostima i kreativnom korporativnom razvoju. Na menadžment pozicijama je radila 8 godina, dok  10 godina radi u marketing agenciji kao partner i kreativni direktor. Lingvista. Novinar. Piše kolumne za nekoliko poznatih časopisa i portala.</p>
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
                                <p>partner i umetnički direktor</p>
                                <div className="box-text">
                                    <p>Diplomirala je grafički dizajn na Fakultetu primenjenih umetnosti u Beogradu.</p>
                                    <p>Preko 18 godina iskustva kao umetnički direktor renomiranih inostranih i domaćih kompanija (Zepter International, Zlatib02r voda, Higlo) i marketing direktor (Vinarija Čoka), kao i konsultant za razvoj vizuelnih brend koncepata (Euro Petrol i Euro Gas).  Član je ULUPUDS, dobitnik nagrada za grafički dizajn. Poslednjih 10 godina radi na poziciji partnera i umetničkog direktora Smart Agency.</p>

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
                                    <p>grafički dizajner</p>
                                    <div className="box-text">
                                        <p>Preko 18 godina angažovan je u različitim kompanijama u polju grafičkog dizajna: od pakovanja, dizajna farmaceutskih proizvoda, brendiranja raznih komunikacionih sredstava, pa do kompleksnih promotivnih kampanja.</p>
                                        <p>Diplomirao je na Lakeland College, Cleveland, Ohio 1996. sa stepenom saradnika u primenjenom biznisu i grafičkom dizajnu. Dobitnik je mnogih nagrada i učestovao je u mnogobrojnim izložbama u Srbiji. Od 2015. radi za Smart Agency.</p>
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
                                <p>junior marketing menadžer</p>
                                <div className="box-text">
                                    <p>Diplomirala marketing menadžment na Ekonomskom fakultetu u Subotici.</p>
                                    <p>Pored formalnog obrazovanja, učestvovala je u različitim neprofitnim  radionicama (javni angažman i komunikacija, psihologija, umetnost i dr.). Kreativni senzibilitet izražava kroz različite forme umetnosti i kulture kao što su grafički dizajn, digitalno crtanje i muzika.</p>
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
                                    <p>grafički dizajner</p>
                                    <div className="box-text">
                                        <p>Preko 20 godina iskustva kao grafički dizajner. Uporedo sa karijerom grafičkog dizajnera razvijao je talente u pravcu crtanja stripova i slušanja ekperimentalne muzike u underground klubovima, razmenjujući iskustva sa pripadnicima lokalnih umetničkih grupa. Pravljenje skulptura od stiropora ga je dovelo do saradnje sa modnom industrijom.</p>
                                        <p>Proveo je osam godina radeći sa regionalno najpoznatijim modnim brendom. Interesuju ga mogućnosti flash animacije, radio je web sajtove poznatih kompanija. Kadgod mu mogućnosti dozvoljavaju ekperimentiše sa poljem stripova. Ostatak vremena provodi radeći za Smart Agency kao grafički dizajner.</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </main>
		)
	}
}