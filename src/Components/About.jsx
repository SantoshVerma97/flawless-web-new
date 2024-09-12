import React from "react";
import img1 from '../assets/About1.png'
import "./About.css";
const AboutUs = () => {
  return (
    <div>
      <div className="row about">
        <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center", paddingBottom:"35px" }}>
          About
        </h1>
      </div>
      <div className="row" >
        <p style={{ fontSize: "16px", fontWeight: 500, textAlign: "center", textTransform:"capitalize" }}>
           TF App was designed by industry professionals with a passion for empowering artists. We’ve worked across every <br />
           facet of the beauty industry—from behind the chair to on-stage, backstage, and beyond. Launched in 2017, TF App <br />
           faced delays due to COVID-19 but is now live and ready to bring the on-demand beauty experience to the next level.
        </p>
      </div>
      <div className="row w-100">
      <div className="row justify-content-center w-100" style={{border: '1px solid #FFF', marginTop:"70px"}}>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={img1} alt="About Us" style={{ width: "30%", height: "auto", marginRight: "" }} />
            <span className="mb-0" style={{ fontSize: "20px", fontWeight: 600}}>
                <p style={{ fontSize: "20px", fontWeight: 600, textAlign:"center" }}>We are committed to :</p>
                <ul style={{padding:"29px 47px 101px 46px", lineHeight:"30px"}}>
                    <li> Professionalism: Setting new standards within the beauty industry. </li>
                    <li> Inclusion and Diversity: Representing all skin tones and hair textures. </li>
                    <li> Financial Opportunities: Offering additional revenue streams for artists. </li>
                    <li> Ongoing Education: Providing continuous learning to keep artists at the top of their game. </li>
                </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
