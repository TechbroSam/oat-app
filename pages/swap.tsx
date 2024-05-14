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
      } h-4 w-4 !m-0 transition-transform md:h-6 md:w-6`}
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

function Swap() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <Navbar />
      <main className="top-0 left-0 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-16 md:mt-16 w-fit">
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
            className="flex flex-col items-center justify-center bg-[#F2C572] mt-10 md:p-2 p-1
        rounded-2xl backdrop-blur-sm md:mb-80 mb-40"
          >
            <div
              className="h-full flex-wrap bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 md:p-5 p-3 inshadow2
         flex flex-col justify-center"
            >
              <div className="flex justify-end pb-2 md:pr-5 pr-3 cursor-pointer">
                <img
                  src="/img/settings.svg"
                  alt=""
                  className="drop-shadow-sm md:w-7 w-4"
                />
              </div>
              <div
                className="grid rounded-2xl md:p-5 p-3 bg-gray-300 
            inshadow2 bg-opacity-10 w-fit"
              >
                <h3 className="font-medium text-[0.625rem] md:text-sm text-[#5f5f5f]">
                  You pay
                </h3>
                <div className="md:space-x-4 space-x-1 flex flex-row items-center justify-center">
                  <input
                    type="number"
                    className="placeholder-[#5757577b] md:placeholder:text-3xl md:text-3xl font-bold 
                    placeholder:text-base text-base
                    text-[#0d0d0d] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0"
                    required
                  />
                  <div
                    className="shadow rounded-3xl bg-opacity-40 py-1 md:py-2 bg-gray-100 
                  flex flex-row items-center space-x-1 md:space-x-2 md:px-3 px-2 w-fit justify-center"
                  >
                    <img
                      src="/img/eth.png"
                      alt=""
                      className="md:w-8 md:h-8 h-5 w-5"
                    />
                    <h2 className="uppercase text-[#0d0d0d] md:text-2xl text-base font-bold">
                      eth
                    </h2>
                    <img src="/img/down1.svg" alt="" className="w-2 md:w-3" />
                  </div>
                </div>
                <div className="flex flex-row mt-3 justify-between">
                  <div className="font-medium text-xs md:text-sm text-[#5f5f5f]">
                    $1,645.54
                  </div>
                  <div className="flex flex-row space-x-2 justify-center">
                    <div className="font-medium text-xs md:text-sm text-[#5f5f5f]">
                      Balance: 10.05
                    </div>
                    <div className="text-[#0d0d0d] text-xs md:text-sm font-medium">
                      Max
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-full w-fit bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter 
         backdrop-blur-sm bg-opacity-30 md:p-5 p-3 inshadow2 relative mt-[2px]"
            >
              <div
                className="flex flex-row justify-center rounded-full md:w-10 md:h-10 w-6 h-6
                bg-gray-300 absolute bg-clip-padding backdrop-filter 
         backdrop-blur-sm border border-[#F2C572] bg-opacity-30 inshadow2 
         m-auto left-0 right-0 top-0 md:mt-[-21px] mt-[-13px]"
              >
                <img
                  src="/img/arrow_updown.svg"
                  alt=""
                  className="w-3 md:w-5 opacity-80"
                />
              </div>
              <div
                className="grid rounded-2xl md:p-5 p-3 bg-gray-300 
            inshadow2 bg-opacity-10 w-fit"
              >
                <h3 className="font-medium text-[0.625rem] md:text-sm text-[#5f5f5f]">
                  You receive
                </h3>
                <div className="md:space-x-4 space-x-1 flex flex-row items-center justify-center">
                  <input
                    type="number"
                    className="placeholder-[#5757577b] md:placeholder:text-3xl md:text-3xl font-bold 
                    placeholder:text-base text-base
                    text-[#0d0d0d] !outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0"
                    required
                  />
                  <div
                    className="shadow rounded-3xl bg-opacity-40 py-1 md:py-2 bg-gray-100 
                  flex flex-row items-center space-x-1 md:space-x-2 md:px-3 px-2 w-fit justify-center"
                  >
                    <img
                      src="/img/eth.png"
                      alt=""
                      className="md:w-8 md:h-8 h-5 w-5"
                    />
                    <h2 className="uppercase text-[#0d0d0d] md:text-2xl text-base font-bold">
                      oat
                    </h2>
                    <img src="/img/down1.svg" alt="" className="w-2 md:w-3" />
                  </div>
                </div>
                <div className="flex flex-row mt-3 justify-between">
                  <div className="flex flex-row justify-between space-x-1">
                    <div className="font-medium text-xs md:text-sm text-[#5f5f5f]">
                      $1,645.54
                    </div>
                    <div className="opacity-60 font-medium text-xs md:text-sm text-[#5f5f5f]">
                      (-0.303%)
                    </div>
                  </div>
                  <div className="font-medium text-xs md:text-sm text-[#5f5f5f]">
                    Balance: 0
                  </div>
                </div>
              </div>
            </div>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className="rounded-2xl bg-[#0d0d0d]
          md:px-12 px-6 border-[#F2C572] border"
            >
              <AccordionHeader
                onClick={() => {
                  handleOpen(1);
                  myFunction();
                }}
                className="flex flex-row justify-between items-center md:py-4 py-3 space-x-1"
              >
                <div className="md:text-base text-xs">
                  1 OAT = &lt;0.00001 ETH{" "}
                  <span className="text-[#a8a8a8]">($0.000000716)</span>
                </div>
                <div
                  id="gasPrice"
                  className="flex md:text-base text-xs flex-row items-center md:space-x-2
                   space-x-1"
                >
                  <div>
                    <img src="/img/gas.svg" alt="" className="w-3 md:w-4" />
                  </div>
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    $2.45
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="">
                <hr className="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    Network fee
                  </div>
                  <div className="text-xs md:text-base">$2.54</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    Price impact
                  </div>
                  <div className="text-xs md:text-base">-0.305%</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    Minimum output
                  </div>
                  <div className="text-xs md:text-base">2500000 OAT</div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    Expected output
                  </div>
                  <div className="text-xs md:text-base">2470500 OAT</div>
                </div>
                <hr className="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <div className="flex justify-between py-4">
                  <div className="text-[#a8a8a8] text-xs md:text-base">
                    Order routing
                  </div>
                  <div className="text-xs md:text-base">Uniswap API</div>
                </div>
              </AccordionBody>
            </Accordion>
            <button
              className="flex justify-center bg-transparent w-full rounded-2xl text-[#0d0d0d] font-medium
          relative p-3 md:my-1 my-[0.125rem] text-lg md:text-2xl hover:bg-[#0d0d0d] md:p-5
          inshadow2 hover:text-white ease-in-out"
            >
              Connect Wallet
            </button>
          </div>
          <Head>
            <title>OAT | One Anon at a Time</title>
          </Head>
        </div>

        <script src="../path/to/flowbite/dist/flowbite.min.js" async></script>
      </main>
      <Footer />
    </div>
  );
}

export default Swap;
