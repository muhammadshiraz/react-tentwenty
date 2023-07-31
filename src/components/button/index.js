import React from "react";
import RightArrow from "../../assets/images/icons/right-arrow.svg";

const Button = () => {
  return (
    <button type="button" className="contact-btn flex flex-row justify-center items-center">Contact us <img src={RightArrow} alt="Contact us" /></button>    
  );
};

export default Button;
