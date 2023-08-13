import React from "react";
import "./textArea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div className="">
      <textarea
        className="text-area"
        name=""
        id=""
        cols="30"
        rows="10"
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextArea;
