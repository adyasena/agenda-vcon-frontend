import React, { useEffect, useState } from "react";
import BgHome from "../assets/home.jpg";

const Login = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60 flex flex-col justify-center">
        <div className="container m-auto rounded-xl bg-white flex flex-col gap-5 items-center w-1/3 h-auto p-12 justify-center font-roboto">
          <div className="flex flex-col justify-start gap-1 w-full">
            <p>Username</p>
            <input type="text" placeholder="Enter username" className="py-2 px-5 rounded-full border border-black bg-white focus:outline-blue-light" />
          </div>
          <div className="flex flex-col justify-start gap-1 w-full">
            <p>Password</p>
            <input type="text" placeholder="Enter password" className="py-2 px-5 rounded-full border border-black bg-white focus:outline-blue-light" />
          </div>
          <div className="lg:mt-5">
            <button className="bg-blue-light text-white font-normal py-2 px-6 rounded-full transform duration-300 ease hover:bg-blue-primary hover:text-white" >
              Login Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;