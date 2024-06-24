import React from "react";
import gsap from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother,ScrollTrigger);
const Home = () => {

   
      
  return (
    <>
      {/* <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="component"> */}
            <section className="banner-section">
              <div className="back-img"></div>
              <div className="front-image">
                <h1 className="banner-text">Sagar johari</h1>
              </div>
            </section>
          {/* </div>
        </div>
      </div> */}
    </>
  );
};
export default Home;
