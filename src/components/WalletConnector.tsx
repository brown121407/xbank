import { FC, useContext, useEffect, useState } from "react";
import { BankContext } from "./BankContextProvider";

const WalletConnector: FC = () => {
  const [address, setAddress] = useState<string>();

  const { provider, metamask } = useContext(BankContext);

  useEffect(() => {
    (async function () {
      if (provider) {
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          const signer = provider.getSigner();
          setAddress(await signer.getAddress());
        }

        metamask.on('accountsChanged', async (accounts: string[]) => {
          if (accounts.length > 0) {
            const signer = provider.getSigner();
            setAddress(await signer.getAddress());
          } else {
            setAddress(undefined);
          }
        });
      }
    })();
  }, []);

  const connectWallet = async () => {
    await provider!.send("eth_requestAccounts", []);
    const signer = provider!.getSigner();
    setAddress(await signer.getAddress());
  };

  return (
    <div>
      { !provider
      ? <p>Your browser doesn't have Metamask installed. 😢</p>
      : (address
        ? <p className="text-ellipsis">Connected: { address }</p>
        : <button className="border-2 border-orange-dim bg-bg2 p-2" onClick={connectWallet}>Connect Wallet</button>
        )
      }
    </div>
  );
}

export default WalletConnector;