import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';
import '../style/Slider.scss';
import HyundaiKonaOne from '../images/Hyundai_Kona_Electric-01.png';
import HyundaiKonaTwo from '../images/Hyundai_Kona_Electric-02.png';

const items = [
	{
		src: HyundaiKonaOne,
		altText: 'Slide 1',
		caption: ''
	},
	{
		src: HyundaiKonaTwo,
		altText: 'Slide 2',
		caption: ''
	}
];

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
				</CarouselItem>
			);
		});

		return (
			<Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			</Carousel>
		);
	}
}

export default Slider;
