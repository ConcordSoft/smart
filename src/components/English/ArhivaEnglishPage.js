import React, { Component } from 'react';
import ArhivaNaslovna from '../../images/Top_Image.jpg';
import ArhivaCarousel from './../ArhivaCarousel';

var ArhivaNaslovnaImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${ArhivaNaslovna})`
};

export default class ArhivaEnglishPage extends Component {

	render () {
		return (
            <main>
				<div className="smart-page arhiva" style={ ArhivaNaslovnaImg }>
					<div className="arhiva-heading-text">
						<p className="top-text">Smart</p>
						<p className="bottom-text">Archive</p>
					</div>
				</div>
				<section id="1_section">
					<div className="orange-section">
						<ArhivaCarousel/>
					</div>
				</section>
            </main>
        )
    }
}