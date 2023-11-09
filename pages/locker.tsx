import React from "react";
import Navbar from "@/components/Swapbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import WalletButton from "@/components/LockerConnect";

function Locker() {
  return (
    <div>
      <Navbar />
      <main
        className="min-w-full min-h-full top-0 left-0 items-center justify-center
      flex flex-col"
      >
        <div className="flex flex-col items-center mt-20">
          <h1 className="antialiased text-4xl md:text-7xl font-bold tracking-wide">
            O<span className="text-[#F2C572]">A</span>T LOCKER
          </h1>
          <h3 className="mt-2 text-xs md:text-sm">
            Dear <span className="text-[#F2C572]">Anon</span>, investors
            confidence starts here.
          </h3>
        </div>
        <div
          className="grid grid-cols-2 mt-10
        text-center justify-center w-[50%] mb-4"
        >
          <div
            className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-wider
         text-gray-300 rounded-l-3xl p-3 text-center justify-center border-[0.003rem] border-[#F2C572]"
          >
            LOCK TOKENS
          </div>
          <div
            className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-wider
         text-gray-300 rounded-r-3xl p-3 text-center justify-center border-[0.003rem] border-[#F2C572]"
          >
            LOCK LIQUIDITY
          </div>
        </div>
        <div
          className="grid grid-cols-2
        text-center mb-3 justify-center w-[25%]"
        >
          <div
            className="font-semibold bg-neutral-900 hover:bg-[#20190d] cursor-pointer tracking-wider
         text-[#F2C572] rounded-l-3xl p-3 text-center justify-center border-[0.003rem] border-[#F2C572]"
          >
            New Lock
          </div>
          <div
            className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-widest
         text-gray-300 rounded-r-3xl p-3 text-center justify-center border-[0.003rem] border-[#F2C572]"
          >
            Edit/Unlock
          </div>
        </div>
        <div
          className="flex flex-col rounded-3xl bg-neutral-900 p-5 mb-20 
        items-center shadow-sm shadow-[#F2C572]/50 justify-center"
        >
          <div className="flex flex-row justify-between items-center space-x-24">
            <div className="flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
                height="40px"
                width="40px"
                className="mr-3 br-20"
              />
              <div className="md:text-xl font-bold">Uniswap V2 Locker</div>
            </div>
            <img src="img/liqlock.png" alt="" className="opacity-[0.05]" />
          </div>
          <div>
            <p className="font-normal text-base">
              Use the locker to prove to investors you have locked liquidity.{" "}
              <br /> If you are not a token developer, this section is almost
              definitely <br /> not for you.
            </p>
            <p className="mt-3">OAT Locker offers</p>
            <ul className="list-disc pl-5 mt-1 font-normal text-base">
              <li>Lock splitting </li>
              <li>Liquidity Migration</li>
              <li>Relocking</li>
              <li>Lock ownership transfer</li>
            </ul>
          </div>
          <WalletButton />
        </div>
        <Footer />
      </main>
      <Head>
        <title>OAT | One Anon at a Time</title>
      </Head>
    </div>
  );
}

export default Locker;
