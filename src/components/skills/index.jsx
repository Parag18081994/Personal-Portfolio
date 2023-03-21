import React from "react";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,REACT,HTML"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nemo maxime eveniet dignissimos quis consequatur
                        numquam voluptas sunt eos. Nostrum excepturi recusandae
                        sint quod consequuntur mollitia dolore veritatis? Natus,
                        deserunt blanditiis?
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={AiOutlineCloudDownload}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
