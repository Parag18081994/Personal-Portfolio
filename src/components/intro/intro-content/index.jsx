import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import girl from "../../../images/girl.png"
import { BsAwardFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa";

const Introcontent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">JS Dev Hindi</span>
                    </h1>
                    <p>
                        Awarded for my impeccable team management and project
                        planning skills demonstrated while delivering a
                        high-quality product given the stringent time
                        constraint. It also recognizes my adaptability, as it
                        requires me to travel to Australia for its
                        implementation and delivery.
                    </p>
                    <CallToAction text="Contact me"/>
                </div>
                <div className="right-col">
                    <img src={girl} alt="Parag Java" />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill/>
                        </div>
                        <div className="text">Summit Award</div>
                    </div>
                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser/>
                        </div>
                        <div className="text">
                            <span>4K+</span>
                            Happy customer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introcontent;
