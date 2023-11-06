import React from "react";

function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center shadow-[#F2C572]/40
    shadow-[0_10px_10px_15px_rgba(0,0,0,0.1)] w-full"
    >
      <div className="flex items-center justify-center py-6 md:py-12 md:space-x-8 space-x-4">
        <a
          className="flex w-7 h-7 md:w-14 md:h-14 bg-[#F2C572] rounded-full items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <img
            className="w-7 md:w-14"
            src="/img/x.svg"
            alt=""
            width="0"
            height="0"
          />
        </a>
        <a
          className="flex w-7 h-7 md:w-14 md:h-14 bg-[#F2C572] rounded-full items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <img
            className="w-5 md:w-10"
            src="/img/email.svg"
            alt=""
            width="10"
            height="0"
          />
        </a>
        <a
          className="flex w-7 h-7 md:w-14 md:h-14 bg-[#F2C572] rounded-full items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <img
            className="w-5 md:w-9"
            src="/img/dextools.svg"
            alt=""
            width="10"
            height="0"
          />
        </a>
        <a
          className="flex w-7 h-7 md:w-14 md:h-14 bg-[#F2C572] rounded-full items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <img
            className="w-5 md:w-10"
            src="/img/etherscan-logo.svg"
            alt=""
            width="10"
            height="0"
          />
        </a>
        <a
          className="flex w-7 h-7 md:w-14 md:h-14 bg-[#F2C572] rounded-full items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100089909078977"
          target="_blank"
        >
          <img
            className="w-5 md:w-10"
            src="/img/telegram.svg"
            alt=""
            width="10"
            height="0"
          />
        </a>
      </div>
      <div className="rounded-md bg-[#F2C572] px-2 py-1 md:px-5 md:py-2 text-[#0d0d0d] my-5 ">
        <h1 className="opacity-90 text-[10px] md:text-base font-medium">
          LIQUIDITY SECURED BY OATLOCKER
        </h1>
      </div>
      <div className="text-[10px] md:text-base">
        <span className="text-base">&copy;</span> COPYRIGHT{" "}
        <span className="md:text-sm">2023</span>{" "}
        <strong>
          <span className="md:text-2xl text-xl">
            {" "}
            O<span className="text-[#F2C572]">A</span>T
          </span>
        </strong>
        . ALL RIGHTS RESERVED
      </div>
      <div className="flex items-center justify-center filter drop-shadow-md h-20 py-10 md:py-20 ">
        <img className="lg:w-16 w-10" src="/img/oat_logo.png" alt="" />
        <div className="lg:text-6xl text-4xl font-bold">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
    </div>
  );
}

export default Footer;
