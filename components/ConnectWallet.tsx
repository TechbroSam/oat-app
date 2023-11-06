
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
        hover:bg-[#272727] hover:rounded-2xl py-2 px-4 hover:bg-opacity-30 
        hover:drop-shadow-2xl hover:shadow-2xl`}
      onClick={handleConnectWallet}
    >
      <div className="flex flex-row justify-between space-x-2 items-center">
        {connected ? (
          <>
            <div>{contractAddress}</div>
            <div>
              <img src="/img/disconnect.svg" alt="Connected" />
            </div>
          </>
        ) : (
          <div>Connect Wallet</div>
        )}
      </div>
    </button>
  );
}

export default WalletButton;
