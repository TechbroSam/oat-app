import React from "react";
import WalletButton from "@/components/ConnectWallet";

function Navbar() {
  return (
    <div
      className="flex bg-[#0D0D0D] py-2 cursor-pointer shadow-[#F2C572]/30
    px-3 md:py-4 md:px-[10%] top-0 justify-between items-center shadow-lg sticky z-50"
    >
      <div className="flex items-center">
        <img className="md:w-14 w-5" src="/img/oat_logo.png" alt="" />
        <div className="md:text-5xl text-lg font-bold">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
      <div className="p-2 flex flex-row items-center justify-between md:space-x-2 px-3">
        <div className="flex flex-row justify-between items-center space-x-1 mr-3">
          <img
            src="img/ethereum.png"
            alt=""
            className="md:w-6 md:h-6 w-3 h-3"
          />
          <h2 className="uppercase text-white text-[0.625rem] md:text-base">
            eth: $1,914.59
          </h2>
        </div>

        <div className="flex flex-row space-x-1 justify-center">
          <img src="/img/gas.svg" alt="" className="w-3 md:w-4" />
          <h5 className="text-[0.625rem] md:text-base">21</h5>
        </div>
      </div>
      <WalletButton />
    </div>
  );
}

export default Navbar;
