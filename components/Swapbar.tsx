import React from "react";
import WalletButton from "@/components/ConnectWallet";

function Navbar() {
  return (
    <div
      className="flex h-20 bg-[#0D0D0D] py-1 cursor-pointer shadow-[#F2C572]/30
    px-5 md:py-11 md:px-[10%] top-0 justify-between items-center shadow-lg sticky z-50"
    >
      <div className="flex items-center">
        <img className="lg:w-14 w-10" src="/img/oat_logo.png" alt="" />
        <div className="lg:text-5xl text-4xl font-bold">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
      <div className="p-2 flex flex-row items-center justify-between space-x-2 px-3">
        <div className="flex flex-row justify-between items-center space-x-1 mx-2">
          <img
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
            alt=""
            className="w-6 h-6"
          />
          <h2 className="uppercase text-white">eth: $1,914.59</h2>
        </div>

        <div className="flex flex-row space-x-1 justify-center">
          <img src="/img/gas.svg" alt="" className="w-1 md:w-4" />
          <h5>21</h5>
        </div>
      </div>
      <WalletButton />
    </div>
  );
}

export default Navbar;
