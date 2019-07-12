import React, { Component } from 'react';

// import SiteApi from './../../../../models/api.service.js';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './slider.css';


class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : [
                {
                    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    button: 'Read More',
                    image: 'https://picsum.photos/id/16/1440/600',
                    
                },
                {
                    title: 'Tortor Dapibus Commodo Aenean Quam',
                    description:
                    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                    button: 'Discover',
                    image: 'https://picsum.photos/id/76/1440/600',
                    
                },
                {
                    title: 'Phasellus volutpat metus',
                    description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
                    button: 'Buy now',
                    image: 'https://picsum.photos/id/41/1440/600',
                    
                }
            ]
        }
    };
    componentDidMount(){
        // SiteApi.get('heloo').then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error);
        // })
    }
    
    render() {
        const {content} = this.state;
        return (
            <Slider autoplay={4000} className="slider-wrapper">
                
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="btn btn-base success-light">{item.button}</button>
					</div>
					
				</div>
			))}
		</Slider>
        );
    }
}

export default Sliders;
