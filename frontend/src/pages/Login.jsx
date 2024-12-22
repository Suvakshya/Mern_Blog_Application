import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="con flex flex-col items-center justify-center h-screen bg-[#070707]">
        <form
          onSubmit={submitForm}
          className="w-[26vw] min-h-[auto] bg-[#0f0e0e] rounded-2xl p-5 flex flex-col items-center"
        >
          <img
            className="-mr-3 w-[240px] h-[100px] object-cover "
            src={logo}
            alt=""
          />
          <div className="w-full">
            <p className="text-[gray] text-[14px] mt-3">Email</p>
            <div className="inputBox">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <p className="text-[gray] text-[14px] mt-3">Password</p>
            <div className="inputBox">
              <input
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <p className="text-[14px] text-[gray] my-3">
              Don't have an account ?{" "}
              <span className="sp-text">
                <Link to="/signUp">Sign Up</Link>
              </span>
            </p>
            <p className="text-[14px] text-red-500 mt-2">{error}</p>
            <button className="btnNormal w-full mt-1 mb-3">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
