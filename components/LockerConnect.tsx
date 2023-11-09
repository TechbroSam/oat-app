import React, { useState } from "react";

function WalletButton() {
  const [connected, setConnected] = useState(false);
  

  const handleConnectWallet = () => {
    // You would typically add logic here to connect the wallet
    // For this example, we'll just set the connected state to true.
    setConnected(true);
  };

  return (
    <div
      className={`w-full py-2 px-4 justify-center flex items-center flex-col text-center`}
      onClick={handleConnectWallet}
    >
      
        {connected ? (
          <>
            <div className="w-full flex flex-col items-center mb-8 mt-6">
              <p className="md:text-base text-[#fafafa] mb-3">
                Enter the Uniswap V2 pair address youd like to lock liquidity
                for
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
                />
              </div>
              <p className="text-xs font-normal text-[#b9babb]">
                e.g. 0xa43fe16908251ee70ef74718545e4fe6c5ccec9f
              </p>
            </div>
          </>
        ) : (
          <button
            className="bg-neutral-900 rounded-2xl flex text-center border-[0.0015rem]  
          font-bold text-sm text-[#F2C572] hover:bg-[#20190d] py-2 px-4
          w-fit justify-center border-[#F2C572] mt-6 mb-8 transform active:scale-y-75 transition-transform"
          >
            Connect Wallet
          </button>
        )}
      
    </div>
  );
}

export default WalletButton;
