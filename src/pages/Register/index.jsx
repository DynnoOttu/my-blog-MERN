import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
       <img src={RegisterBg} alt="Background Register" className="bg-image"/>
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Input your full name"/>
        <Gap height={20}/>
        <Input label="Email" placeholder="Input your email"/>
        <Gap height={20}/>
        <Input label="Password" placeholder="Input your password"/>
        <Gap height={50}/>
        <Button title="Register"/>
        <Link title="Back to login"/>
      </div>
    </div>
  );
};

export default Register;
