import React, { Component } from 'react';

export default class SlideOverlay extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		let bgColorHex = this.props.bgColor;

		let slideOverlayStyle = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '40vh',
			color: 'white',
			opacity: .85,
            padding: '2em',
			paddingLeft: '60px',
			backgroundColor: bgColorHex
		};

		let categoryContainerStyle = {
			display: 'flex',
			marginBottom: '1em'
        };

		let categoryStyle = {
			display: 'block',
			width: 'auto',
			height: '25px',
			fontSize: '11px',
			fontWeight: 'bold',
			padding: '3px 7px',
			margin: '0 5px',
            color: '#fff',
			border: '1px solid #fff'
        };

		let titleStyle = {
			color: '#fff',
			padding: '.8em 1em 1 .2em',
		    fontFamily: 'Avenir-Light',
            fontWeight: 700,
			fontSize: '24px',
			display: 'block',
			width: '100%',
            marginLeft: '.2em'
        };

		let clientStyle = {
			color: '#fff',
			padding: '0 0 0 .4em',
		    fontFamily: 'Avenir-Light',
			display: 'block',
			width: '100%'
        };

		return (
		    <div style={slideOverlayStyle} className="carousel-slider-overlay">
                <div>
                    <div style={categoryContainerStyle} className="slide-overlay-category-container">
	                    {this.props.services.map((category, i) => {
		                    return (
			                    <div style={categoryStyle}
			                         className="slide-overlay-category"
			                         key={'category_'+i}>
				                    {category}
			                    </div>
		                    )
	                    })}
                    </div>
                    <p style={titleStyle} className="slide-overlay-title">
                        {this.props.title}
                    </p>
                </div>
                <p style={clientStyle} className="slide-overlay-client">
	                {this.props.language && this.props.language === 'en'
		                ?
		                <span>client: </span>
		                :
		                <span>klijent: </span>
	                }
	                {this.props.client}
                </p>

			    <p className="description">
				    {this.props.language && this.props.language === 'en'
				    ?
					    <span>MORE ABOUT THE PROJECT</span>
				    :
					    <span>Više</span>
				    }
				    <i className="material-icons">keyboard_arrow_right</i>
			    </p>
            </div>
        )
	}
};