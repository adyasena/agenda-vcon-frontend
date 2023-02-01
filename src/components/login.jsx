import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BgHome } from "../assets";
import UserContext from "../helpers/userContext";
import { fetcher } from "../helpers/fetcher";

const Login = () => {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = async () => {
    try {
      const res = await fetcher.post("/auth/signin", {
        username: username,
        password: password,
      });

      if (!res.status) {
        throw new Error(res.error);
      }
      
      const admin = res.data.data.admin;

      setUser({
        id: admin._id,
        username: admin.username,
        role: admin.role,
      });
      
      localStorage.setItem("accessToken", res.data.data.accessToken);

      navigate("/vcon-admin");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60 flex flex-col justify-center">
        <div className="container m-auto rounded-xl bg-white flex flex-col gap-5 items-center w-1/3 h-auto p-12 justify-center font-roboto">
          <div className="flex flex-col justify-start gap-1 w-full">
            <p>Username</p>
            <input required onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Enter username" className="py-2 px-5 rounded-full border border-black bg-white focus:outline-blue-light" />
          </div>
          <div className="flex flex-col justify-start gap-1 w-full">
            <p>Password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter password" className="py-2 px-5 rounded-full border border-black bg-white focus:outline-blue-light" />
          </div>
          <div className="lg:mt-5">
            <button onClick={signInHandler} className="bg-blue-light text-white font-normal py-2 px-6 rounded-full transform duration-300 ease hover:bg-blue-primary hover:text-white" >
              Login Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;