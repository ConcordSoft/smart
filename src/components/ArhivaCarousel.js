import React, { Component } from "react";
import Slider from "react-slick";
import $ from 'jquery';
import Lightbox from 'lightbox-react';

const imagesSubotica = [
    'img/grad01.jpg',
    'img/grad02.jpg',
    'img/grad03.jpg',
    'img/grad04.jpg',
    'img/grad05.jpg',
];
const imagesPalic = [
    'img/park_palic_map.jpg',
    'img/pp01.jpg',
    'img/pplogo.jpg',
];
const imagesSart = [
    'img/flajer.jpg',
    'img/izvestaj.jpg',
];
const imagesMlekara = [
    'img/mlekara02.jpg',
    'img/mlekara03.jpg',
    'img/mlekara04.jpg',
    'img/mlekara05.jpg',
    'img/mlekara06.jpg',
    'img/mlekara07.jpg',
    'img/mlekara08.jpg',
    'img/smart1.jpg',
];
const imagesDirekcija = [
    'img/jpdirekcija01.jpg',
];
const imagesEtp = [
    'img/ptp01.jpg',
    'img/ptp02.jpg',
    'img/smart3.jpg',
];

export default class SimpleSlider extends Component {

    componentDidMount() {
        $('img.subotica').on('click', function() {
            $('div.subotica').toggleClass('opened');
            $('div.sart').removeClass('opened');
            $('div.palic').removeClass('opened');
            $('div.mlekara').removeClass('opened');
            $('div.direkcija').removeClass('opened');
            $('div.etp').removeClass('opened');
        });
        $('img.palic').on('click', function() {
            $('div.palic').toggleClass('opened');
            $('div.subotica').removeClass('opened');
            $('div.sart').removeClass('opened');
            $('div.mlekara').removeClass('opened');
            $('div.direkcija').removeClass('opened');
            $('div.etp').removeClass('opened');
        });
        $('img.sart').on('click', function() {
            $('div.sart').toggleClass('opened');
            $('div.subotica').removeClass('opened');
            $('div.palic').removeClass('opened');
            $('div.mlekara').removeClass('opened');
            $('div.direkcija').removeClass('opened');
            $('div.etp').removeClass('opened');
        });
        $('img.mlekara').on('click', function() {
            $('div.mlekara').toggleClass('opened');
            $('div.subotica').removeClass('opened');
            $('div.palic').removeClass('opened');
            $('div.direkcija').removeClass('opened');
            $('div.sart').removeClass('opened');
            $('div.etp').removeClass('opened');
        });
        $('img.direkcija').on('click', function() {
            $('div.direkcija').toggleClass('opened');
            $('div.subotica').removeClass('opened');
            $('div.palic').removeClass('opened');
            $('div.mlekara').removeClass('opened');
            $('div.sart').removeClass('opened');
            $('div.etp').removeClass('opened');
        });
        $('img.etp').on('click', function() {
            $('div.etp').toggleClass('opened');
            $('div.subotica').removeClass('opened');
            $('div.palic').removeClass('opened');
            $('div.direkcija').removeClass('opened');
            $('div.sart').removeClass('opened');
            $('div.mlekara').removeClass('opened');
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            suboticaPhotoIndex: 0,
            palicPhotoIndex: 0,
            sartPhotoIndex: 0,
            mlekaraPhotoIndex: 0,
            direkcijaPhotoIndex: 0,
            etpPhotoIndex: 0,
            suboticaIsOpen: false,
            palicIsOpen: false,
            sartIsOpen: false,
            mlekaraIsOpen: false,
            direkcijaIsOpen: false,
            etpIsOpen: false,
        };
    }

    render() {
        const {
            suboticaPhotoIndex,
            palicPhotoIndex,
            sartPhotoIndex,
            mlekaraPhotoIndex,
            direkcijaPhotoIndex,
            etpPhotoIndex,
            suboticaIsOpen,
            palicIsOpen,
            sartIsOpen,
            mlekaraIsOpen,
            direkcijaIsOpen,
            etpIsOpen,
        } = this.state;
        
        const settings = {
            arrows: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };

        return (
            <div className="slick-wrapper">
                <Slider {...settings}>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide subotica" src="img/Subotica.png" alt=""/>
                    </div>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide palic" src="img/Park_Palic.png" alt=""/>
                    </div>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide sart" src="img/SART.png" alt=""/>
                    </div>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide mlekara" src="img/Mlekara.png" alt=""/>
                    </div>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide direkcija" src="img/Zgrada.png" alt=""/>
                    </div>
                    <div className="single-slick-wrapper">
                        <img className="single-slick-image-slide etp" src="img/Etp.png" alt=""/>
                    </div>
                </Slider>

                {suboticaIsOpen &&
                    <Lightbox
                        mainSrc={imagesSubotica[suboticaPhotoIndex]}
                        nextSrc={imagesSubotica[(suboticaPhotoIndex + 1) % imagesSubotica.length]}
                        prevSrc={imagesSubotica[(suboticaPhotoIndex + imagesSubotica.length - 1) % imagesSubotica.length]}
 
                        onCloseRequest={() => this.setState({ suboticaIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            suboticaPhotoIndex: (suboticaPhotoIndex + imagesSubotica.length - 1) % imagesSubotica.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            suboticaPhotoIndex: (suboticaPhotoIndex + 1) % imagesSubotica.length,
                        })}
                    />
                }
                {palicIsOpen &&
                    <Lightbox
                        mainSrc={imagesPalic[palicPhotoIndex]}
                        nextSrc={imagesPalic[(palicPhotoIndex + 1) % imagesPalic.length]}
                        prevSrc={imagesPalic[(palicPhotoIndex + imagesPalic.length - 1) % imagesPalic.length]}
 
                        onCloseRequest={() => this.setState({ palicIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            palicPhotoIndex: (palicPhotoIndex + imagesPalic.length - 1) % imagesPalic.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            palicPhotoIndex: (palicPhotoIndex + 1) % imagesPalic.length,
                        })}
                    />
                }
                {sartIsOpen &&
                    <Lightbox
                        mainSrc={imagesSart[sartPhotoIndex]}
                        nextSrc={imagesSart[(sartPhotoIndex + 1) % imagesSart.length]}
                        prevSrc={imagesSart[(sartPhotoIndex + imagesSart.length - 1) % imagesSart.length]}
 
                        onCloseRequest={() => this.setState({ sartIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            sartPhotoIndex: (sartPhotoIndex + imagesSart.length - 1) % imagesSart.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            sartPhotoIndex: (sartPhotoIndex + 1) % imagesSart.length,
                        })}
                    />
                }
                {mlekaraIsOpen &&
                    <Lightbox
                        mainSrc={imagesMlekara[mlekaraPhotoIndex]}
                        nextSrc={imagesMlekara[(mlekaraPhotoIndex + 1) % imagesMlekara.length]}
                        prevSrc={imagesMlekara[(mlekaraPhotoIndex + imagesMlekara.length - 1) % imagesMlekara.length]}
 
                        onCloseRequest={() => this.setState({ mlekaraIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            mlekaraPhotoIndex: (mlekaraPhotoIndex + imagesMlekara.length - 1) % imagesMlekara.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            mlekaraPhotoIndex: (mlekaraPhotoIndex + 1) % imagesMlekara.length,
                        })}
                    />
                }
                {direkcijaIsOpen &&
                    <Lightbox
                        mainSrc={imagesDirekcija[direkcijaPhotoIndex]}
                        nextSrc={imagesDirekcija[(direkcijaPhotoIndex + 1) % imagesDirekcija.length]}
                        prevSrc={imagesDirekcija[(direkcijaPhotoIndex + imagesDirekcija.length - 1) % imagesDirekcija.length]}
 
                        onCloseRequest={() => this.setState({ direkcijaIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            direkcijaPhotoIndex: (direkcijaPhotoIndex + imagesDirekcija.length - 1) % imagesDirekcija.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            direkcijaPhotoIndex: (direkcijaPhotoIndex + 1) % imagesDirekcija.length,
                        })}
                    />
                }
                {etpIsOpen &&
                    <Lightbox
                        mainSrc={imagesEtp[etpPhotoIndex]}
                        nextSrc={imagesEtp[(etpPhotoIndex + 1) % imagesEtp.length]}
                        prevSrc={imagesEtp[(etpPhotoIndex + imagesEtp.length - 1) % imagesEtp.length]}
 
                        onCloseRequest={() => this.setState({ etpIsOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            etpPhotoIndex: (etpPhotoIndex + imagesEtp.length - 1) % imagesEtp.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            etpPhotoIndex: (etpPhotoIndex + 1) % imagesEtp.length,
                        })}
                    />
                }

                <section id="2_section">
                    <div className="project-section">
                        <div id="row" className="row subotica">
                            <div className="single-project">
                                <img onClick={() => this.setState({ suboticaIsOpen: true, suboticaPhotoIndex: 0 })}  src="img/grad01.jpg" alt="subotica image 1"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ suboticaIsOpen: true, suboticaPhotoIndex: 1 })} src="img/grad02.jpg" alt="subotica image 2"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ suboticaIsOpen: true, suboticaPhotoIndex: 2 })} src="img/grad03.jpg" alt="subotica image 3"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ suboticaIsOpen: true, suboticaPhotoIndex: 3 })} src="img/grad04.jpg" alt="subotica image 4"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ suboticaIsOpen: true, suboticaPhotoIndex: 4 })} src="img/grad05.jpg" alt="subotica image 5"/>
                            </div>
                        </div>
                        <div id="row" className="row palic">
                            <div className="single-project">
                                <img onClick={() => this.setState({ palicIsOpen: true, palicPhotoIndex: 0 })} src="img/park_palic_map.jpg" alt="palic image 1"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ palicIsOpen: true, palicPhotoIndex: 1 })} src="img/pp01.jpg" alt="palic image 2"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ palicIsOpen: true, palicPhotoIndex: 2 })} src="img/pplogo.jpg" alt="palic image 3"/>
                            </div>
                        </div>
                        <div id="row" className="row sart">
                            <div className="single-project">
                                <img onClick={() => this.setState({ sartIsOpen: true, sartPhotoIndex: 0 })} src="img/flajer.jpg" alt="sart image 1"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ sartIsOpen: true, sartPhotoIndex: 1 })} src="img/izvestaj.jpg" alt="sart image 2"/>
                            </div>
                        </div>
                        <div id="row" className="row mlekara">
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 0 })} src="img/mlekara02.jpg" alt="mlekara image 1"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 1 })} src="img/mlekara03.jpg" alt="mlekara image 2"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 2 })} src="img/mlekara04.jpg" alt="mlekara image 3"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 3 })} src="img/mlekara05.jpg" alt="mlekara image 4"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 4 })} src="img/mlekara06.jpg" alt="mlekara image 5"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 5 })} src="img/mlekara07.jpg" alt="mlekara image 6"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 6 })} src="img/mlekara08.jpg" alt="mlekara image 7"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ mlekaraIsOpen: true, mlekaraPhotoIndex: 7 })} src="img/smart1.jpg" alt="mlekara image 8"/>
                            </div>
                        </div>
                        <div id="row" className="row direkcija">
                            <div className="single-project">
                                <img onClick={() => this.setState({ direkcijaIsOpen: true, direkcijaPhotoIndex: 0 })} src="img/jpdirekcija01.jpg" alt="direkcija image 1"/>
                            </div>
                        </div>
                        <div id="row" className="row etp">
                            <div className="single-project">
                                <img onClick={() => this.setState({ etpIsOpen: true, etpPhotoIndex: 0 })} src="img/ptp01.jpg" alt="etp image 1"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ etpIsOpen: true, etpPhotoIndex: 1 })} src="img/ptp02.jpg" alt="etp image 2"/>
                            </div>
                            <div className="single-project">
                                <img onClick={() => this.setState({ etpIsOpen: true, etpPhotoIndex: 2 })} src="img/smart3.jpg" alt="etp image 3"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}