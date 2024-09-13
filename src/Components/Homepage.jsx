import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import './Homepage.css'
import React, { useState, useEffect } from 'react';

const Homepage = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeout;

        const toggleVisibility = () => {
            setIsVisible((prevIsVisible) => !prevIsVisible);

            // Set timeouts for appearing and disappearing
            const delay = isVisible ? 4000 : 2000; // 2 seconds for visible, 1 second for hidden
            timeout = setTimeout(toggleVisibility, delay);
        };

        // Start the first toggle
        timeout = setTimeout(toggleVisibility, 2000); // Initial delay before first toggle

        // Clean up timeout when component unmounts
        return () => clearTimeout(timeout);
    }, [isVisible]);

    return (
        <div className='home'>
            <div className='row homepage'>
                {isVisible && <h1 className={`fade-text ${isVisible ? 'visible' : 'hidden'}`}> YOUR ON-DEMAND GLAM </h1>} < br />
                {isVisible && <h1 className={`fade-text ${isVisible ? 'visible' : 'hidden'}`} > EXPERIENCE IS HERE </h1>}
                {/* <h1 style={{ textAlign: "center", fontSize: "100px", fontWeight: 700 }}>YOUR ON-DEMAND GLAM </h1>< br />
                <h1 style={{ textAlign: "center", fontSize: "100px", fontWeight: 700 }}> EXPERIENCE IS HERE </h1> */}
            </div>
            <div className='row d-flex fixed-bottom' style={{ alignItems: "flex-end" }}>
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
        </div>
    );
}
export default Homepage;