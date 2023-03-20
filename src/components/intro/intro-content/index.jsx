import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";

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
                            <span className="text">, I Am Parag Naik </span>
                        </span>
                        <span className="big-text">Java Developer</span>
                    </h1>
                    <p>
                        Awarded for my impeccable team management and project
                        planning skills demonstrated while delivering a
                        high-quality product given the stringent time
                        constraint. It also recognizes my adaptability, as it
                        requires me to travel to Australia for its
                        implementation and delivery.
                    </p>
                </div>
                <div className="right-col"></div>
            </div>
        </div>
    );
};

export default Introcontent;
