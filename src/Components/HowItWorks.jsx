import React from 'react'
import './HowItWorks.css'
import img1 from '../assets/HIW1.png'

const HowItWorks = () => {
    return (
        <div className='row Working'>
            <div className="row works">
                <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center" }}> How It Works </h1>
            </div>
            <div className="row">
                <p style={{ fontSize: "24px", fontWeight: 500, textAlign: "center", paddingTop: "34px" }}> We are a mobile, on-demand hair and makeup platform, seamlessly connecting clients with expert artists across the country.
                    Think of us as the premium beauty service marketplace.
                </p>
            </div>
            {/* <div className="row d-flex" style={{alignItems:"center", paddingTop:"80px"}} >
                <div className="col">
                    <img src={img1} alt="working" style={{width:"70%", height:"auto"}}/>
                </div>
                <div className="col d-flex" style={{alignItems:"center"}}>
                    <div>
                    <p style={{ fontSize:"28px", fontWeight:800 }}>To join TF App as an artist:</p>
                    <span>
                        <ul style={{ fontSize:"24px", fontWeight:500 }}>
                            <li>Complete your profile with requested information.</li>
                            <li>List your professional tools and product kit.</li>
                            <li>Upload photos of your best work.</li>
                            <li>Provide a demo video showcasing your skills.</li>
                            <li> Wait for our team to conduct a background check and skill review.</li>
                        </ul>
                    </span>
                    </div>
                    
                </div>
            </div> */}
            <div className="row  w-100" style={{ marginTop: "50px" }}>
                <div className="d-flex justify-content-center">
                    <div className=" d-flex justify-content-center align-items-center">
                        <img src={img1} alt="working" />
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <div style={{ border: "1px solid #FFF" }}>
                            <div className="bgfade">
                                <div style={{padding:"37px 65px 38px 74px"}}>
                                <p style={{ fontSize: "20px", fontWeight: 800, textAlign:"center" }}>To join TF App as an artist:</p>
                                <span>
                                    <ul style={{ fontSize: "16px", fontWeight: 500 }}>
                                        <li>Complete your profile with requested information.</li>
                                        <li>List your professional tools and product kit.</li>
                                        <li>Upload photos of your best work.</li>
                                        <li>Provide a demo video showcasing your skills.</li>
                                        <li> Wait for our team to conduct a background check and skill review.</li>
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
}
export default HowItWorks;