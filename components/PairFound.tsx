import React, { useState } from "react";

interface PairInformationProps {
  pairAddress: string;
  loading: boolean;
}



function PairInformation({ pairAddress, loading }: PairInformationProps) {

      const divStyle = {
        opacity: pairAddress !== "" && !loading ? 1 : 0,
        transform: pairAddress !== "" && !loading ? "scale(1.0)" : "scale(0)",
        transition: "opacity 1s, transform 1s",
        
      };

  return (
    <div
      style={divStyle}
      className={`relative flex-col rounded-2xl w-full shadow-lg 
              drop-shadow-2xl px-5 py-5 shadow-black/50 mb-8`}
    >
      {pairAddress !== "" && !loading && (
        <div>
          <h4 className="text-2xl mb-3 text-[#fafafa] font-medium text-left">
            Pair found
          </h4>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                height="30px"
                width="30px"
              />
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                height="30px"
                width="30px"
                className="mr-2"
              />
              <h3>OAT / WETH</h3>
            </div>
            <div>100</div>
          </div>

          <button
            className="rounded-full w-full justify-center
            bg-[#f2c572c1] py-3 mt-6 text-center font-bold text-base transform 
            active:scale-y-75 transition-transform"
          >
            <span className="drop-shadow-sm">CONTINUE</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default PairInformation;
