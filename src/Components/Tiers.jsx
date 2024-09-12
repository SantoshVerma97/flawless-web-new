import React from "react";
import silver from "../assets/Silver.png";
import gold from "../assets/Gold.png";
import platinum from "../assets/Platinum.png";
import "./Tiers.css";

// const Tiers = () => {
//   return (
//     <div className="container">
//       <div className="row tiers">
//         <h1 style={{ fontSize: "60px", fontWeight: 700, textAlign: "center" }}>
//           {" "}
//           Tier Structure{" "}
//         </h1>
//       </div>
//       <div className="row">
//         <p style={{ fontSize: "20px", fontWeight: 500, textAlign: "center" }}>
//           We offer a clear path to success with our tiered commission structure:
//         </p>
//       </div>
//       <div className="row d-inline">
//         <div className="row d-flex justify-content-center align-items-center ">
//           <img src={silver} alt="" style={{ width: "100px", height: "100px" }} />
//           <p>Tier 1 - Silver: 60% Commission + Gratuity</p>
//         </div>
//       </div>
//       <div className="row d-inline justify-content-center align-items-center">
//         <img src={silver} alt="" style={{ width: "100px", height: "100px" }} />
//         <p>Tier 1 - Silver: 60% Commission + Gratuity</p>
//       </div>
//       <div className="row d-flex justify-content-center align-items-center"></div>

//       <div className="row">
//         <div className="col-2">
//           <img src={gold} alt="" style={{ width: "100px", height: "100px" }} />
//         </div>
//         <div className="col-10">
//           <p style={{ alignItems: "center" }}>
//             Tier 2 - Gold: 65% Commission + Gratuity
//           </p>
//         </div>
//       </div>
//       <div className="row" style={{ alignItems: "center" }}>
//         <div className="col-2">
//           <img
//             src={platinum}
//             alt=""
//             style={{ width: "100px", height: "100px" }}
//           />
//         </div>
//         <div className="col-10">
//           <p style={{}}>Tier 3 - Platinum: 70% Commission + Gratuity</p>
//         </div>
//       </div>
//     </div>
//   );
// };
const Tiers = () => {
    return (
      <div className="container">
        <div className="row tiers">
          <h1 className="w-100 text-center" style={{ fontSize: "60px", fontWeight: 700 }}>
            Tier Structure
          </h1>
        </div>
  
        <div className="row">
          <p className="w-100 text-center" style={{ fontSize: "20px", fontWeight: 500 }}>
            We offer a clear path to success with our tiered commission structure:
          </p>
        </div>
  
        <div className="row justify-content-center w-100" style={{border: '1px solid #FFF', padding:"18px 171px 18px 186px", marginTop:"70px"}}>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={silver} alt="Silver Tier" style={{ width: "100px", height: "100px", marginRight: "15px" }} />
            <p className="mb-0" style={{ fontSize: "20px", fontWeight: 600 }}>Tier 1 - Silver: 60% Commission + Gratuity</p>
          </div>
        </div>
        <div className="row justify-content-center" style={{border: '1px solid #FFF', padding:"18px 171px 18px 186px" , marginTop:"45px"}}>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={gold} alt="Silver Tier" style={{ width: "100px", height: "100px", marginRight: "15px" }} />
            <p className="mb-0" style={{ fontSize: "20px", fontWeight: 600 }}>Tier 2 - Gold: 65% Commission + Gratuity</p>
          </div>
        </div>
        <div className="row justify-content-center" style={{border: '1px solid #FFF', padding:"18px 171px 18px 186px", marginTop:"45px"}}>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={platinum} alt="Silver Tier" style={{ width: "100px", height: "100px", marginRight: "15px" }} />
            <p className="mb-0" style={{ fontSize: "20px", fontWeight: 600 }}>Tier 3 - Platinum: 70% Commission + Gratuity</p>
          </div>
        </div>
        <div className="row" style={{textAlign:"center"}}>
            <p style={{fontSize:"16px", fontWeight:500, marginTop:"64px"}}>
              YOUR TIER WILL BE DETERMINED BY THE QUALITY OF YOUR WORK, SKILLSET, AND CLIENT FEEDBACK, ALLOWING <br /> 
              YOU TO RISE QUICKLY BASED ON YOUR PERFORMANCE.
            </p>
        </div>
      </div>
    );
  };
export default Tiers;
