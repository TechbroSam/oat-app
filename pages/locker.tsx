import React from "react";
import Navbar from "@/components/Swapbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import WalletButton from "@/components/LockerConnect";

function Locker() {
  return (
    <div>
      <Navbar />
      <main className="min-w-full min-h-full top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mt-20 px-4">
          <h1 className="antialiased text-4xl md:text-7xl font-bold tracking-wide text-center">
            O<span className="text-[#F2C572]">A</span>T LOCKER
          </h1>
          <h3 className="mt-2 text-xs md:text-sm text-center">
            Dear <span className="text-[#F2C572]">Anon</span>, investors confidence starts here.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 text-center justify-center w-full md:w-[50%] mb-4">
          <div className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-wider text-gray-300 rounded-t-3xl md:rounded-l-3xl md:rounded-r-none p-3 border-[0.003rem] border-[#F2C572]">
            LOCK TOKENS
          </div>
          <div className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-wider text-gray-300 rounded-b-3xl md:rounded-r-3xl md:rounded-l-none p-3 border-[0.003rem] border-[#F2C572]">
            LOCK LIQUIDITY
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-3 justify-center w-full md:w-[25%]">
          <div className="font-semibold bg-neutral-900 hover:bg-[#20190d] cursor-pointer tracking-wider text-[#F2C572] rounded-t-3xl md:rounded-l-3xl md:rounded-r-none p-3 border-[0.003rem] border-[#F2C572]">
            New Lock
          </div>
          <div className="font-semibold bg-neutral-900 hover:bg-[#0d0d0d] cursor-pointer tracking-wider text-gray-300 rounded-b-3xl md:rounded-r-3xl md:rounded-l-none p-3 border-[0.003rem] border-[#F2C572]">
            Edit/Unlock
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg-neutral-900 p-5 mb-20 items-center shadow-sm shadow-[#F2C572]/50 w-full md:w-1/2 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-4 md:mb-0">
            <div className="flex justify-center items-center mb-4 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
                height="40px"
                width="40px"
                className="mr-3 h-10 w-10"
              />
              <div className="md:text-xl font-bold text-center md:text-left">Uniswap V2 Locker</div>
            </div>
            <img src="img/liqlock.png" alt="" className="opacity-[0.05] w-[5rem] md:w-[7rem] h-[5rem] md:h-[7rem]" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-normal text-base">
              Use the locker to prove to investors you have locked liquidity. <br className="hidden md:block"/> If you are not a token developer, this section is almost definitely <br className="hidden md:block"/> not for you.
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
