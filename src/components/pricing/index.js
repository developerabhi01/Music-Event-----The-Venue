import React, { Component } from 'react';
import MyButton from "../utilis/MyButton";
import Zoom from "react-reveal/Zoom";



class Pricing extends Component {

    state = {
        prices : [100,150,200],
        position : ["Balcony","Medium","Star"],
        description : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        ],
        linkto : ["#","#","#"],
        delay : [700,0,700]
    }

    showBoxes = () => (
        this.state.prices.map( (box,i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.description[i]} 
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bgColor="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
           </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;