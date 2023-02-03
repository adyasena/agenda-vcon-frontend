import React from "react";
import { useNavigate } from "react-router-dom";
import { Close } from "../assets";

const ModalContact = ({ visible, onClose }) => {
  let navigate = useNavigate(); 
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className="w-[30%] mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            Hubungi Kami
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-grey ease transition-all duration-300" />
            </button>
          </div>
          <div className="flex flex-col gap-4 text-white justify-center items-center mb-2">
            <a className="flex flex-row justify-center items-center w-3/4 gap-4 py-2 px-4 rounded-md bg-[#4267B2] hover:bg-[#35538f] ease transition-all duration-300" href="https://www.facebook.com/dinkominfopwr">
              <img src="https://img.icons8.com/ios-filled/32/ffffff/facebook--v1.png" alt="facebook"/>
              <div className="w-3/5 text-center">dinkominfopwr</div>
            </a>
            <a className="flex flex-row justify-center items-center w-3/4 gap-4 py-2 px-4 rounded-md bg-[#00acee] hover:bg-[#0296cf] ease transition-all duration-300" href="https://twitter.com/dinkominfopwr">
              <img src="https://img.icons8.com/ios-filled/32/ffffff/twitter-squared.png" alt="twitter"/>
              <div className="w-3/5 text-center">dinkominfopwr</div>
            </a>
            <a className="flex flex-row justify-center items-center w-3/4 gap-4 py-2 px-4 rounded-md bg-[#d6295a] hover:bg-[#ba234e] ease transition-all duration-300" href="https://www.instagram.com/kominfo_purworejo/">
              <img src="https://img.icons8.com/ios-glyphs/32/ffffff/instagram-new.png" alt="instagram"/>
              <div className="w-3/5 text-center">kominfo_purworejo</div>
            </a>
            <a className="flex flex-row justify-center items-center w-3/4 gap-4 py-2 px-4 rounded-md bg-black hover:bg-[#000000] ease transition-all duration-300" href="https://www.tiktok.com/@kominfo_purworejo">
              <img src="https://img.icons8.com/ios-glyphs/32/ffffff/tiktok.png" alt="tiktok"/>
              <div className="w-3/5 text-center">kominfo_purworejo</div>
            </a>
            {/* <a className="flex flex-row justify-center items-center w-full gap-4 py-2 px-4 rounded-md bg-[#e62727] hover:bg-[#c41f1f] ease transition-all duration-300" href="mailto:dinkominfo@purworejokab.go.id">
              <img src="https://img.icons8.com/ios-filled/32/ffffff/apple-mail.png" alt="email"/>
              <div className="w-3/4 text-center">dinkominfo@purworejokab.go.id</div>
            </a> */}
            <a className="flex flex-row justify-center items-center w-3/4 gap-4 py-2 px-4 rounded-md bg-[#4fce5e] hover:bg-[#40ad4d] ease transition-all duration-300">
              <img src="https://img.icons8.com/ios-filled/32/ffffff/apple-phone.png" alt="telepon"/>
              <div className="w-3/5 text-center">(0275) 321493</div>
            </a>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalContact;