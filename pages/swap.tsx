import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Swapbar";
import WalletButton from "@/components/ConnectWallet";


import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open: number;
}

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="#5f5f5f"
      className={`${
        id === open ? "rotate-180" : ""
      } h-7 w-7 !m-0 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

function myFunction() {
  const x = document.getElementById("gasPrice") as HTMLElement | null;
  if (x) {
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}

function swap() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <Navbar />
      <main className="min-w-full min-h-full top-0 left-0">
        <div className="flex flex-col items-center justify-center mt-16 md:mt-16">
          <div className="flex flex-col items-center">
            <h1 className="antialiased text-4xl md:text-7xl font-bold tracking-wide">
              O<span className="text-[#F2C572]">A</span>T SWAP
            </h1>
            <h3 className="mt-2 text-xs md:text-sm">
              Dear <span className="text-[#F2C572]">Anon</span>, swap away with
              confidence.
            </h3>
          </div>

          <div
            className="flex flex-col items-center justify-center bg-[#F2C572] mt-10 p-2 
        rounded-2xl backdrop-blur-sm mb-80"
          >
            <div
              className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 pt-3 pb-5 pr-5 pl-5 inshadow2
         flex flex-col justify-center"
            >
              <div className="flex justify-end pb-2 px-10 cursor-pointer">
                <img
                  src="/img/settings.svg"
                  alt=""
                  className="drop-shadow-sm w-7"
                />
              </div>
              <div
                className="grid  rounded-2xl py-6 px-7 bg-gray-300 
            inshadow2 bg-opacity-10"
              >
                <h3 className="font-medium text-sm text-[#5f5f5f]">You pay</h3>
                <div className="space-x-4 flex flex-row items-center justify-center">
                  <input
                    type="number"
                    className="placeholder-[#5757577b] placeholder:text-3xl md:text-3xl font-bold
                    text-[#0d0d0d] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0"
                    required
                  />
                  <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2 px-3">
                    <img src="/img/eth.png" alt="" className="w-8 h-8" />
                    <h2 className="uppercase text-[#0d0d0d] text-2xl font-bold">
                      eth
                    </h2>
                    <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <div className="font-medium text-sm text-[#5f5f5f]">
                    $1,645.54
                  </div>
                  <div className="flex flex-row space-x-2 justify-center">
                    <div className="font-medium text-sm text-[#5f5f5f]">
                      Balance: 10.05
                    </div>
                    <div className="text-[#0d0d0d] text-sm font-medium">
                      Max
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 p-5 inshadow2 relative mt-[2px]"
            >
              <div
                className="flex flex-row justify-center rounded-full w-10 h-10 bg-gray-300 absolute bg-clip-padding backdrop-filter 
         backdrop-blur-sm border border-[#F2C572] bg-opacity-30 inshadow2 m-auto left-0 right-0 top-0 mt-[-21px]"
              >
                <img
                  src="/img/arrow_updown.svg"
                  alt=""
                  className="w-1 md:w-5 opacity-80"
                />
              </div>
              <div
                className="grid rounded-2xl py-6 px-7 bg-gray-300 
            inshadow2 bg-opacity-10"
              >
                <h3 className="font-medium text-sm text-[#5f5f5f]">
                  You receive
                </h3>
                <div className="space-x-4 flex flex-row items-center justify-center">
                  <input
                    type="number"
                    className="placeholder-[#5757577b] placeholder:text-3xl md:text-3xl font-bold text-[#0d0d0d] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0"
                    required
                  />
                  <div className="shadow rounded-3xl bg-opacity-40 p-2 bg-gray-100 flex flex-row items-center justify-between space-x-2 px-3">
                    <img src="/img/eth.png" alt="" className="w-8 h-8" />
                    <h2 className=" uppercase text-[#0d0d0d] text-2xl font-bold">
                      oat
                    </h2>
                    <img src="/img/down1.svg" alt="" className="w-1 md:w-3" />
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <div className="flex flex-row justify-between space-x-1">
                    <div className="font-medium text-sm text-[#5f5f5f]">
                      $1,645.54
                    </div>
                    <div className="opacity-60 font-medium text-sm text-[#5f5f5f]">
                      (-0.303%)
                    </div>
                  </div>
                  <div className="font-medium text-sm text-[#5f5f5f]">
                    Balance: 0
                  </div>
                </div>
              </div>
            </div>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className="rounded-2xl bg-[#0d0d0d]
          px-12 py-0 border-white border"
            >
              <AccordionHeader
                onClick={() => {
                  handleOpen(1);
                  myFunction();
                }}
                className=""
              >
                <div className="text-base">
                  1 OAT = &lt;0.00001 ETH{" "}
                  <span className="text-[#a8a8a8]">($0.000000716)</span>
                </div>
                <div
                  id="gasPrice"
                  className="flex text-base flex-row items-center space-x-1"
                >
                  <div>
                    <img src="/img/gas.svg" alt="" className="w-1 md:w-4" />
                  </div>
                  <div className="text-[#a8a8a8]">$2.45</div>
                </div>
              </AccordionHeader>
              <AccordionBody className="">
                <hr className="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8]">Network fee</div>
                  <div>$2.54</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8]">Price impact</div>
                  <div>-0.305%</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8]">Minimum output</div>
                  <div>2500000 OAT</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8]">Expected output</div>
                  <div>2470500 OAT</div>
                </div>
                <hr className="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <div className="flex justify-between py-4">
                  <div className="text-[#a8a8a8]">Order routing</div>
                  <div>Uniswap API</div>
                </div>
              </AccordionBody>
            </Accordion>
            <button
              className="flex justify-center bg-transparent w-full rounded-2xl text-[#0d0d0d] font-medium
          relative p-5 my-1 md:text-2xl hover:bg-[#0d0d0d] inshadow2 hover:text-white ease-in-out"
            >
              Connect Wallet
            </button>
          </div>
          <Head>
            <title>OAT | One Anon at a Time</title>
          </Head>
        </div>
        
        <Footer />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </main>
    </div>
  );
}

export default swap;
