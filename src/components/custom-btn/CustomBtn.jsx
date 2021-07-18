import React from "react";
import "./custom-btn.scss";

const CustomBtn = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className="custom-btn" type={type}>
      {children}
    </button>
  );
};

export default CustomBtn;
