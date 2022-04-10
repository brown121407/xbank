import React, { FC } from "react";
import { ethers } from "ethers";

interface IBankContext {
  provider?: ethers.providers.JsonRpcProvider;
  contract?: ethers.Contract;
  metamask?: any;
}

export const BankContext = React.createContext<IBankContext>({});

const BankContextProvider: FC = ({ children }) => {
  const context: IBankContext = {}

  if ((window as any).ethereum) {
    context.metamask = (window as any).ethereum;
    context.provider = new ethers.providers.Web3Provider(context.metamask);

    // TODO: Populate context.contract.
  }

  return (
    <BankContext.Provider value={context}>
      { children }
    </BankContext.Provider>
  )
}

export default BankContextProvider;