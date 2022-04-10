import { FC, useState } from "react";

const Staking: FC = () => {
  const [poolValue, setPoolValue] = useState(5431);
  const [borrowedValue, setBorrowedValue] = useState(2143);
  const [collaterals, setCollaterals] = useState(3214);
  const [staked, setStaked] = useState(300);
  const [interest, setInterest] = useState(13.56);

  const [toStake, setToStake] = useState(0);
  const [toWithdraw, setToWithdraw] = useState(0);

  const stake = async () => {
    // TODO stake
  }

  const withdraw = async () => {
    // TODO withdraw
  }

  const claimInterest = async () => {
    // TODO claim interest
  }

  return (
    <section className="p-4">
      <h2 className="font-bold text-3xl my-2 underline underline-offset-4 decoration-dashed decoration-2">Staking</h2>

      <div>
        <p className="mb-2">
          Pooled value:&nbsp;
          <span className="font-bold">{ poolValue }</span>
          &nbsp;XCOIN out of which&nbsp;
          <span className="font-bold">{ borrowedValue }</span>
          &nbsp;are borrowed and&nbsp;
          <span className="font-bold">{ poolValue - borrowedValue }</span>
          &nbsp;available.
        </p>

        <p className="mb-2">Collaterals held: <span className="font-bold">{ collaterals }</span> ETH.</p>

        <p className="mb-2">
          You have staked&nbsp;
          <span className="font-bold">{ staked }</span>
          &nbsp;XCOIN and you have accumulated&nbsp;
          <span className="font-bold">{ interest }</span>
          &nbsp;XCOIN in interest.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        <section className="grow">
          <h3 className="font-bold text-2xl">Stake XCoin</h3>

          <form className="flex flex-col gap-3 my-2">
            <input type="number" min={0} value={toStake} className="bg-bg2 border-2 border-bg4"
                   onChange={(event => setToStake(parseFloat(event.target.value) || 0))}/>

            <button className="border-2 border-green-dim p-2 bg-bg_s">Stake</button>
          </form>
        </section>

        <section className="grow">
          <h3 className="font-bold text-2xl">Withdraw</h3>

          <form className="flex flex-col gap-3 my-2">
            <input type="number" min={0} value={toWithdraw} className="bg-bg2 border-2 border-bg4"
                   onChange={(event => setToWithdraw(parseFloat(event.target.value) || 0))}/>

            <button className="border-2 border-green-dim p-2 bg-bg_s">Withdraw</button>
          </form>
        </section>
      </div>

      <section className="my-2">
        <h3 className="font-bold text-2xl my-2">Claim Interest</h3>

        <button className="border-2 border-green-dim p-2 bg-bg_s">Claim { interest } XCOIN</button>
      </section>
    </section>
  )
}

export default Staking;