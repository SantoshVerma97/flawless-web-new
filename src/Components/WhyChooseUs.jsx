import React from "react";
import "./WhyChooseUs.css";
import img1 from "../assets/Choose1.png";
import img2 from "../assets/Choose2.png";
const WhyChooseUs = () => {
  return (
    <>
      <div className="row choose">
        <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center" }}>
          Why Choose TF App
        </h1>
      </div>
      <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "400px", marginTop: "90px" }}>
        <div className="row align-items-stretch" style={{ width: '80%' }}>
          <div className="col-auto d-flex align-items-center mx-0 px-0">
            <img
              src={img1}
              alt="Model"
              className="img-fluid"
              style={{}}
            />
          </div>
          <div className="col d-flex flex-column justify-content-between px-0 mx-0 w-100">
            <div style={{ border: "1px solid #FFF" }}>
              <div className="fade1">
                <div style={{ padding: "33px 52px" }}>
                  <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 900 }}>We Understand Artists:</p>
                  <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 500 }}>
                    Founded by artists, for artists, we know what you need <br />
                    to thrive. From marketing to financial incentive, we’re here to <br />
                    help you grow
                  </p>
                </div>

              </div>
            </div>
            <div style={{ border: "1px solid #FFF", padding: "48px 93px" }}>
              <div className="fade1">
                <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 900 }}>Competitive Commissions:</p>
                <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 500 }}>
                  We offer the highest commissions in the industry, <br />
                  starting at 60%, plus gratuity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "400px", marginTop: "100px" }}>
        <div className="row align-items-stretch" style={{ width: '80%' }}>
          <div className="col d-flex flex-column justify-content-between mx-0 px-0 w-100">
            <div style={{ border: "1px solid #FFF", padding: "33px 52px" }}>
              <div className="fade1">
                <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 900, zIndex: 1 }}>We Understand Artists:</p>
                <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 500, zIndex: 1 }}>
                  Founded by artists, for artists, we know what you need <br />
                  to thrive. From marketing to financial incentive, we’re here to <br />
                  help you grow
                </p>
              </div>

            </div>
            <div style={{ border: "1px solid #FFF", padding: "48px 55px" }}>
              <div className="fade1">
                <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 900 }}>Competitive Commissions:</p>
                <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 500 }}>
                  We offer the highest commissions in the industry, <br />
                  starting at 60%, plus gratuity
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center mx-0 px-0">
            <img src={img2} alt="Placeholder" className="img-fluid" style={{}} />
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
