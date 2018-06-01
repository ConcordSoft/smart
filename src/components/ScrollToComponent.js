import React, { Component } from 'react';
import scrollToElement from "scroll-to-element";

export default class ScrollToComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentScrollElement: 0,
			scrollDirection: 'arrow_downward'
		};

		this.onDownButtonClick = this.onDownButtonClick.bind(this);
	}

	onDownButtonClick = (e, self) => {
		e.preventDefault();

		scrollToElement(this.props.scrollNodes[this.state.currentScrollElement], {
			offset: 0,
			ease: 'outQuad',
			duration: 1500
		});

		if (this.state.currentScrollElement <= this.props.scrollNodes.length-2) {
			this.setState({
				currentScrollElement: this.state.currentScrollElement + 1
			});
		}
		else if (this.state.currentScrollElement === this.props.scrollNodes.length-1) {
			this.setState({
				scrollDirection: 'arrow_upward',
				currentScrollElement: this.state.currentScrollElement + 1
			});
		} else {
			scrollToElement('body', {
				offset: 0,
				ease: 'outQuad',
				duration: 3500
			});

			this.setState({
				scrollDirection: 'arrow_downward',
				currentScrollElement: 0
			});
		}
	};

	render () {
		return (
			<a href="#"
			   ref="test"
			   className="smart-page-down-button"
			   id="smartPageDownButton"
			   onClick={(e) => this.onDownButtonClick(e, this)}>
				<i className="material-icons">{this.state.scrollDirection}</i>
			</a>
        )
	}
};