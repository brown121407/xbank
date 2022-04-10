import { FC, useEffect, useState } from "react";

const Loans: FC = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [debt, setDebt] = useState(13);

  useEffect(() => {
    // TODO: Get debt from contract.
  }, []);

  const handleLoanAmountChange = (event) => {
    const amount: number = parseInt(event.target.value) || 0;
    setLoanAmount(amount);
  }

  const getCollateralCost = (loanAmount: number) => {
    // TODO: Get real conversion rate.
    return loanAmount * 0.13;
  }

  const borrow = async () => {
    // TODO: Get loan of `loanAmount` XCOIN.
  }

  const payDebt = async () => {
    // TODO: Pay debt.
  }

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold my-2 underline underline-offset-4 decoration-dashed decoration-2">Loans</h2>

      <section className="my-4">
        <h3 className="text-2xl font-bold">Collateral Loans</h3>

        <div className="flex flex-row flex-wrap gap-2">
          <p className="my-2">
            Borrow
            <input type="number" min={0} value={loanAmount} onChange={handleLoanAmountChange}
                   className="border-2 border-bg4 bg-bg2 mx-2 w-[5rem]"/>
            XCOIN for { getCollateralCost(loanAmount) } ETH.
          </p>

          <button className="border-2 border-green py-0.5 px-2 bg-bg_s" onClick={borrow}>Borrow</button>
        </div>

        <h4 className="text-xl font-bold mt-4 mb-2">Debt</h4>
        <p>You owe us { debt } XCOIN. { debt === 0 && <span>Good job!</span> }</p>
        { debt !== 0 &&
          <button className="my-2 border-2 border-orange-dim py-0.5 px-2 bg-bg_s" onClick={payDebt}>Pay debt</button>
        }
      </section>

      <section className="my-4">
        <h3 className="text-2xl font-bold">Flash Loans</h3>

        <p><span className="text-red">TODO</span>: Add the documentation for how to use flash loans here.</p>
      </section>
    </section>
  )
}

export default Loans;