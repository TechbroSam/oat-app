import React, { useState } from "react";
import PairInformation from "./PairFound";

function WalletButton() {
  const [connected, setConnected] = useState(false);
   
   const [pairAddress, setPairAddress] = useState("");

   const [loading, setLoading] = useState(false);
  

  const handleConnectWallet = () => {
    // You would typically add logic here to connect the wallet
    // For this example, we'll just set the connected state to true.
    setConnected(true);
  };

  const handlePairAddressChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    setPairAddress(inputValue);

    // Set loading to true when the input changes and is not empty
    setLoading(inputValue.trim() !== "");

    // Simulate asynchronous action (e.g., API call) after 3 seconds
    setTimeout(() => {
      // After 4 seconds, set loading to false
      setLoading(false);
    }, 4000);
  };

  return (
    <div
      className={`w-full py-2 px-4 justify-center flex items-center flex-col text-center`}
      onClick={handleConnectWallet}
    >
      {connected ? (
        <>
          <div className="w-full flex flex-col items-center mb-4 mt-6">
            <p className="md:text-base text-[#fafafa] mb-3">
              Enter the Uniswap V2 pair address youd like to lock liquidity for
            </p>
            <div
              className="rounded-full bg-black inshadow2 flex flex-row justify-between 
            px-4 py-3 items-center w-full text-center"
            >
              <input
                type="text"
                className="w-full placeholder-[#fafafaa1] placeholder:text-base md:text-base 
                  font-normal text-[#fafafa] !outline-none bg-transparent [appearance:textfield] 
                  [&::-webkit-outer-spin-button]:appearance-none justify-center items-center
                  [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Uniswap V2 Pair Address...."
                required
                value={pairAddress}
                onChange={handlePairAddressChange}
              />
            </div>
            <p className="text-xs font-normal text-[#b9babb]">
              e.g. 0xa43fe16908251ee70ef74718545e4fe6c5ccec9f
            </p>
          </div>

          {/* Display loading spinner */}
          {loading && (
            <div
              role="status"
              className="flex flex-col items-center justify-center relative"
            >
              <svg
                aria-hidden="true"
                className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 
                 fill-[#F2C572]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <h5 className="text-base font-normal tracking-wide">
                Finding pair
              </h5>
              <span className="sr-only">Loading...</span>
              <img
                className="absolute flex justify-center text-center items-center bottom-2/4 
                opacity-70 w-6 h-6"
                src="img/liqlock.png"
                height="1.5rem"
                width="1.5rem"
              />
            </div>
          )}

          {/* Conditionally display the div with pair information */}
          <PairInformation pairAddress={pairAddress} loading={loading} />
        </>
      ) : (
        <button
          className="bg-neutral-900 rounded-2xl flex text-center border-[0.0015rem]  
          font-bold text-sm text-[#F2C572] hover:bg-[#20190d] py-2 px-4
          w-fit justify-center border-[#F2C572] mt-6 mb-8 
          transform active:scale-y-75 transition-transform
          "
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletButton;
