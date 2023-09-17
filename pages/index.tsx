import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] p-3">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="flex items-center justify-center mt-[-70%] md:mt-[70px]">
          <h1
            className="flex text-[#F2C572] text-lg justify-center items-center text-center 
          md:leading-snug md:text-5xl"
          >
            CREATING GENERATIONAL WEALTH...
            <br />
            ONE ANON AT A TIME!
          </h1>
        </div>
        <div>
          <h2 className="text-slate-300 justify-center text-center text-sm mt-3 mb-12 md:mt-6 md:text-2xl">
            "DEAR <span className="text-[#F2C572]">ANON</span>, BE THE CHANGE
            YOU WANT TO SEE IN <span className="text-[#F2C572]">CRYPTO</span>."
          </h2>
        </div>

        {/* Card Section */}
        <div className="relative">
          <div
            className="absolute blur-sm md:blur-md -inset-0.5 transition duration-200 bg-gradient-to-r
    from-[#C6FFDD]
    via-[#FBD786]
    to-[#f7797d] w-full flex flex-row items-center rounded-xl md:flex-row md:max-w-xl mt-5 md:mt-10 opacity-50"
          ></div>
          <div
            className="w-full flex flex-row items-center rounded-xl md:flex-row md:max-w-xl 
          shadow-2xl bg-[#262626] bg-opacity-40 backdrop-filter backdrop-blur-lg
      transition-transform transform hover:scale-110 border border-[#F2C572] mt-5 md:mt-10"
          >
            <div className="w-full md:max-w-xl flex-col justify-between p-4 leading-normal">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-5xl">
                  O<span className="text-[#F2C572]">A</span>T
                </h3>
                <Image
                  className="w-4 md:w-6"
                  src="/img/contactless.png"
                  alt=""
                  width="24"
                  height="0"
                />
              </div>
              <div>
                <Image
                  className="w-7 mt-2 md:mt-5 md:w-[3.75rem]"
                  src="/img/chip1.png"
                  alt=""
                  width="60"
                  height="0"
                />
              </div>

              <div className="flex justify-center mt-3 md:mt-6">
                <h3 className="text-[0.625rem] md:text-[1.0625rem]">
                  0xf951ead486490bd64193fd2ea475697a9fd5d582
                </h3>
              </div>
              <div className="flex justify-between px-7 md:px-11 mt-2 md:pt-3">
                <div>
                  <h6 className="text-[8px] md:text-sm text-[#F2C572]">TS</h6>
                  <h4 className="text-[9px] md:text-xs">200,000,000</h4>
                </div>
                <div>
                  <h6 className="text-[8px] md:text-sm text-[#F2C572]">CS</h6>
                  <h4 className="text-[9px] md:text-xs">200,000,000</h4>
                </div>
              </div>
              <div className="flex justify-between px-16 md:px-20 mt-2 md:pt-3">
                <div className="flex items-center ml-4 md:ml-9">
                  <h6 className="pr-1 md:pr-2 text-[9px] md:text-sm text-slate-300">
                    TAX
                  </h6>
                  <h4 className="text-[9px] md:text-[14px]">0/2</h4>
                </div>
                <div className="flex items-center mr-4 md:mr-9">
                  <h6 className="text-[9px] md:text-sm text-slate-300">BBW</h6>
                  <h4 className="px-1 md:px-2 text-[#F2C572] text-[9px] md:text-[14px]">
                    10
                  </h4>
                  <h6 className="text-[9px] md:text-base">ETH</h6>
                </div>
              </div>

              <div className="flex justify-between px-7 md:px-11 pt-2 md:pt-5">
                <div className="flex items-center">
                  <h6 className="text-[9px] md:text-sm mr-1 md:mr-2 text-[#F2C572]">
                    CONTRACT
                  </h6>
                  <h1 className="text-[12px] md:text-xl">RENOUNCED</h1>
                </div>
                <div className="flex items-center">
                  <h6 className="text-[9px] md:text-sm text-[#F2C572] mr-[0.25rem]">
                    LP
                  </h6>
                  <Image
                    className="w-1.5 md:w-2.5 mr-1 md:mr-2"
                    src="/img/lock.svg"
                    alt=""
                    width="10"
                    height="0"
                  />
                  <h4 className="text-[9.5px] md:text-sm">23.12.2030</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Head>
        <title>OAT | One Anon at a Time</title>
      </Head>
    </div>
  );
}
