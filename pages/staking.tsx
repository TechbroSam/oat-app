import React from "react";
import Navbar from "@/components/Swapbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";


function Staking() {
  return (
    <div>
      <Navbar />
      <main className="min-w-full min-h-full top-0 left-0 flex flex-col">
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
          className="bg-gradient-to-r from-pink-500 via-red-500 
          to-yellow-500 mt-10 p-2 mb-32
        lg:rounded-full rounded-3xl backdrop-blur-sm md:mb-60 lg:mx-[20%]"
        >
          <div
            className="
           bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter flex flex-col overflow-hidden
          backdrop-blur-sm bg-opacity-10 border border-gray-100 items-center justify-center
          "
          >
            <div className="flex justify-between items-center w-full overflow-clip">
              <div
                className="flex items-center bg-gray-400  border 
              border-gray-100 bg-opacity-30 md:w-[25%]
              md:p-2 px-5 py-1 justify-center md:space-x-3 space-x-1"
              >
                <h1 className="text-[0.625rem] md:text-xs font-semibold tracking-wider">
                  STAKERS:
                </h1>
                <h3 className="md:text-lg text-sm">
                  <span className="text-[#F2C572] font-bold">247</span>
                </h3>
              </div>
              <div
                className="flex items-center bg-gray-400  border 
              border-gray-100 bg-opacity-30 md:w-[25%]
              md:p-2 px-5 py-1 justify-center md:space-x-3 space-x-1"
              >
                <h1 className="text-[0.625rem] md:text-xs font-semibold tracking-wider">
                  STAKED:
                </h1>
                <h3 className="md:text-lg text-sm">
                  <span className="text-[#F2C572] font-bold">5,000,500</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center mt-5 text-center">
              <p className="md:text-base text-[0.750rem] font-medium">
                Minimum staking period to earn rewards is 7 days.
              </p>
              <p className="font-bold text-sm md:text-lg">APY: 50%</p>
            </div>

            <div
              className="pt-7 mt-7 lg:rounded-full  bg-clip-padding 
          backdrop-filter flex flex-col rounded-3xl
          backdrop-blur-sm bg-opacity-10 pb-3
          items-center justify-center px-5 mb-10 inshadow2 w-[90%]"
            >
              <h1 className="pt-3 text-lg md:text-3xl font-bold tracking-wide">
                Dear <span className="text-[#F2C572]">Anon</span>, your stats.
              </h1>
              <hr
                className="h-px w-[100%] md:w-[70%] my-4 bg-gray-200 
              border-0 dark:bg-gray-700"
              ></hr>

              <div
                className="grid md:grid-cols-4 grid-cols-2 md:mt-5 
              md:divide-x w-full mt-2 relative items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="md:text-base text-xs">Balance</div>
                  <div className="flex items-center space-x-1 text-sm md:text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="md:text-base text-xs">Staked</div>
                  <div className="flex items-center space-x-1 text-sm md:text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <hr
                  className="absolute md:hidden h-16 w-[0.05rem] my-4 bg-gray-200 
              border-0 dark:bg-gray-700 
              items-center justify-center text-center m-auto left-0 right-0 top-0"
                ></hr>
                <div className="flex flex-col items-center mt-2 md:mt-0">
                  <div className="md:text-base text-xs">Approved</div>
                  <div className="flex items-center space-x-1 text-sm md:text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-2 md:mt-0">
                  <div className="md:text-base text-xs">Rewards</div>
                  <div className="flex items-center space-x-1 text-sm md:text-lg font-semibold">
                    <div>1000</div>
                    <div>$OAT</div>
                  </div>
                </div>
              </div>

              <div
                className="md:space-x-4 space-x-1 flex flex-row items-center px-4 py-2
              justify-center mt-10 rounded-full border border-red-500
              inshadow2"
              >
                <input
                  type="number"
                  className="placeholder-[#ffffff4f] md:placeholder:text-3xl 
                  md:text-3xl font-bold placeholder:text-base text-base
                  text-gray-100 !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  required
                />
                <div
                  className="shadow rounded-3xl bg-opacity-70 
                  md:p-1 bg-gray-100 flex p-[0.125rem]
                flex-row items-center justify-between md:space-x-2 cursor-pointer"
                >
                  <h2
                    className="uppercase text-[#0d0d0d] md:text-xs 
                  font-bold px-2 text-[0.625rem]"
                  >
                    max
                  </h2>
                </div>
              </div>

              <button
                className="flex justify-center bg-gray-100 
                md:w-[25%] w-[50%] rounded-full text-[#0d0d0d] 
              border border-[#F2C572] drop-shadow-lg 
              font-semibold mb-7 text-center items-center
          relative md:p-1 py-1 md:text-lg text-sm hover:bg-[#0d0d0d]  
          hover:text-white ease-in-out md:mt-5 mt-3"
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
