import React, { useState } from "react";
import "../../styles/Home.css";
import FIleUpload from "./components/FIleUpload";
import axios from "axios";
import { useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
const Home = (props) => {
  const [data, setData] = useState([]);
  const LogOut = () => {
    window.open("https://my-snap.onrender.com/auth/logout", "_self");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://my-snap.onrender.com/media/files/${props.user.email}`
      );
      setData(response.data);
    } catch (err) {
      console.error("Error occured: ", err);
    }
  };
  const renderFiles = () => {
    return data.map((item) => {
      if (item.type.startsWith("image")) {
        return (
          <div key={item._id}>
            <div>
              <img
                src={`https://my-snap.onrender.com/media/${item.fileName}`}
                alt={item.fileName}
                className="media-image"
              />
            </div>
          </div>
        );
      } else if (item.type.startsWith("video")) {
        return (
          <div key={item._id}>
            <VideoPlayer videoName={item.fileName} />
          </div>
        );
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <div className="usr-detail">
        <p>{props.user.displayName}</p>
        <button onClick={LogOut}>Log Out</button>
      </div>
      <FIleUpload user={props.user} fetchData={fetchData} />
      <h2>Uploaded Files</h2>
      <div className="media-container">{renderFiles()}</div>
    </div>
  );
};

export default Home;
