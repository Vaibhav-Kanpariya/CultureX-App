import React from "react";
import "../../styles/Landing.css";
const Landing = () => {
  return (
    <div className="container">
      <div>
        <img src="./assets/background_img.png" alt="bg-img" />
      </div>
      <div>
        <h1>Welcome to My Snap</h1>
        <button className="login-btn">Get Started With Google</button>
      </div>
    </div>
  );
};

export default Landing;
