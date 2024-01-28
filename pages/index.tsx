import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(
    null
  );
  const deadWalletAddress = "0x000000000000000000000000000000000000dEaD";
  const contractAddress = "0x6982508145454ce325ddbe47a25d4ec3d2311933";

  

  const [price, setPrice] = useState<number | null>(null);
  const coinGeckoId = "pepe";

  const [ethBalance, setEthBalance] = useState<number | null>(null);

 

  const [holdersCount, setHoldersCount] = useState<number | null>(null);
  const apiKey = 'cqt_rQmTdhFDM7HhbxXwmHYdYTHjjQwv'; // Replace with your Covalent API key

  const [marketCap, setMarketCap] = useState<string | null>(null);

  const [liquidity, setLiquidity] = useState<string | null>(null);

  const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;

  // Ethereum address to fetch balance for
  const ethereumAddress = "0xD106dE5cD9A2954dAa48FCCA338DECC8A092c051";

  // Fetch ETH balance from Etherscan API
  const fetchEthBalance = async () => {
    try {
      const response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${ethereumAddress}&tag=latest&apikey=${etherscanApiKey}`
      );

      // Convert balance from wei to ETH
      const balanceInEth: number = Number(response.data.result) / 1e18;
      setEthBalance(Number(balanceInEth.toFixed(2)));
    } catch (error) {
      console.error("Error fetching ETH balance:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchEthBalance, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPrice = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoId}&vs_currencies=usd`
      );
      const data = response.data;

      if (data[coinGeckoId] && data[coinGeckoId].usd) {
        setPrice(data[coinGeckoId].usd);
      } else {
        console.error("Price data not available");
      }
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchPrice, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const fetchHoldersCount = async () => {
    // Define the endpoint URL and parameters
    const url = 'https://api.covalenthq.com/v1/eth-mainnet/tokens/0xb9b450421ce2821252186e0a9f08937aa98bab3a/token_holders_v2/';
    const params: {
      key: string;
      'page-number': string; // Convert the page number to string
    } = { 'key': apiKey, 'page-number': '0' };

    try {
      // Make an initial request to get the first page of results
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      const result = await response.json();

      // Extract the total number of pages from the response
      const numPages = Math.floor(result.data.pagination.total_count / result.data.pagination.page_size);

      // Create an empty array to store the token holders
      let tokenHolders: any[] = [];

      // Iterate through all the pages of results and append the token holders to the array
      for (let page = 0; page < numPages; page++) {
        params['page-number'] = String(page); // Convert page number to string
        const pageResponse = await fetch(`${url}?${new URLSearchParams(params)}`);
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


  const fetchMarketCap = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinGeckoId}`
      );
      const data = response.data;

      if (data.market_data && data.market_data.market_cap) {
        const marketCapValue = Math.floor(data.market_data.market_cap.usd); // Apply Math.floor here
        setMarketCap(
          marketCapValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0, // Force minimum fraction digits to 0
            maximumFractionDigits: 0, // Force maximum fraction digits to 0
          })
        );
      } else {
        console.error("Market cap data not available");
      }
    } catch (error) {
      console.error("Error fetching market cap:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchMarketCap, 5000); // Fetch price every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  const fetchLiquidity = async () => {
    try {
      const tokenAddress = '0xb9b450421ce2821252186e0a9f08937aa98bab3a'; // Replace with the actual token address

      const response = await axios.get(`https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2?query={pairs(where:{token0:"${tokenAddress}"}){id,liquidityUSD}}`);

      const data = response.data;

      if (data && data.data && data.data.pairs && data.data.pairs.length > 0) {
        const liquidityValue = data.data.pairs[0].liquidityUSD;
        setLiquidity(parseFloat(liquidityValue).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
      } else {
        console.error('Liquidity data not available');
      }
    } catch (error) {
      console.error('Error fetching liquidity:', error);
    }
  };

  fetchLiquidity();
}, []);

  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <div className="antialiased flex items-center justify-center sm:mt-[5%] mt-10 md:mt-[10%] lg:mt-[8%]">
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
            "DEAR <span className="text-[#F2C572]">ANON</span>, BE THE CHANGE
            YOU WANT TO SEE IN <span className="text-[#F2C572]">CRYPTO</span>."
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
                    420,690,000,000,000
                  </h4>
                </div>
                <div>
                  <h6 className="text-[8px] md:text-xs text-[#F2C572]">CS</h6>
                  <h4 className="text-[10px] md:text-[18px] font-medium">
                    {circulatingSupply !== null ? (
                      <p>{circulatingSupply.toLocaleString()}</p>
                    ) : (
                      <p>Loading...</p>
                    )}
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
                    {ethBalance !== null ? ethBalance : "Loading..."}
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
        <div className="grid grid-cols-4 mt-5 w-full divide-x md:w-[50%] md:mb-28 mb-14">
          <div className="flex flex-col items-center">
            {price !== null ? (
              <div className="flex flex-col items-center">
                <div className="opacity-70 text-xs md:text-base">Price</div>
                <div className="flex items-center text-lg font-semibold">
                  <div className="text-sm md:text-lg">${price.toFixed(9)}</div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            {holdersCount !== null ? (
              <div className="flex flex-col items-center">
                <div className="opacity-70 text-xs md:text-base">Holders</div>
                <div className="flex items-center text-lg font-semibold">
                  <div className="text-sm md:text-lg">
                    {(Number(holdersCount)).toLocaleString()}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading holders count...</p>
            )}
          </div>

          <div className="flex flex-col items-center">
            {marketCap !== null ? (
              <div className="flex flex-col items-center">
                <div className="opacity-70 text-xs md:text-base">
                  Market Cap
                </div>
                <div className="flex items-center text-lg font-semibold">
                  <div className="text-sm md:text-lg">{marketCap}</div>
                </div>
              </div>
            ) : (
              <p>Loading market cap...</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            {liquidity !== null ? (
              <div className="flex flex-col items-center">
                <div className="opacity-70 text-xs md:text-base">Liquidity</div>
                <div className="flex items-center text-lg font-semibold">
                  <div className="text-sm md:text-lg">{liquidity}</div>
                </div>
              </div>
            ) : (
              <p>Loading liquidity...</p>
            )}
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
