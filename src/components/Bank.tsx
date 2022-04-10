import { FC, useContext } from "react";
import { Toaster } from "react-hot-toast";
import WalletConnector from "./WalletConnector";
import Loans from "./Loans";
import Staking from "./Staking";
import { BankContext } from "./BankContextProvider";

const Bank: FC = () => {
  const { metamask } = useContext(BankContext);

  return (
    <main className="sm:my-4 container mx-auto border-b-2 sm:border-2 border-bg3 shadow font-mono text-fg0 bg-bg divide-y divide-solid divide-bg3">
      <Toaster/>
      <div className="px-4 py-4 flex flex-row flex-wrap">
        <div>
          <h1 className="font-bold text-4xl underline underline-offset-4 mb-2">XBank</h1>
          <p>XCoin Bank</p>
        </div>
        <div className="grow-[1]"/>
        <WalletConnector/>
      </div>

      { metamask
      ? <div className="flex flex-col gap-3 divide-y divide-dashed divide-bg3">
          <Loans/>
          <Staking/>
        </div>
      : <p className="text-lg p-4">Please install Metamask.</p>
      }
    </main>
  );
}

export default Bank;