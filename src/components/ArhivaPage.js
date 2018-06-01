import React, { Component } from 'react';
import ArhivaNaslovna from '../images/Top_Image.jpg';
import ArhivaCarousel from './ArhivaCarousel';

var ArhivaNaslovnaImg = {
	backgroundSize: "cover",
	height: "50vh",
	backgroundImage: `url(${ArhivaNaslovna})`,
	minHeight: "100%"
};

export default class ArhivaPage extends Component {

	render () {
		return (
            <main>
				<div className="smart-page arhiva" style={ ArhivaNaslovnaImg }>
					<div className="arhiva-heading-text">
						<p className="top-text">Smart</p>
						<p className="bottom-text">Arhiva</p>
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