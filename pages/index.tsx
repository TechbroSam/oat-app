import Image from "next/image";
import Head from "next/head";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalMarquee from "../components/HorizonalMarquee";
import { space } from "postcss/lib/list";

export default function Home() {
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(
    null
  );
  const deadWalletAddress = "0x000000000000000000000000000000000000dEaD";
  const contractAddress = "0x6A7eFF1e2c355AD6eb91BEbB5ded49257F3FED98";

  const [price, setPrice] = useState<number | null>(null);
  const [liquidity, setLiquidity] = useState<string | null>(null);
  const [fdv, setFdv] = useState<string | null>(null);

  // Function to format liquidity or FDV value
  const formatValue = (value: number) => {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + "B";
    } else if (value >= 1000000) {
      return (value / 1000000).toFixed(value % 1000000 >= 50000 ? 1 : 0) + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(value % 1000 >= 500 ? 1 : 0) + "K";
    } else if (Number.isInteger(value)) {
      return value.toFixed(0);
    } else {
      return value.toFixed(1);
    }
  };

  // Fetch data from Dexscreener API and update price, liquidity, and FDV
  const fetchTokenData = async () => {
  try {
    const response = await fetch(
      "https://api.dexscreener.io/latest/dex/tokens/0x6A7eFF1e2c355AD6eb91BEbB5ded49257F3FED98"
    );
    const data = await response.json();

    // Extract priceUsd, liquidityUsd, and fdv from the fetched data
    const pairs = data.pairs;
    if (pairs && pairs.length > 0) {
      const priceUsd = pairs[0].priceUsd;
      const liquidityUsd = pairs[0].liquidity.usd;
      const fdv = pairs[0].fdv;

      // Update state with the fetched data
      setPrice(priceUsd);
      setLiquidity(formatValue(liquidityUsd));
      setFdv(formatValue(fdv));

      if (!isNaN(fdv) && circulatingSupply !== null) {
        const calculatedMarketCap = circulatingSupply * priceUsd;
        setMarketCap(formatValue(calculatedMarketCap));
      } else {
        console.error("Invalid FDV or circulating supply value");
      }
    } else {
      console.error("No pairs found in the response");
    }
  } catch (error) {
    console.error("Error fetching token data:", error);
  }
};

  useEffect(() => {
    const interval = setInterval(fetchTokenData, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
    // eslint-disable-next-line
  }, []);

  const coinGeckoId = "pepefork";

  const [ethBalance, setEthBalance] = useState<number | null>(null);

  const [holdersCount, setHoldersCount] = useState<number | null>(null);
  const apiKey = "cqt_rQmTdhFDM7HhbxXwmHYdYTHjjQwv"; // Replace with your Covalent API key

  const [marketCap, setMarketCap] = useState<string | null>(null);

  const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;

  // Ethereum address to fetch balance for
  const ethereumAddress = "0xD106dE5cD9A2954dAa48FCCA338DECC8A092c051";

  // Fetch ETH balance from Etherscan API
const fetchEthBalance = async () => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=account&action=balance&address=${ethereumAddress}&tag=latest&apikey=${etherscanApiKey}`
    );

    if (response.data && response.data.result !== undefined) {
      // Convert balance from wei to ETH
      const balanceInEth: number = Number(response.data.result) / 1e18;
      setEthBalance(Number(balanceInEth.toFixed(2)));
    } else {
      console.error("Invalid response data received:", response.data);
    }
  } catch (error) {
    console.error("Error fetching ETH balance:", error);
  }
};

  useEffect(() => {
    const interval = setInterval(fetchEthBalance, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
   // eslint-disable-next-line
  }, []);

  const fetchCirculatingSupply = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`
      );
      const data = response.data;

      if (data.market_data && data.market_data.total_supply) {
        // Fetch balance of the dead wallet
        const deadWalletBalanceResponse = await axios.get(
          `https://api.etherscan.io/api?module=account&action=balance&address=${deadWalletAddress}`
        );
        const deadWalletBalance =
          Number(deadWalletBalanceResponse.data.result) / 1e18;

        if (!isNaN(deadWalletBalance)) {
          const totalSupply = parseFloat(data.market_data.total_supply);
          const circulatingSupplyValue = totalSupply - deadWalletBalance;

          if (!isNaN(circulatingSupplyValue)) {
            const roundedCirculatingSupply = Math.floor(circulatingSupplyValue);
            setCirculatingSupply(roundedCirculatingSupply);
          } else {
            console.error(
              "Invalid circulating supply value:",
              circulatingSupplyValue
            );
          }
        } else {
          console.error("Invalid dead wallet balance");
        }
      } else {
        console.error("Total supply data not available");
      }
    } catch (error) {
      console.error("Error fetching circulating supply:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchCirculatingSupply, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount

    // eslint-disable-next-line
  }, []);

  const fetchHoldersCount = async () => {
    // Define the endpoint URL and parameters
    const url =
      "https://api.covalenthq.com/v1/eth-mainnet/tokens/0x6A7eFF1e2c355AD6eb91BEbB5ded49257F3FED98/token_holders_v2/";
    const params: {
      key: string;
      "page-number": string; // Convert the page number to string
    } = { key: apiKey, "page-number": "0" };

    try {
      // Make an initial request to get the first page of results
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      const result = await response.json();

      // Extract the total number of pages from the response
      const numPages = Math.floor(
        result.data.pagination.total_count / result.data.pagination.page_size
      );

      // Create an empty array to store the token holders
      let tokenHolders: any[] = [];

      // Iterate through all the pages of results and append the token holders to the array
      for (let page = 0; page < numPages; page++) {
        params["page-number"] = String(page); // Convert page number to string
        const pageResponse = await fetch(
          `${url}?${new URLSearchParams(params)}`
        );
        const pageResult = await pageResponse.json();
        tokenHolders = tokenHolders.concat(pageResult.data.items);

        // Set the holders count on the last page
        if (page === numPages - 1) {
          setHoldersCount(tokenHolders.length);
        }
      }
    } catch (error) {
      console.error("Error fetching holders count:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchHoldersCount, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <HorizontalMarquee />
        <div className="antialiased flex items-center justify-center sm:mt-[5%] mt-10">
          <h1
            className="flex text-[#F2C572] font-bold text-[16px] justify-center items-center text-center 
            leading-tight lg:leading-[4rem] md:text-4xl lg:text-6xl antialiased "
          >
            BUILDING GENERATIONAL WEALTH...
            <br />
            ONE ANON AT A TIME!
          </h1>
        </div>
        <div>
          <h3 className="text-slate-300 justify-center text-center px-5 text-[10px] mt-3 mb-12 md:mt-6 md:text-xl">
            &quot;DEAR <span className="text-[#F2C572]">ANON</span>, BE THE CHANGE
            YOU WANT TO SEE IN <span className="text-[#F2C572]">CRYPTO</span>.&quot;
          </h3>
        </div>

        {/* Card Section */}
        <div className="relative mb-20 md:mb-28">
          <div
            className="absolute blur-sm md:blur-md -inset-0.5 transition duration-200 bg-gradient-to-r
    from-[#C6FFDD]
    via-[#FBD786]
    to-[#f7797d] w-full flex flex-row items-center rounded-xl md:flex-row md:max-w-xl mt-3 md:mt-10 opacity-50"
          ></div>
          <div
            className="w-full flex flex-row items-center rounded-xl md:flex-row md:max-w-xl 
          shadow-2xl bg-[#262626] bg-opacity-40 backdrop-filter backdrop-blur-lg
      transition-transform transform hover:scale-110 border border-[#F2C572] mt-3 md:mt-10 overflow-hidden md:px-8 px-4"
          >
            <div className="w-full md:max-w-xl flex-col justify-between leading-normal">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold md:text-5xl pt-2 md:pt-5">
                  O<span className="text-[#F2C572]">A</span>T
                </h3>
                <div className="flex mt-[-5%] relative">
                  <div className="absolute top-0 left-0 rounded-full w-10 h-10 md:w-20 md:h-20 bg-[#F2C572] mx-6 md:mx-12 my-1 md:my-2 opacity-40 shadow-lg"></div>
                  <div className="absolute top-0 left-0 rounded-full w-10 h-10 md:w-20 md:h-20 bg-[#BF8924] opacity-40 shadow-lg"></div>
                </div>
                <Image
                  className="w-4 md:w-6 mt-3 md:mt-6"
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
              <div className="flex justify-center mt-3 md:mt-4">
                <h3 className="text-[12px] md:text-xl font-bold drop-shadow-md">
                  0xf951ead486490bd64193fd2ea475697a9fd5d582
                </h3>
              </div>
              <div className="flex justify-between px-7 md:px-11 mt-2 md:pt-1">
                <div>
                  <h6 className="text-[8px] md:text-xs text-[#F2C572]">TS</h6>
                  <h4 className="text-[10px] md:text-[18px] font-medium">
                    420,690,000
                  </h4>
                </div>
                <div>
                  <h6 className="text-[8px] md:text-xs text-[#F2C572]">CS</h6>
                  <h4 className="text-[10px] md:text-[18px] font-medium">
                      <p>{circulatingSupply
                    ? Number(circulatingSupply).toLocaleString()
                    : <span className="text-sm">Loading...</span>}</p>
                  </h4>
                </div>
              </div>
              <div className="flex justify-between px-20 md:px-28 mt-2 md:pt-2">
                <div className="flex items-center justify-center">
                  <h6 className="pr-1 md:pr-1 text-[8px] md:text-sm text-slate-300">
                    TAX
                  </h6>
                  <h4 className="text-[12px] md:text-2xl text-[#F2C572] font-bold">
                    0/2
                  </h4>
                </div>
                <div className="flex items-center">
                  <h6 className="text-[8px] md:text-sm text-slate-300">BBW</h6>
                  <h4 className="px-1 md:px-1 text-[#F2C572] text-[12px] font-bold md:text-2xl">
                    {ethBalance !== null ? ethBalance : <span className="text-sm">Loading...</span>}
                  </h4>
                  <h6 className="text-[10px] md:text-base font-medium">ETH</h6>
                </div>
              </div>

              <div className="flex justify-between px-7 md:px-11 pt-2 md:pt-3 pb-2 md:pb-5">
                <div className="flex items-center">
                  <h6 className="text-[8px] md:text-xs mr-1 md:mr-2 text-[#F2C572]">
                    CONTRACT
                  </h6>
                  <h1 className="text-[12px] md:text-lg">RENOUNCED</h1>
                </div>
                <div className="flex items-center">
                  <h6 className="text-[8px] md:text-xs text-[#F2C572] mr-[0.25rem]">
                    LP
                  </h6>
                  <Image
                    className="w-1 md:w-2 mr-1 md:mr-2"
                    src="/img/lock.svg"
                    alt=""
                    width="10"
                    height="0"
                  />
                  <h4 className="text-[12px] md:text-lg">23.12.2030</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:h-px h-[0.05rem] w-full md:w-[50%] my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="grid grid-cols-5 mt-5 w-full divide-x md:w-[50%] md:mb-28 mb-14 gap-x-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="opacity-70 text-xs md:text-base">Price</div>
              <div className="flex items-center text-lg font-semibold">
                <div className="text-sm md:text-lg">
                  {price != null ? `$${price}` : <span className="text-sm">Loading...</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="opacity-70 text-xs md:text-base">Holders</div>
              <div className="flex items-center text-lg font-semibold">
                <div className="text-sm md:text-lg">
                  {holdersCount
                    ? Number(holdersCount).toLocaleString()
                    : <span className="text-sm">Loading...</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="opacity-70 text-xs md:text-base">Market Cap</div>
              <div className="flex items-center text-lg font-semibold">
                <div className="text-sm md:text-lg">
                  {marketCap != null ? `$${marketCap}` : <span className="text-sm">Loading...</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="opacity-70 text-xs md:text-base">Liquidity</div>
              <div className="flex items-center text-lg font-semibold">
                <div className="text-sm md:text-lg">
                  {liquidity != null ? `$${liquidity}` : <span className="text-sm">Loading...</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="opacity-70 text-xs md:text-base">Fdv</div>
              <div className="flex items-center text-lg font-semibold">
                <div className="text-sm md:text-lg">{fdv != null ? `$${fdv}` : <span className="text-sm">Loading...</span>}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Head>
        <title>OAT | One Anon at a Time</title>
      </Head>
    </div>
  );
}
