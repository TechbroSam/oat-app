import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between md:mx-[10%] p-5 sticky top-0">
      <div className="flex items-center justify-between cursor-pointer">
        <img className="lg:w-14 w-7" src="/img/oat_logo.png" alt="" />
        <div className="lg:text-5xl text-2xl">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
      <div className="md:flex justify-between w-[70%] hidden lg:w-[50%]">
        <a
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <li className="ulnav md:text-sm lg:text-lg">LIQUIDITY</li>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <ul className="ulnav md:text-sm lg:text-lg">SWAPP</ul>
        </a>
        <ul className="ulnav md:text-sm lg:text-lg">BRIDGE</ul>
        <ul className="ulnav md:text-sm lg:text-lg">STAKE</ul>
        <ul className="ulnav md:text-sm lg:text-lg">LOCKER</ul>
        <ul className="ulnav md:text-sm lg:text-lg">NFT</ul>
      </div>
    </div>
  );
}

export default Navbar;
