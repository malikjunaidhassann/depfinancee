"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { Minus, Plus } from "lucide-react"
// import dynamic from "next/dynamic"

// const Disclaimer = dynamic(() => import("./Disclaimer"), {
//   ssr: false,
//   loading: () => <small>Loading disclaimer...</small>,
// })

interface LoanFormProps {
  value: number
  terms: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  decrease: () => void
  increase: () => void
  monthlyRepayment: number
  addLoanDetails: () => void
}

function LoanForm({
  value,
  terms,
  handleChange,
  decrease,
  increase,
  monthlyRepayment,
  addLoanDetails,
}: LoanFormProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowDisclaimer(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative left-12 max-w-md h-[450px] p-4 bg-white rounded-md font-sans shadow-md md:left-0">
        <h2 className="text-2xl font-medium text-gray-900 text-center mb-5">
          Loan Calculator
        </h2>

        {/* Loan Amount */}
        <div className="flex flex-col gap-2 p-5">
          <div className="flex justify-between">
            <label>Loan Amount</label>
            <p>{`R${value}`}</p>
          </div>
          <input
            id="loanAmount"
            name="loanAmount"
            className="w-full p-2 rounded-md shadow-sm border border-gray-200"
            type="number"
            value={value}
            onChange={handleChange}
            placeholder="Enter Required Loan Amount (R 30000)"
          />
        </div>

        {/* Repayment */}
        <div className="flex justify-between p-3 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col gap-2">
            <label className="font-light text-gray-700">Period (years)</label>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 shadow-sm">
              <span
                onClick={decrease}
                className="bg-white w-6 h-6 rounded-full grid place-items-center cursor-pointer text-teal-600 shadow-sm"
              >
                <Minus size={16} />
              </span>
              <input
                type="number"
                value={terms}
                min={1}
                max={1000}
                onChange={handleChange}
                className="w-14 text-center bg-transparent border-none outline-none"
              />
              <span
                onClick={increase}
                className="bg-white w-6 h-6 rounded-full grid place-items-center cursor-pointer text-teal-600 shadow-sm"
              >
                <Plus size={16} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-light text-gray-700">Monthly payment</label>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 shadow-sm">
              <p>R {monthlyRepayment}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={addLoanDetails}
          className="w-full py-2 mt-4 rounded-lg bg-teal-600 text-white text-xl font-bold hover:bg-teal-700 transition"
        >
          Apply online
        </button>

        <small className="block text-center mt-2 text-gray-500">
          *Loans are calculated at a 6% interest rate
        </small>

        {/* {showDisclaimer && (
          <div className="mt-2 text-center">
            <Disclaimer />
          </div>
        )} */}
      </div>
    </div>
  )
}

export default LoanForm
