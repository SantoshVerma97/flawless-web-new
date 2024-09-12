import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import './Homepage.css'
import React from 'react'

const Homepage = () => {
    return (
        <>
            <div className='row homepage'>
                <h1 style={{ textAlign: "center", fontSize: "100px", fontWeight: 700 }}>YOUR ON-DEMAND GLAM </h1>< br />
                <h1 style={{ textAlign: "center", fontSize: "100px", fontWeight: 700 }}> EXPERIENCE IS HERE </h1>
            </div>
            <div className='row d-flex' style={{ alignItems: "flex-end" }}>
                <div>
                    <p style={{ textAlign: "center", fontSize: "28px", fontWeight: 500 }}> TF App: Revolutionizing the Beauty Industry </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 500 }} >For More Follow Us On</p>
                    <img src={instagram} alt="instagram" style={{ paddingLeft: "27px" }} />
                    <img src={facebook} alt="facebook" style={{ paddingLeft: "14px" }} />
                    <img src={twitter} alt="twitter" style={{ paddingLeft: "14px" }} />
                </div>
            </div >
        </>
    );
}
export default Homepage;