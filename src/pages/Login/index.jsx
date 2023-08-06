import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Background Login" className="bg-image"/>
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Input your email"/>
        <Gap height={20}/>
        <Input label="Password" placeholder="Input your password"/>
        <Gap height={50}/>
        <Button title="Login"/>
        <Link title="Back to login" />
      </div>
    </div>
  );
};

export default Login;
