import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

function swap() {
  return (
    <div className="min-w-full min-h-full top-0 left-0 overflow-hidden">
      <div
        className="z-10 flex drop-shadow-md h-20 items-center bg-[#0D0D0D] py-1
    px-5 md:py-11 md:px-[10%] sticky top-0 cursor-pointer justify-between"
      >
        <div className="w-3/12 flex items-center">
          <img className="lg:w-14 w-10" src="/img/oat_logo.png" alt="" />
          <div className="lg:text-5xl text-4xl font-bold">
            O<span className="text-[#F2C572]">A</span>T
          </div>
        </div>
        <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2 px-3">
          <img src="/img/eth.png" alt="" className="w-8 h-8" />
          <h2 className="font-[poppins] uppercase text-[#0d0d0d] text-2xl font-bold">
            eth
          </h2>
          <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 md:mt-32">
        <div className="flex flex-col items-center z-50">
          <h1 className="antialiased text-4xl md:text-7xl font-[poppins] font-bold tracking-wide">
            O<span className="text-[#F2C572]">A</span>T SWAP
          </h1>
          <h3 className="font-[poppins] mt-1 text-xs md:text-sm">
            Dear <span className="text-[#F2C572]">Anon</span>, swap away with
            confidence.
          </h3>
        </div>

        <div
          className="flex flex-col items-center justify-center bg-[#F2C572] mt-10 p-2 
        rounded-2xl backdrop-blur-sm z-50 mb-80"
        >
          <div
            className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 inshadow2"
          >
            <div className="flex justify-end pb-4 px-10">
              <img src="/img/settings.svg" alt="" className="drop-shadow-sm" />
            </div>
            <div
              className="grid border border-gray-100 rounded-2xl py-8 px-7 bg-gray-300 
            inshadow2 bg-opacity-10"
            >
              <h3 className="font-[poppins] font-medium text-sm text-[#5f5f5f]">
                You pay
              </h3>
              <div className="space-x-4 flex flex-row items-center justify-center">
                <input
                  type="number"
                  className="placeholder-[#5757577b] placeholder:text-3xl md:text-3xl text-[#0d0d0d] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  required
                />
                <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2 px-3">
                  <img src="/img/eth.png" alt="" className="w-8 h-8" />
                  <h2 className="font-[poppins] uppercase text-[#0d0d0d] text-2xl font-bold">
                    eth
                  </h2>
                  <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center rounded-full w-8 h-8 z-50 bg-gray-400 absolute bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-10 inshadow2 mb-10"
          >
            <img src="/img/arrow_updown.svg" alt="" className="w-1 md:w-5" />
          </div>
          <div
            className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 relative mt-[2px] inshadow2"
          >
            <div
              className="grid border border-gray-100 rounded-2xl py-8 px-7 bg-gray-300 
            inshadow2 bg-opacity-10"
            >
              <h3 className="font-[poppins] font-medium text-sm text-[#5f5f5f]">
                You receive
              </h3>
              <div className="space-x-4 flex flex-row items-center justify-center">
                <input
                  type="number"
                  className="placeholder-[#5757577b] placeholder:text-3xl md:text-3xl text-[#0d0d0d] font-[poppins] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  required
                />
                <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2 px-3">
                  <img src="/img/eth.png" alt="" className="w-8 h-8" />
                  <h2 className="font-[poppins] uppercase text-[#0d0d0d] text-2xl font-bold">
                    oat
                  </h2>
                  <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="flex justify-center bg-[#0d0d0d] w-full rounded-2xl 
          relative z-10 p-5 my-1 md:text-2xl hover:bg-transparent inshadow2 hover:text-[#0d0d0d]"
          >
            Connect Wallet
          </button>
        </div>

        <Head>
          <title>OAT | One Anon at a Time</title>
        </Head>
      </div>
      <Footer />
    </div>
  );
}

export default swap;
