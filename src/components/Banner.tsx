"use client";

import { useState, useMemo, useCallback, ChangeEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
// import dynamic from "next/dynamic"
import { calculateLoanRepaymentMonthly } from "../Services/Calculator"
import { setRepayment } from "../redux/slice"
import LoanForm from "./LoanCalculator"

function Banner() {
  const [value, setValue] = useState<number>(30000)
  const [terms, setTerms] = useState<number>(2)
  const rate = 6

  const router = useRouter()
  const dispatch = useDispatch()

  const monthlyRepayment = useMemo(
    () => calculateLoanRepaymentMonthly(value, rate, terms),
    [value, rate, terms]
  )

  const handleValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }, [])

  const decreaseTerms = useCallback(() => {
    setTerms((prev) => (prev > 1 ? prev - 1 : prev))
  }, [])

  const increaseTerms = useCallback(() => {
    setTerms((prev) => prev + 1)
  }, [])

  const addLoanDetails = useCallback(() => {
    dispatch(
      setRepayment({
        amount: value,
        terms,
        rate,
        monthly: monthlyRepayment,
      })
    )
    // router.push("/personal/business/loan/apply")
  }, [dispatch, value, terms, rate, monthlyRepayment, router])
  return (
    <div className="w-full min-h-[550px] p-6 bg-[#e2f2f2] md:h-fit">
      <div className="max-w-[1250px] w-full mx-auto flex flex-col gap-8 md:flex-row md:gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full h-full text-[#063940]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Get a loan from RS 30,000 to R10 Million in minutes at Depfin <span className="hidden md:inline">Finance.</span>
          </h1>

          <Link
            href="/personal/business/loan/apply"
            className="mt-4 md:mt-8 px-4 md:px-8 py-2 md:py-4 rounded-lg bg-[#063940] text-white text-sm md:text-xl font-bold uppercase text-center w-fit hover:bg-[#004d4d] transition-colors duration-200"
            aria-label="Apply for loan now"
          >
            Apply Now!
          </Link>
        </div>
        <LoanForm
          value={value}
          terms={terms}
          handleChange={handleValueChange}
          decrease={decreaseTerms}
          increase={increaseTerms}
          monthlyRepayment={monthlyRepayment}
          addLoanDetails={addLoanDetails}
        />
      </div>
    </div>
  )
}

export default Banner
