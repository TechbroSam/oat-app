import React from "react";
import Head from "next/head";

function swap() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 md:mt-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-[poppins] font-bold tracking-wide">
          O<span className="text-[#F2C572]">A</span>T SWAP
        </h1>
        <h3 className="font-[poppins] mt-1 text-xs md:text-sm">
          Dear <span className="text-[#F2C572]">Anon</span>, swap away with
          confidence.
        </h3>
      </div>

      <div className="bg-[#F2C572] mt-10 p-2 rounded-2xl backdrop-blur-sm">
        <div
          className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
        backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5"
        >
          <div className="grid border border-gray-100 rounded-2xl py-5 p-8 bg-gray-300 bg-opacity-50">
            <h3 className="font-[poppins] font-medium text-sm text-[#0d0d0d]">
              You pay
            </h3>
            <div className="space-x-4 flex flex-row py-5 items-center justify-center">
              <input
                type="number"
                className="placeholder-[#5757577b] text-[#0d0d0d] font-[poppins] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter amount"
                required
              />
              <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2">
                <img src="/img/eth.png" alt="" className="w-8 h-8" />
                <h2 className="font-[poppins] uppercase text-[#0d0d0d] text-2xl font-bold">
                  eth
                </h2>
                <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div
          className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
        backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5"
        >
          <div className="grid border border-gray-100 rounded-2xl py-5 p-8 bg-gray-300 bg-opacity-50 ">
            <h3 className="font-[poppins] font-medium text-sm text-[#0d0d0d]">
              You receive
            </h3>
            <div className="space-x-4 flex flex-row py-5 items-center justify-center">
              <input
                type="number"
                className="placeholder-[#5757577b] text-[#0d0d0d] font-[poppins] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter amount"
                required
              />
              <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2">
                <img src="/img/eth.png" alt="" className="w-8 h-8" />
                <h2 className="font-[poppins] uppercase text-[#0d0d0d] text-2xl font-bold">
                  eth
                </h2>
                <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Head>
        <title>OAT | One Anon at a Time</title>
      </Head>
    </div>
  );
}

export default swap;
