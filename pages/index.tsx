import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#0D0D0D]">
      <div className="">
        <h1 className="text-[#F2C572] justify-center text-center text-5xl leading-normal">
          CREATING GENERATIONAL WEALTH...
          <br />
          ONE ANON AT A TIME!
        </h1>
      </div>
      <div>
        <h2 className="text-slate-300 justify-center text-center text-2xl mt-9 mb-12">
          "DEAR ANON, BE THE CHANGE YOU WANT TO SEE IN CRYPTO."
        </h2>
      </div>

      {/* Card Section */}
      <div className="relative">
        <div
          className="absolute -inset-0.5 rounded-3xl mt-12 blur-sm 
        bg-gradient-to-r from-[#BF8924] to-[#8C4E03]"
        ></div>
        <div
          className="min-w-min m-auto rounded-3xl relative shadow-2xl bg-[#262626] bg-opacity-40 backdrop-filter backdrop-blur-lg
      transition-transform transform hover:scale-110 border border-[#F2C572] p-6 mt-12"
        >
          <div className="flex flex-1 justify-between">
            <h3 className="text-3xl">OAT</h3>
            <Image src="/img/contactless.png" alt="" width="24" height="0" />
          </div>
          <div>
            <Image
              className="mt-5"
              src="/img/cardchip.svg"
              alt=""
              width="70"
              height="0"
            />
          </div>
          <div className="flex justify-center mt-9">
            <h3 className="text-xl">
              0xf951ead486490bd64193fd2ea475697a9fd5d582
            </h3>
          </div>
          <div className="flex justify-between px-11 pt-5">
            <div>
              <h6 className="text-sm text-[#BF8924]">TS</h6>
              <h4>200,000,000</h4>
            </div>
            <div>
              <h6 className="text-sm text-[#BF8924]">CS</h6>
              <h4>200,000,000</h4>
            </div>
          </div>
          <div className="flex justify-between px-11 pt-5">
            <div className="flex items-center ml-9">
              <h6 className="pr-2 text-sm text-slate-300">TAX</h6>
              <h4>0/2</h4>
            </div>
            <div className="flex items-center mr-9">
              <h6 className="text-sm text-slate-300">BBW</h6>
              <h4 className="px-2 text-[#F2C572]">10</h4>
              <h6 className="">ETH</h6>
            </div>
          </div>
          <div className="flex justify-between px-11 pt-5">
            <div className="flex items-center">
              <h6 className="text-sm mr-2 text-[#BF8924]">CONTRACT</h6>
              <h1 className="text-2xl">RENOUNCED</h1>
            </div>
            <div className="flex items-center">
              <h6 className="text-sm">LP</h6>
              <Image
                className="mr-2"
                src="/img/lock.svg"
                alt=""
                width="10"
                height="0"
              />
              <h4>23.12.2030</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
