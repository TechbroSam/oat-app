import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between md:mx-[10%] p-5">
      <div className="flex items-center justify-between cursor-pointer">
        <img className="md:w-14 w-7" src="/img/oat_logo.png" alt="" />
        <div className="md:text-5xl text-2xl">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>

      <div className="md:flex justify-between w-[50%] hidden">
        <a
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">
            LIQUIDITY
          </ul>
        </a>
        <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">SWAP</ul>
        <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">
          BRIDGE
        </ul>
        <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">
          STAKE
        </ul>
        <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">
          LOCKER
        </ul>
        <ul className="hover:text-[#F2C572] cursor-pointer md:text-lg">NFT</ul>
      </div>
    </div>
  );
}

export default Navbar;
