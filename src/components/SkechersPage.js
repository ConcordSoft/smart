import React, {Component} from 'react';
import ClientPageBackButton from "./ClientPageBackButton";
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
		'#section3',
		'#section4',
		'#section5',
		'#skechers-girls',
		'#section6'
	];

	render() {
		return (
			<div className="smart-page">
				<ClientPageBackButton parentThis={this} currentSlideGroup={0} />
				<ScrollToComponent scrollNodes={this.scrollNodes}/>

				<div className="main-image-page" style={skechersHeadImg}>
				</div>

				<div className="full-one light-blue" id="section1">
					<div className="">
						<div className="">
							<img className="image-logo sk-logo" src="/img/skechers-logo.png"/>
						</div>
					</div>
				</div>

				<div className="sk-one light-blue">
					<div className="skechers-text">
						<div><p className="wenge text top-padding">Kada je brend svetski poznat, ima odličan imidž, kada
							je svuda popularan i obožavaju ga sve ciljne grupe – veliki je izazov raditi sa njim.
							Skechers je ukazao poverenje Smart kreativnom timu.</p></div>
					</div>
				</div>

				<div className="sk-video-wrapper beograd">
                    <video controls="controls">
                        <source src="video/skechers-beograd.mp4.mp4" type="video/mp4"/>
                    </video>
					<div className="sk-text-over-video">
						<p className="large-text-56 top-text light-brown">SKECHERS</p>
						<p className="large-text-132 bottom-text">BG EVENT</p>
					</div>
				</div>
                <div className="sk-grid-images">
					<div className="left image-wrapper">
                        <div className="single-image">
                            <img src="img/first-left.png" alt=""/>
                        </div>
                        <div className="single-image">
                            <img src="img/left-middle.png" alt=""/>
                        </div>
                        <div className="single-image">
                            <img src="img/left-bottom.png" alt=""/>
                        </div>
					</div>
					<div className="right image-wrapper">
                        <div className="single-image">
                            <img src="img/first-right.png" alt=""/>
                        </div>
                        <div className="single-image">
                            <img src="img/middle-right.png" alt=""/>
                        </div>
						<div className="single-image">
                            <img src="img/right-bottom.png" alt=""/>
                    	</div>
					</div>
				</div>
                <div className="sk-video-wrapper zagreb">
                    <video controls="controls">
                        <source src="video/skechers-zagreb.mp4" type="video/mp4"/>
                    </video>
                    <div className="sk-text-over-video">
                        <p className="large-text-56 top-text light-brown">SKECHERS</p>
                        <p className="large-text-132 bottom-text">ZG EVENT</p>
                    </div>
                </div>
				<div className="sk-two"  id="section2">
					<div className="width-30 text-box">
						<p className="first-text light-green">PROMO EVENTS</p>
						<p className="white text top-padding">Promocija kao sportski spektakl, kao aktivna zabava koja
							pokreće sve goste, kao trening, šetnja kroz showroom, defile po modnoj pisti, kao događaj o
							kojem se dugo priča i prepričava…</p>
					</div>
					<img className="img-right2 img-one" src="img/women-1.jpg"/>
					<img className="img-left img-two" src="img/women-2.jpg"/>
					<img className="img-right2 img-three relative" src="img/women-3.jpg"/>
				</div>

				<div className="cleardiv"></div>

				<div className="image-full" id="section3">
					<img className="md-480" src="/img/skechers-women1.jpg"/>
					<div className="text-box-skech">
						<div className="text-box">
						</div>
					</div>
					<p className="absolute-text1 pink text">Smart tim organizuje promocije novih kolekcija Skechers
						sportske i urbane obuće. I svaki put kada efekti promocije prevaziđu očekivanja, imamo osećaj
						kao da hodamo po oblacima. Uz Skechers je uvek udobno!</p>
				</div>


				<div className="full-one lightgrey-back" id="section4">
					<div className="text-both">
						<div className="left-text"><p className="first-text brown">OOH KAMPANJE</p></div>
						<div className="right-text"><p className="brown text">Na bilbordu, megabordu, na gradskom
							autobusu, u šetnji, iz auta, ili iz aviona, Skechers je rado viđen gost u svakom gradu.</p>
						</div>
					</div>
				</div>

				<div>
					<div className="facebook-responsive">
						<iframe
							src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsmartagencija%2Fvideos%2F1982391538437736%2F&width=500&show_text=false&height=280&appId"
							width="500" height="280" scrolling="no" allowTransparency="true"
							allowFullScreen="true"></iframe>
					</div>
				</div>

				<div className="sk-three" id="section5">
					<div className="text-both">
						<div className="left-text"></div>
						<div className="right-text"><p className="light-grey text">Smart je zadužen da lokacije, u kombinaciji sa slikama i porukama, ožive i progovore, ispričaju vam priče o našim brendovima</p></div>
					</div>
				</div>

				<div className="image-full" id="skechers-girls"><img src="/img/skechers-girls.jpg"/></div>

				<div className="sk-four clearfix" id="section6">
					<div className="text-both">
						<div className="left-text"><p className="first-text white">PR – PRIJATELJSTVO KROZ RAD</p></div>
						<div className="right-text"><p className="dark text">Smart ima dobre prijateljske odnose sa
							blogerima, influenserima, popularnim licima sa društvenih mreža, u koje je uperena pažnja
							javnosti. Zato oni vole da rade sa nama i rado pričaju i pišu o našim klijentima.</p></div>
					</div>
				</div>

			</div>
		)
	}
}