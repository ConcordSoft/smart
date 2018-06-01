import React, { Component } from 'react';
import scrollToElement from "scroll-to-element";

export default class ClientPageBackButton extends Component {
	constructor(props) {
		super(props);

		this.onBackButtonClick = this.onBackButtonClick.bind(this);
	}

	onBackButtonClick = (currentSlideGroup) => {
		var self = this;
		var parent = this.props.parentThis;

		scrollToElement('body', {
			offset: 0,
			ease: 'outQuad',
			duration: 900
		});

		setTimeout(function() {
			parent.props.history.push({
				pathname: self.props.path ? self.props.path : '/',
				state: { currentSlideGroup: currentSlideGroup }
			});
		}, 1000);
	};

	render () {
		return (
			<button className="smart-page-back-button"
			        onClick={() => this.onBackButtonClick(this.props.currentSlideGroup)}>back</button>
        )
	}
};