import React, {Component} from 'react';
import KontaktNaslovna from '../images/office-contact.jpg'

var KontaktNaslovnaImg = {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "1100px",
    backgroundImage: `url(${KontaktNaslovna})`,
    marginTop: '0'
};


export default class KontaktPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
                <section style={KontaktNaslovnaImg} className="clearfix relative contact-page">
                    <div className="con-info">
                        <div className="orange-contact">
                            <div className="position-info">
                                <p className="margin-bottom-0">FIRMA</p>
                                <h1 className="contact-title">CONTACT</h1>
                                <p className="style-contact">Smart Agency d.o.o<br />
                                    Korzo 1/16<br/>
                                    24000 Subotica, Serbia </p>
                                <p className="cont-phone">+381 24 55 22 92</p>
                                <p className="style-contact">smartagency.rs</p>
                                <p className="style-contact white">smart@smartagency.rs</p>
                            </div>
                        </div>
                        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.5199317369547!2d19.664691515059353!3d46.100545798778064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366c935a0f387%3A0xc8ce0d01b0d4e6d8!2z0JrQvtGA0LfQviAxLCDQodGD0LHQvtGC0LjRhtCw!5e0!3m2!1ssr!2srs!4v1524209857808" width="350" height="350"></iframe></div>
                    </div>
                </section>
			</main>
		)
	}
}