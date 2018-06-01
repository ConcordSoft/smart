import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import $ from 'jquery';
import SlideOverlay from '../components/Carousel/SlideOverlay';

import skechersHead from '../images/skechers-head.png';
import bicNaslovna from '../images/bic-naslovna1.jpg';
import ksNaslovna from '../images/ks-naslovna.jpg';
import dokFirst from '../images/dok-first.jpg';
import zbNaslovna from '../images/zb-naslovna.jpg';
import epFirst from '../images/ep-first.jpg';
import AmetekNaslovna from '../images/Ametek-9-samo-baloni.jpg';
import SwarovskiNaslovna from '../images/sw-main.jpg';
import BossNaslovna from '../images/boss.png'

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clickedSlideNumber: null,
			returnedFromPageSlideNumber: null,
			currentSlideGroup: 0,
			carouselOffset: '0',
			carouselVerticalOffset: '0',
			width: window.innerWidth,
			height: window.innerHeight
		};

		this.computedClassNames = this.computedClassNames.bind(this);
		this.spreadSlide = this.spreadSlide.bind(this);
		this.onSlideItemClick = this.onSlideItemClick.bind(this);
		this.onCarouselNavigationClick = this.onCarouselNavigationClick.bind(this);
		this.onCarouselNavigationClick = this.onCarouselNavigationClick.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);

		if (this.props.location.state) {

			if (this.props.location.state.currentSlideGroup) {
				let slideGroupWidth = 100;
				let currentSlideGroup = this.props.location.state.currentSlideGroup;
				let carouselOffset = String(-this.props.location.state.currentSlideGroup * slideGroupWidth) + 'vw';


				if (this.state.width <= 768) {
					carouselOffset = '0';
				}

				this.setState({
					currentSlideGroup: currentSlideGroup,
					carouselOffset: carouselOffset
				}, () => {
					// Callback
				});
			}

			// this.setState({
			// 	returnedFromPageSlideNumber: 1
			// }, () => {
			// 	this.computedClassNames(1);
			// });

			// let clickedSlideNumber = 1;
			//
			// let slideWidth = 33.3333;
			// let carouselOffset = String(-clickedSlideNumber * slideWidth) + 'vw';
			// let carouselOffsetTransition = 'all 1.2s cubic-bezier(.09,.93,.65,1)';
			//
			// this.setState({
			// 	clickedSlideNumber: clickedSlideNumber,
			// 	carouselOffset: carouselOffset,
			// 	carouselOffsetTransition: carouselOffsetTransition,
			// 	returnedFromPageSlideNumber: 1
			// });

			// this.spreadSlide(1);
		}
	}

	computedClassNames = (slideNumber) => {
		return classNames({
			'carousel-slide': true,
			'carousel-slide-click': this.state.clickedSlideNumber === slideNumber,
			'carousel-slide-returned-from-page': this.state.returnedFromPageSlideNumber === slideNumber
		});
	};

	spreadSlide = (clickedSlideNumber) => {
		let slideWidth = 33.3333;
		let carouselOffset = String(-clickedSlideNumber * slideWidth) + 'vw';
		let carouselVerticalOffset = '0';
		let carouselOffsetTransition = 'all 1.2s cubic-bezier(.09,.93,.65,1)';

		if (this.state.width <= 768) {
			carouselOffset = '0';
			carouselVerticalOffset = '0';
			let clickedSlide = $('#slide_' + clickedSlideNumber);

			clickedSlide.css({
				'position': 'absolute',
				'z-index': '1049',
				'top': String(clickedSlide.position().top) + 'px'
			});

			clickedSlide.animate({
				top: '0'
			}, 0);
		}

		this.setState({
			clickedSlideNumber: clickedSlideNumber,
			carouselOffset: carouselOffset,
			carouselVerticalOffset: carouselVerticalOffset,
			carouselOffsetTransition: carouselOffsetTransition
		});
	};

	onSlideItemClick = (clickedSlideNumber, e, self) => {
		this.spreadSlide(clickedSlideNumber);
	};

	onCarouselNavigationClick = (type) => {
		let increment, currentSlideGroup, carouselOffset, carouselOffsetTransition;
		carouselOffsetTransition = 'all 3s ease';
		increment = (type === 'next') ? 1 : -1;
		currentSlideGroup = this.state.currentSlideGroup + increment;

		if(currentSlideGroup === 0
			|| currentSlideGroup === 1
			|| currentSlideGroup === 2) {
			carouselOffset = String(-currentSlideGroup * 100) + 'vw';

			this.setState({
				currentSlideGroup: currentSlideGroup,
				carouselOffset: carouselOffset,
				carouselOffsetTransition: carouselOffsetTransition
			}, () => {
				// Callback
			});
		}
	};

	setBGColor = (bgColor) => {
		return this.state.width <= 768 ? "rgba(0,0,0,0.5)" : bgColor;
	};

	render () {
		return (
			<div className="smart-home">

				<div className="carousel">

					<div className="carousel-wrapper"
					     style={{
						     marginLeft: this.state.carouselOffset,
						     marginTop: this.state.carouselVerticalOffset,
						     transition: this.state.carouselOffsetTransition
					     }}>

						<Link to="/skechers"
						      id="slide_0"
						      className={this.computedClassNames(0)}
						      style={{backgroundImage: 'url('+skechersHead+')'}}
						      onClick={(e) => this.onSlideItemClick(0, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Promocija','Media Buying']}
								title="Udobnost uključena u svaki projekat"
								client="SKECHERS CE Europe"
							/>
						</Link>
						<Link to={{
								pathname: '/bic'
								}}
						      id="slide_1"
						      className={this.computedClassNames(1)}
						      style={{backgroundImage: 'url('+bicNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(1, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Usluge','Media Buying']}
								title="Zajedno kreiramo generacije novih potrošača"
								client="BIC CSE Europe"
							/>
						</Link>
						<Link to="/kosili"
						      id="slide_2"
						      className={this.computedClassNames(2)}
						      style={{backgroundImage: 'url('+ksNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(2, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Usluge', 'Media Buying']}
								title="Nežnije od ostalih"
								client="LOMAX COMPANY"
							/>
						</Link>

						<Link to="/dobra"
						      id="slide_3"
						      className={this.computedClassNames(3)}
						      style={{backgroundImage: 'url('+dokFirst+')'}}
						      onClick={(e) => this.onSlideItemClick(3, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Promocija', 'Media Buying']}
								title="Dobre odluke određuju poslovanje"
								client="DOBRA OVSENA KAŠA"
							/>
						</Link>
						<Link to="/zvonko-bogdan"
						      id="slide_4"
						      className={this.computedClassNames(4)}
						      style={{backgroundImage: 'url('+zbNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(4, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Dizajn']}
								title="Od prvog dana, do velikih medalja"
								client="VINARIJA ZVONKO BOGDAN"
							/>
						</Link>
						<Link to="/europetrol"
						      id="slide_5"
						      className={this.computedClassNames(5)}
						      style={{backgroundImage: 'url('+epFirst+')'}}
						      onClick={(e) => this.onSlideItemClick(5, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Usluge', 'Media Buying']}
								title="Snaga je u kvalitetu"
								client="EURO PETROL"
							/>
						</Link>

						<Link to="/ametek"
						      id="slide_6"
						      className={this.computedClassNames(6)}
						      style={{
						      	backgroundImage: 'url('+AmetekNaslovna+')',
								backgroundSize: 'auto',
                                backgroundPositionY: '-100px'}}
						      onClick={(e) => this.onSlideItemClick(6, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Organizacija Događaja']}
								title="Ametek"
								client="AMETEK SRBIJA"
							/>
						</Link>
						<Link to="/swarovski"
						      id="slide_7"
						      className={this.computedClassNames(7)}
						      style={{backgroundImage: 'url('+SwarovskiNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(7, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Organizacija Događaja']}
								title="Swarovski"
								client="SWAROVSKI SRBIJA"
							/>
						</Link>
						<Link to="/boss"
						      id="slide_8"
						      className={this.computedClassNames(8)}
						      style={{backgroundImage: 'url('+BossNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(8, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, 0.5)')}
								services={['Dizajn']}
								title="Boss Caffe"
								client="BOSS CAFFE"
							/>
						</Link>

					</div>

				</div>

				<div className="carousel-navigation-previous"
				     onClick={(e) => this.onCarouselNavigationClick('previous')}>
					<i className="material-icons">keyboard_arrow_left</i>
				</div>

				<div className="carousel-navigation-next"
				     onClick={(e) => this.onCarouselNavigationClick('next')}>
					<i className="material-icons">keyboard_arrow_right</i>
				</div>

			</div>
		)
	}
}