import React from "react";
import "../../../styles/Home.css";
const FIleUpload = () => {
  return (
    <div className="upload-files">
      <h2>Upload Your Files (images or videos)</h2>
      <input type="file" />
      <button>Upload</button>
    </div>
  );
};

export default FIleUpload;
