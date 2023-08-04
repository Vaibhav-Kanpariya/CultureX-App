import React from "react";
import "../../styles/Home.css";
import FIleUpload from "./components/FIleUpload";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="usr-detail">
        <p>Username</p>
        <button>Log Out</button>
      </div>
      <FIleUpload />
      <h2>Uploaded Files</h2>
      <div className="media-container">3</div>
    </div>
  );
};

export default Home;
