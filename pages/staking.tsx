import React from "react";
import Navbar from "@/components/Swapbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";


function Staking() {
  return (
    <div>
      <Navbar />
      <main className="min-w-full min-h-full top-0 left-0">
        <div className="flex flex-col items-center mt-20">
          <h1 className="antialiased text-4xl md:text-7xl font-bold tracking-wide">
            O<span className="text-[#F2C572]">A</span>T STAKING
          </h1>
          <h3 className="mt-2 text-xs md:text-sm">
            Dear <span className="text-[#F2C572]">Anon</span>, stake away with
            confidence.
          </h3>
        </div>
        <div
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-10 p-2
        rounded-full backdrop-blur-sm mb-60 md:mx-[20%]"
        >
          <div
            className="
           bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter flex flex-col overflow-hidden
          backdrop-blur-sm bg-opacity-10 border border-gray-100 items-center justify-center
          "
          >
            <div className="flex justify-between items-center w-full overflow-clip">
              <div
                className="flex items-center bg-gray-400 rounded-3xl border 
              border-gray-100 bg-opacity-30 w-[25%] p-2 justify-center space-x-3"
              >
                <h1 className="text-xs md:text-xs font-semibold tracking-wider">
                  STAKERS:
                </h1>
                <h3 className="md:text-lg">
                  <span className="text-[#F2C572] font-bold">247</span>
                </h3>
              </div>
              <div
                className="flex items-center bg-gray-400 rounded-3xl border 
              border-gray-100 bg-opacity-30 w-[25%] p-2 justify-center space-x-3"
              >
                <h1 className="text-xs md:text-xs font-semibold tracking-wider">
                  STAKED:
                </h1>
                <h3 className="md:text-lg">
                  <span className="text-[#F2C572] font-bold">5,000,500</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center mt-5 font-medium">
              <p>Minimum staking period to earn rewards is 7 days.</p>
              <p className="font-bold text-lg">APY: 50%</p>
            </div>

            <div
              className="pt-7 mt-7 rounded-full bg-clip-padding backdrop-filter flex flex-col
          backdrop-blur-sm bg-opacity-10 pb-3
          items-center justify-center px-5 mb-10 inshadow2 w-[90%]"
            >
              <h1 className="pt-3 text-xs md:text-3xl font-bold tracking-wide">
                Dear <span className="text-[#F2C572]">Anon</span>, your stats.
              </h1>
              <hr className="h-px w-[70%] my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <div className="grid grid-cols-4 mt-5 divide-x w-full">
                <div className="flex flex-col items-center">
                  <div>Balance</div>
                  <div className="flex items-center space-x-1 text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>Staked</div>
                  <div className="flex items-center space-x-1 text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>Approved</div>
                  <div className="flex items-center space-x-1 text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>Rewards</div>
                  <div className="flex items-center space-x-1 text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
              </div>

              <div
                className="space-x-4 flex flex-row items-center px-4 py-2
              justify-center mt-10 rounded-full border border-red-500 inshadow2"
              >
                <input
                  type="number"
                  className="placeholder-[#ffffff4f] placeholder:text-3xl md:text-3xl font-bold text-gray-100 !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  required
                />
                <div
                  className="shadow rounded-3xl bg-opacity-70 p-1 bg-gray-100 flex 
                flex-row items-center justify-between space-x-2 cursor-pointer"
                >
                  <h2 className="uppercase text-[#0d0d0d] text-xs font-bold px-2">
                    max
                  </h2>
                </div>
              </div>

              <button
                className="flex justify-center bg-gray-100 w-[25%] rounded-full text-[#0d0d0d] 
              border border-[#F2C572] drop-shadow-lg font-semibold mb-7
          relative p-1 md:text-lg hover:bg-[#0d0d0d]  hover:text-white ease-in-out mt-5"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
       
        <Footer />
      </main>
      <Head>
        <title>OAT | One Anon at a Time</title>
      </Head>
    </div>
  );
}

export default Staking;
