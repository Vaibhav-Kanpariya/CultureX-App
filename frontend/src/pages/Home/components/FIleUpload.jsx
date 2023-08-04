import React, { useState } from "react";
import "../../../styles/Home.css";
import axios from "axios";
const FIleUpload = (props) => {
  const user = props.user;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const checkFile = (file) => {
    if (file.type.includes("image") || file.type.includes("video")) {
      return true;
    } else return false;
  };

  const handleUpload = () => {
    try {
      const formData = new FormData();
      if (checkFile(file)) {
        formData.append("file", file);
        formData.append("user", user.email);
        axios
          .post("https://my-snap.onrender.com/media/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            // .post("http://localhost:8000/media/upload", formData, {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
          })
          .then((res) => {
            console.log("Upload successful: ", res);
            props.fetchData();
          })
          .catch((err) => {
            console.log("Upload failed: ", err);
            setError(err.response.data.message);
          });
      } else {
        setError(
          `please upload file type of image and video ,${file.type} is not allowed`
        );
      }
    } catch (err) {
      console.log(err);
      setError(err.data.error);
    }
  };
  return (
    <div className="upload-files">
      <h2>Upload Your Files (images or videos)</h2>
      {error && <p>{error}</p>}
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FIleUpload;
