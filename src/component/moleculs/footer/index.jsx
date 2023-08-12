import React from "react";
import "./footer.scss";
import { Facebook, Instagram, Logo, Twitter } from "../../../assets";


const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="Icon" />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="social-wrapper">
            <Icon img={Facebook}/>
            <Icon img={Instagram}/>
            <Icon img={Twitter}/>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
