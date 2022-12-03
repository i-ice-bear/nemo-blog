import React from "react";
import aboutstyle from "./scss/About.module.scss";
import { FaArrowRight } from "react-icons/fa";
const AboutComponent = () => {
  return (
    <>
      <div className="main-header">
        {/***** first container starts from header **** */}
        <div className="header-container" id={aboutstyle.headercontainer}>
          <img src="/image/bg.jpg" className={aboutstyle.backgroundimg} />
          <div className="content">
            <div className="wrappers" id={aboutstyle.headerContainerContent}>
              <h1 className={aboutstyle.headerHeading}>
                We offer lot's of blogs for you. For free and for everyone
              </h1>
              <p className="w-50 text-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                eius ex aspernatur inventore minima illo accusantium natus
                magnam repellat, ipsum velit rem facilis, eos nisi sapiente
                perspiciatis? Nostrum, omnis aspernatur.
              </p>
              <button className={aboutstyle.headerbtn}>Know more</button>
              <span className="mx-3">
                <button className={aboutstyle.headerbtn}>Subscribe to our newsteller</button>
              </span>
            </div>
            <div className="state" id={aboutstyle.fadeImg}>
            </div>
          </div>
        </div>
        {/******** first container ends from here and it done  *******/}
      </div>
    </>
  );
};

export default AboutComponent;
