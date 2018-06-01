import React from 'react';
import {withRouter, Switch, Route, Link} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Layout from './Layout';
import HomePage from './HomePage';
import BicPage from './BicPage';
import SkechersPage from './SkechersPage';
import KosiliPage from './KosiliPage';
import DobraOvsenaKasaPage from './DobraOvsenaKasaPage';
import EuroPetrolPage from './EuroPetrolPage';
import ZvonkoBogdan from './ZvonkoBogdan';
import AmetekPage from './AmetekPage';
import SwarovskiPage from './SwarowskiPage';
import ArhivaPage from './ArhivaPage';
import ONamaPage from './ONamaPage';
import UslugePage from './UslugePage';
import KontaktPage from './KontaktPage';
import BossPage from './BossPage';
import {slide as Menu} from 'react-burger-menu';
import HomeEnglishPage from "./English/HomeEnglishPage";
import BicEnglishPage from "./English/BicEnglishPage";
import SkechersEnglishPage from "./English/SkechersEnglishPage";
import KosiliEnglishPage from "./English/KosiliEnglishPage";
import DobraOvsenaKasaEnglishPage from "./English/DobraOvsenaKasaEnglishPage";
import ZvonkoBogdanEnglishPage from "./English/ZvonkoBogdanEnglishPage";
import EuroPetrolEnglishPage from "./English/EuroPetrolEnglishPage";
import AmetekEnglishPage from "./English/AmetekEnglishPage";
import SwarowskiEnglishPage from "./English/SwarowskiEnglishPage";
import BossEnglishPage from "./English/BossEnglishPage";
import UslugeEnglishPage from "./English/UslugeEnglishPage";
import ONamaEnglishPage from "./English/ONamaEnglishPage";
import KontaktEnglishPage from "./English/KontaktEnglishPage";
import ArhivaEnglishPage from "./English/ArhivaEnglishPage";
import NotFoundPage from './NotFoundPage';

function getPathByLanguage(currentKey, language) {
	let commonKey = '';

	if (currentKey === '/' || currentKey === language) {
		if (language === 'sr') {
			return '/';
		} else {
			return '/' + language;
		}
	}

	if (currentKey.startsWith("en")) {
		commonKey = currentKey.substring(3);
	} else {
		commonKey = currentKey;
	}

	if (language === 'sr') {
		return '/' + commonKey;
	} else {
		return '/' + language + '-' + commonKey;
	}
}

