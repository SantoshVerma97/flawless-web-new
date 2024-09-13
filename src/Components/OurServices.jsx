import React from "react";
import "./OurServices.css";
import img1 from "../assets/Service1.png";
import img2 from "../assets/Service2.png";
import img3 from "../assets/Service3.png";

const OurServices = () => {
    return (
        <>
            <div className="row services">
                <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center" }}>
                    Our Services
                </h1>
            </div>

            <div className="row  w-100" style={{ marginTop: "50px" }}>
                <div className="d-flex justify-content-center">
                    <div className=" d-flex justify-content-center align-items-center">
                        <img src={img1} alt="hahaha" />
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <div style={{ border: "1px solid #FFF" }}>
                            <div className="bgfade">
                            <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 600, padding: "75px 70px" }}>  
                                Hair and makeup artists are the unsung heroes of the beauty industry, <br />
                                using their skills to not only transform clients' looks but also boost <br />
                                their confidence and self-expression. These professionals become <br />
                                trusted partners in their clients' lives, creating beauty beyond <br />
                                aesthetics.
                            </p> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="row  w-100" style={{ marginTop: "82px" }}>
                <div className="d-flex justify-content-center">
                    <div className=" d-flex justify-content-center align-items-center">
                        <div style={{ border: "1px solid #FFF" }}>
                        <div className="bgfade">
                        <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 600, padding: "75px 70px" }}>
                                However, in today’s world, beauty influencers earn significantly more <br />
                                through sponsorships, collaborations, and product lines, despite many <br />
                                working only on themselves. In contrast, our hair and makeup artists work <br />
                                daily with a diverse range of clients across ethnicities, skin tones, and hair <br />
                                textures—the true creators of beauty trends.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <img src={img2} alt="hahaha" />
                    </div>
                </div>
            </div>

            <div className="row  w-100" style={{ marginTop: "82px" }}>
                <div className="d-flex justify-content-center">
                    <div className=" d-flex justify-content-center align-items-center">
                        <img src={img3} alt="hahaha" />
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <div style={{ border: "1px solid #FFF" }}>
                        <div className="bgfade"> 
                        <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 600, padding: "75px 70px" }}>
                                TF App is here to recognize and reward the real beauty influencers—our <br />
                                artists. We believe their compensation and access to health initiatives <br />
                                should reflect their pivotal role in shaping the industry.<br />
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OurServices;
