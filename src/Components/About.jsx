import React from "react";
import img1 from '../assets/About1.png'
import "./About.css";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="row about">
        <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center", paddingBottom: "35px" }}>
          About
        </h1>
      </div>
      <div className="row" >
        <p style={{ fontSize: "20px", fontWeight: 500, textAlign: "center", textTransform: "capitalize" }}>
          TF App was designed by industry professionals with a passion for empowering artists. We’ve worked across every <br />
          facet of the beauty industry—from behind the chair to on-stage, backstage, and beyond. Launched in 2017, TF App <br />
          faced delays due to COVID-19 but is now live and ready to bring the on-demand beauty experience to the next level.
        </p>
      </div>
      <div className="row w-100">
        <div className="row justify-content-center w-100" style={{ marginTop: "70px" }}>
          <div className="col-md-12 d-flex justify-content-center align-items-center">

            <img src={img1} alt="About Us" style={{ width: "30%", height: "auto", marginRight: "" }} />
            <div style={{ border: '1px solid #FFF' }}>
              <div className="fade1234">
                <div style={{ padding: "88px 0px" }}>
                  <span className="mb-0" style={{ fontSize: "16px", fontWeight: 500, lineHeight:"30px" }}>
                    <p style={{ fontSize: "20px", fontWeight: 600, textAlign: "center" }}>We are committed to :</p>
                    <ul style={{ padding: "29px 47px 101px 46px", lineHeight: "30px" }}>
                      <li > <span style={{ fontWeight: 700 }}>Professionalism:</span> Setting new standards within the beauty industry. </li>
                      <li> <span style={{ fontWeight: 700 }}>Inclusion and Diversity:</span> Representing all skin tones and hair textures. </li>
                      <li> <span style={{ fontWeight: 700 }}>Financial Opportunities:</span> Offering additional revenue streams for artists. </li>
                      <li> <span style={{ fontWeight: 700 }}>Ongoing Education:</span> Providing continuous learning to keep artists at the top of their game. </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
