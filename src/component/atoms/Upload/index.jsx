import React from "react";
import "./upload.scss";
import { LoginBg } from "../../../assets";

function Upload() {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="Preview" />
      <input type="file" />
    </div>
  );
}

export default Upload;
