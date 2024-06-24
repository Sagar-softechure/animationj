import React from "react";
import gsap from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

<<<<<<< HEAD
    return(
        <>  
        <section style={{height:"100vh"}}>
            <span className="sub-head">Split Text </span>
            <h1>
                Home
            </h1>
        </section>
        </>
    );
=======
gsap.registerPlugin(ScrollSmoother,ScrollTrigger);
const Home = () => {
>>>>>>> e2ba756260fc3a264e81a2eefecd3a3112d7a54b

   
      
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
