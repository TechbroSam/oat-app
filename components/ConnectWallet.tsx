
import React, { useState } from "react";

function WalletButton() {
  const [connected, setConnected] = useState(false);
  const contractAddress = "0xD106...c051"; // Replace with the actual contract address when connected

  const handleConnectWallet = () => {
    // You would typically add logic here to connect the wallet
    // For this example, we'll just set the connected state to true.
    setConnected(true);
  };

  return (
    <button
      className={`flex flex-row justify-between items-center cursor-pointer 
        hover:bg-[#3f3f3f] hover:rounded-2xl py-2 px-4 hover:bg-opacity-30 
        hover:drop-shadow-2xl hover:shadow-2xl`}
      onClick={handleConnectWallet}
    >
      <div className="flex flex-row justify-between md:space-x-2 items-center">
        {connected ? (
          <>
            <div className="text-xs md:text-base mr-1">{contractAddress}</div>
            <div>
              <img className="w-4 md:w-6" src="/img/disconnect.svg" alt="Connected" />
            </div>
          </>
        ) : (
          <div className="flex items-center text-center justify-center">
            <>
              <h4 className="hidden md:block text-xs md:text-base justify-center">
                Connect Wallet
              </h4>
              <h4
                className="block md:hidden text-xs
          justify-center"
              >
                Connect
              </h4>
            </>
          </div>
        )}
      </div>
    </button>
  );
}

export default WalletButton;