const App = ({location}) => {
	let currentLanguage = 'sr';
	let currentKey = location.pathname.split('/')[1] || '/';
	const timeout = {enter: 1200, exit: 1200};

	// If in English
	if (currentKey.startsWith("en")) {
		currentLanguage = 'en';
	}

	let menuStyles = {
		bmBurgerButton: {
			position: 'fixed',
			width: '30px',
			height: '30px',
			right: '25px',
			top: '25px',
			zIndex: '1000'
		},
		bmBurgerBars: {
			background: '#fff'
		},
		bmCrossButton: {
			height: '24px',
			width: '24px'
		},
		bmCross: {
			background: '#bdc3c7'
		},
		bmMenu: {
			background: '#373a47',
			padding: '2.5em 1.5em 0',
			fontSize: '1.15em'
		},
		bmMorphShape: {
			fill: '#373a47'
		},
		bmItemList: {
			color: '#fff',
			padding: '0.8em',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '70vh',
			fontWeight: 700
		},
		bmItem: {
			fontSize: '40px'
		},
		bmOverlay: {
			background: 'rgba(72, 57, 58, 1)',
			zIndex: '1000'
		}
	};

	return (
		<Layout>

			<div className="logo-smart">
				<Link className="logo-tag" to={currentLanguage === 'en' ? '/en' : '/'}>
					<img src="/img/logo.png" alt="logo"/>
				</Link>
			</div>

			{currentLanguage === 'en'
			?
				<div>
					<Menu styles={menuStyles} width={'100%'} right>
						<a className="menu-item" href="/en-o-nama">About Us</a>
						<a className="menu-item" href="/en-usluge">Services</a>
						<a className="menu-item" href="/en">Clients</a>
						<a className="menu-item" href="/en-arhiva">Archive</a>
						<a className="menu-item" href="/en-kontakt">Contact</a>
                        <div className="social-follow">
                            <a className="face-icon" href="https://www.facebook.com/smartagencija/">
                                <img src="img/facebook-icon.png" alt="facebook-icon"/>
                            </a>
                            <a className="insta-icon" href="https://www.instagram.com/smart_agency_serbia/">
                                <img src="img/instagram-icon.png" alt="instagram-icon"/>
                            </a>
                            <a className="youtube-icon" href="https://www.youtube.com/channel/UCAVdTP5atLi26yUjWvJ8fmA?view_as=subscriber">
                                <img src="img/youtube_youtube_icon_white_icon.png" alt="youtube-icon"/>
                            </a>
                        </div>
					</Menu>
					<div className="language-container">
						<Link to={getPathByLanguage(currentKey, 'sr')} className="language-link">SR</Link>
					</div>
				</div>
			:
				<div>
					<Menu styles={menuStyles} width={'100%'} right>
						<a className="menu-item" href="/o-nama">O nama</a>
						<a className="menu-item" href="/usluge">Usluge</a>
						<a className="menu-item" href="/">Klijenti</a>
						<a className="menu-item" href="/arhiva">Arhiva</a>
						<a className="menu-item" href="/kontakt">Kontakt</a>
						<div className="social-follow">
                            <a className="face-icon" href="https://www.facebook.com/smartagencija/">
								<img src="img/facebook-icon.png" alt="facebook-icon"/>
							</a>
                            <a className="insta-icon" href="https://www.instagram.com/smart_agency_serbia/">
                                <img src="img/instagram-icon.png" alt="instagram-icon"/>
							</a>
                            <a className="youtube-icon" href="https://www.youtube.com/channel/UCAVdTP5atLi26yUjWvJ8fmA?view_as=subscriber">
                                <img src="img/youtube_youtube_icon_white_icon.png" alt="youtube-icon"/>
							</a>
						</div>
					</Menu>
					<div className="language-container">
						<Link to={getPathByLanguage(currentKey, 'en')} className="language-link">EN</Link>
					</div>
				</div>
			}

			<TransitionGroup component="main" className="page-main">
				<CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
					<section className="page-main-inner">
						<Switch location={location}>
							<Route path="/" exact component={HomePage}/>
							<Route path="/bic" component={BicPage}/>
							<Route path="/skechers" component={SkechersPage}/>
							<Route path="/kosili" component={KosiliPage}/>
							<Route path="/dobra" component={DobraOvsenaKasaPage}/>
							<Route path="/zvonko-bogdan" component={ZvonkoBogdan}/>
							<Route path="/europetrol" component={EuroPetrolPage}/>
							<Route path="/ametek" component={AmetekPage}/>
							<Route path="/swarovski" component={SwarovskiPage}/>
							<Route path="/boss" component={BossPage}/>
							<Route path="/o-nama" component={ONamaPage}/>
							<Route path="/usluge" component={UslugePage}/>
							<Route path="/kontakt" component={KontaktPage}/>
                            <Route path="/arhiva" component={ArhivaPage}/>
							<Route path="/en" component={HomeEnglishPage}/>
							<Route path="/en-bic" component={BicEnglishPage}/>
							<Route path="/en-skechers" component={SkechersEnglishPage}/>
							<Route path="/en-kosili" component={KosiliEnglishPage}/>
							<Route path="/en-dobra" component={DobraOvsenaKasaEnglishPage}/>
							<Route path="/en-zvonko-bogdan" component={ZvonkoBogdanEnglishPage}/>
							<Route path="/en-europetrol" component={EuroPetrolEnglishPage}/>
							<Route path="/en-ametek" component={AmetekEnglishPage}/>
							<Route path="/en-swarovski" component={SwarowskiEnglishPage}/>
							<Route path="/en-boss" component={BossEnglishPage}/>
							<Route path="/en-o-nama" component={ONamaEnglishPage}/>
							<Route path="/en-usluge" component={UslugeEnglishPage}/>
							<Route path="/en-kontakt" component={KontaktEnglishPage}/>
							<Route path="/en-arhiva" component={ArhivaEnglishPage}/>
							<Route component={NotFoundPage}/>
						</Switch>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</Layout>
	)
};

export default withRouter(App);