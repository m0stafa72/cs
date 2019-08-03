import React, { Component } from 'react';

import Request from './../../../../models/api.service';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './slider.css';


class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders : [],
        }
    };
    componentDidMount(){
        Request.get('sliders').then(response => {
            console.log(response);
            this.setState({
                sliders : response.data.sliders
            });
        }).catch(error => {
            console.log(error);
        })
    }
    
    render() {
        const {sliders} = this.state;
        return (
            <Slider autoplay={4000} className="slider-wrapper">
                
			{sliders.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
                        {
                            (item.button === 'null' || item.button === '') ? (
                                ''
                            ) : (
                                <button className="btn btn-base success-light">{item.button}</button>
                            )
                        }
						
					</div>
					
				</div>
			))}
		</Slider>
        );
    }
}

export default Sliders;
