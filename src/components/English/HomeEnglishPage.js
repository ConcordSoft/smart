import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SlideOverlay from '../../components/Carousel/SlideOverlay';

import skechersHead from '../../images/skechers-head.png';
import bicNaslovna from '../../images/bic-naslovna1.jpg';
import ksNaslovna from '../../images/ks-naslovna.jpg';
import dokFirst from '../../images/dok-first.jpg';
import zbNaslovna from '../../images/zb-naslovna.jpg';
import epFirst from '../../images/ep-first.jpg';
import AmetekNaslovna from '../../images/ametek.jpg';
import SwarovskiNaslovna from '../../images/sw-main.jpg';
import BossNaslovna from '../../images/boss.png'
import $ from "jquery";

export default class HomeEnglishPage extends Component {
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
					// carouselVerticalOffset = String(-clickedSlideNumber * 50) + 'vh';
				}

				this.setState({
					currentSlideGroup: currentSlideGroup,
					carouselOffset: carouselOffset
				}, () => {
					// Callback
				});
			}
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
		return this.state.width <= 768 ? "rgba(0,0,0,0.3)" : bgColor;
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

						<Link to="/en-skechers"
						      id="slide_0"
						      className={this.computedClassNames(0)}
						      style={{backgroundImage: 'url('+skechersHead+')'}}
						      onClick={(e) => this.onSlideItemClick(0, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(57,48,44,.85)')}
								services={['Promotion']}
								title="Comfort included in each project"
								client="SKECHERS CE Europe"
								language="en"
							/>
						</Link>
						<Link to="/en-bic"
						      id="slide_1"
						      className={this.computedClassNames(1)}
						      style={{backgroundImage: 'url('+bicNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(1, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(242,183,17,.85)')}
								services={['Services']}
								title="Together we create generations of new consumers"
								client="BIC CSE Europe"
								language="en"
							/>
						</Link>
						<Link to="/en-kosili"
						      id="slide_2"
						      className={this.computedClassNames(2)}
						      style={{backgroundImage: 'url('+ksNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(2, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(113,171,95,.85)')}
								services={['Design', 'Media Buying']}
								title="Tenderer than others"
								client="LOMAX COMPANY"
								language="en"
							/>
						</Link>

						<Link to="/en-dobra"
						      id="slide_3"
						      className={this.computedClassNames(3)}
						      style={{backgroundImage: 'url('+dokFirst+')'}}
						      onClick={(e) => this.onSlideItemClick(3, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(42, 51, 144, .85)')}
								services={['Promotion', 'Services']}
								title="Good decisions determine the business"
								client="OATMEAL"
								language="en"
							/>
						</Link>
						<Link to="/en-zvonko-bogdan"
						      id="slide_4"
						      className={this.computedClassNames(4)}
						      style={{backgroundImage: 'url('+zbNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(4, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(36, 36, 36, .85)')}
								services={['Promotion']}
								title="From the first day to the big medals"
								client="WINERY ZVONKO BOGDAN"
								language="en"
							/>
						</Link>
						<Link to="/en-europetrol"
						      id="slide_5"
						      className={this.computedClassNames(5)}
						      style={{backgroundImage: 'url('+epFirst+')'}}
						      onClick={(e) => this.onSlideItemClick(5, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 181, 66, .85)')}
								services={['Promotion']}
								title="Power is in quality"
								client="EUROPETROL"
								language="en"
							/>
						</Link>

						<Link to="/en-ametek"
						      id="slide_6"
						      className={this.computedClassNames(6)}
						      style={{backgroundImage: 'url('+AmetekNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(6, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, .85)')}
								services={['Services']}
								title="Ametek"
								client="AMETEK SERBIA"
								language="en"
							/>
						</Link>
						<Link to="/en-swarovski"
						      id="slide_7"
						      className={this.computedClassNames(7)}
						      style={{backgroundImage: 'url('+SwarovskiNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(7, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, .85)')}
								services={['Design', 'Media Buying']}
								title="Swarovski"
								client="SWAROVSKI SERBIA"
								language="en"
							/>
						</Link>
						<Link to="/en-boss"
						      id="slide_8"
						      className={this.computedClassNames(8)}
						      style={{backgroundImage: 'url('+BossNaslovna+')'}}
						      onClick={(e) => this.onSlideItemClick(8, e, this)}>
							<SlideOverlay
								bgColor={this.setBGColor('rgba(0, 0, 0, .85)')}
								services={['Promotion']}
								title="Boss Caffe"
								client="BOSS CAFFE"
								language="en"
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