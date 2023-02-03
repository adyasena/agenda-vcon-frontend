import React from "react";
import { LogoKominfo } from "../assets";

const Footer = () => {
  return (
      <div className="container mx-auto lg:px-12 w-full flex flex-col items-center absolute bottom-0">
        <div className="bg-black rounded-t-xl w-full h-32 text-white flex flex-col px-5 pt-5 gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col font-semibold">
              Dinas Komunikasi, Informatika, Statistik dan Persandian<br/>
              Kabupaten Purworejo
            </div>
            <div className="flex flex-row h-10 gap-2">
              <a className="p-1 rounded-md bg-[#4267B2] hover:bg-[#35538f] ease transition-all duration-300" href="https://www.facebook.com/dinkominfopwr">
                <img src="https://img.icons8.com/ios-filled/32/ffffff/facebook--v1.png" alt="facebook" className="scale-75"/>
              </a>
              <a className="p-1 rounded-md bg-[#d6295a] hover:bg-[#ba234e] ease transition-all duration-300" href="https://www.instagram.com/kominfo_purworejo/">
                <img src="https://img.icons8.com/ios-glyphs/32/ffffff/instagram-new.png" alt="instagram" className="scale-75"/>
              </a>
              <a className="p-1 rounded-md bg-[#232323] hover:bg-[#1f1f1f] ease transition-all duration-300" href="https://www.tiktok.com/@kominfo_purworejo">
                <img src="https://img.icons8.com/ios-glyphs/32/ffffff/tiktok.png" alt="tiktok" className="scale-75"/>
              </a>
              <a className="p-1 rounded-md bg-[#00acee] hover:bg-[#0296cf] ease transition-all duration-300" href="https://twitter.com/dinkominfopwr">
                <img src="https://img.icons8.com/ios-filled/32/ffffff/twitter-squared.png" alt="twitter" className="scale-75"/>
              </a>
            </div>
          </div>
          <div className="text-sm text-center">
            dinkominfo@purworejokab.go.id<br/>
            Jl. Proklamasi No 2 Purworejo - (0275) 321493  
          </div>
        </div>
      </div>
  )
};

export default Footer;