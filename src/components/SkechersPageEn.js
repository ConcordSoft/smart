import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollToComponent from "./ScrollToComponent";

import skechersHead from '../images/skechers-head.png';

var skechersHeadImg = {
	backgroundPosition: "center center",
	backgroundSize: "cover",
	height: "100vh",
	backgroundImage: `url(${skechersHead})`
};

export default class SkechersPage extends Component {
	constructor(props) {
		super(props);
	}

	scrollNodes = [
		'#section1',
		'#section2',
		'#section3',
		'#section4',
		'#section5',
		'#section6',
		'#section7',
		'#section8'
	];

	render() {
		return (
			<div className="smart-page">
				<Link to="/" className="smart-page-back-button">back</Link>
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div style={skechersHeadImg}>
				</div>

				<div className="full-one black" id="section1">
					<div className="">
						<div className="">
							<img className="image-logo sk-logo" src="/img/logo-sk.png"/>
						</div>
					</div>
				</div>

				<div className="sk-one black" id="section2">
					<div className="skechers-text">
						<div><p className="wenge text top-padding">This world famous brand, popular with people of all ages and with its instantaneously recognisable image, has chosen the Smart Agency to be their creative representative in Serbia (?). We take this as a huge honour as well as an exciting challenge!</p></div>
					</div>
				</div>

				<div className="sk-two"  id="section3">
					<div className="width-30 text-box">
						<p className="first-text light-green">PROMO EVENTS</p>
						<p className="white text top-padding">A promotional event as a sports spectacle, as an active party that invites all the guests to dance along… as a work-out, as a walk through the showroom, as a catwalk, as an event that is talked about for a long time afterwards…</p>
					</div>
					<img className="img-right2 img-one" src="img/women-1.jpg"/>
					<img className="img-left img-two" src="img/women-2.jpg"/>
					<img className="img-right2 img-three relative" src="img/women-3.jpg"/>
				</div>

				<div className="cleardiv"></div>

				<div className="image-full" id="section4">
					<img className="md-480" src="/img/skechers-women1.jpg"/>
					<div className="text-box-skech">
						<div className="text-box">
						</div>
					</div>
					<p className="absolute-text1 pink text">Smart Agency team organizes promotions of new collections of Skechers sports and urban footwear.  And every single time the effects of Smart’s promotions exceed expectations - we feel like walking on soft clouds! It is always comfortable when walking in Skechers!</p>
				</div>


				<div className="full-one lightgrey-back" id="section5">
					<div className="text-both">
						<div className="left-text"><p className="first-text brown">OOH CAMPAIGN</p></div>
						<div className="right-text"><p className="brown text">On billboards, mega boards, city buses, seen whilst walking, from a car window or from an airplane, Skechers is a welcome guest seen in every city.</p>
						</div>
					</div>
				</div>

				<div id="section6">
					<div className="facebook-responsive">
						<iframe
							src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsmartagencija%2Fvideos%2F1982391538437736%2F&width=500&show_text=false&height=280&appId"
							width="500" height="280" scrolling="no" allowTransparency="true"
							allowFullScreen="true"></iframe>
					</div>
				</div>

				<div className="sk-three" id="section7">
					<div className="text-both">
						<div className="left-text"></div>
						<div className="right-text"><p className="light-grey text">Implementing a great combination of images with text, Smart makes the locations come alive and communicate compelling stories about our brands.</p></div>
					</div>
				</div>

				<div className="image-full"><img src="/img/skechers-girls.jpg"/></div>

				<div className="sk-four clearfix" id="section8">
					<div className="text-both">
						<div className="left-text"><p className="first-text white">PR – FRIENDSHIP THROUGH WORK</p></div>
						<div className="right-text"><p className="dark text">Smart has good, friendly relationships with bloggers, influencers, and popular social networking people who are all active and very much in the public eye. This is why they love to work with us and are always glad and willing to write and talk about our clients.</p></div>
					</div>
				</div>

			</div>
		)
	}
}