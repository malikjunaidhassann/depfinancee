"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { calculateLoanRepaymentMonthly } from "../Services/Calculator";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slice";
import Link from "next/link";
import { applyForLoan } from "../Services/Auth";
import dynamic from "next/dynamic";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

// Remove ThreeCircles import since 'react-loader-spinner' is missing or not installed
const Application: React.FC = () => {
  const userData = useSelector(selectUser);
  const [isVerified, setIsVerified] = useState(false);
  const [employmentStatus, setEmployeeStatus] = useState("");
  const [value, setValue] = useState(30000);
  const [grossIncome, setGrossIncome] = useState("");
  const [terms, setTerms] = useState(2);
  const [loading, setLoading] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [isBlackListed, setIsBlackListed] = useState("");
  const [isInDebt, setIsInDebt] = useState("");
  const [repaymentMethod, setRepaymentMethod] = useState("");
  const [loanAmountError, setLoanAmountError] = useState("");
  const router = useRouter();

  const rate = 6;
  const monthlyRepayment = calculateLoanRepaymentMonthly(value, rate, terms);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (newValue < 29999) {
      setLoanAmountError("Loan amount must be at least R 30,000");
      setValue(newValue);
    } else {
      setLoanAmountError("");
      setValue(newValue);
    }
  };

  const increase = () => setTerms(terms + 1);
  const decrease = () => setTerms(terms > 1 ? terms - 1 : terms);

  const result = Math.random().toString(36).substring(2, 8).toUpperCase();
  const ref_no = userData && `${userData.lastName[0].toUpperCase()}${result}`;

  const sendEmail = () => {
    axios.get(
      `https://depfinfinance.co.za/api/sendmail?email=${userData?.email}&name=${userData.firstName}${userData.lastName}&ref_no=${ref_no}&amount=${value}&repayment=${monthlyRepayment}&type=${loanType}&term=${terms}&rate=${rate}&method=${repaymentMethod}`
    );
  };

  const senAdminEmail = () => {
    axios.get(
      `https://depfinfinance.co.za/api/sendadmin?name=${userData.firstName}${userData.lastName}&ref_no=${ref_no}&amount=${value}&repayment=${monthlyRepayment}&type=${loanType}&term=${terms}&rate=${rate}&method=${repaymentMethod}`
    );
  };

  const applicationData = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    ID_number: userData.idNumber,
    ref_no: ref_no,
    email: userData.email,
    date_created: new Date().toLocaleString(),
    phone_number: userData.phoneNumber,
    gross_income: grossIncome,
    employment_status: employmentStatus,
    is_black_listed: isBlackListed,
    is_in_debt: isInDebt,
    status: "pending",
    loan_type: loanType,
    repayment_method: repaymentMethod,
    loan_amount: value,
    date: new Date().toLocaleString(),
    terms,
    rate: rate,
    monthly_repayment_amount: monthlyRepayment,
    uid: userData.uid,
  };

  const apply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loanAmountError)
      return toast.error("Loan amount must be at least R 30,000");

    if (
      !loanType ||
      !employmentStatus ||
      !isBlackListed ||
      !isInDebt ||
      !repaymentMethod ||
      !grossIncome ||
      !value ||
      !terms ||
      !monthlyRepayment
    )
      return toast.error("Please fill all the fields");

    setLoading(true);

    await applyForLoan(ref_no, loanType, applicationData)
      .then((res: any) => {
        if (!res.error) {
          toast.success("Loan application submitted successfully!");
          sendEmail();
          senAdminEmail();
          setLoading(false);
          setTimeout(() => {
            router.push("/auth/profile");
          }, 3500);
        } else {
          toast.error("Loan application failed");
          setLoading(false);
        }
      })
      .catch((err: any) => {
        toast.error("Error submitting application");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto grid gap-4 p-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Next Step</h2>
      <p className="text-center text-gray-500">*Application takes less than 5 minutes</p>

      <form
        onSubmit={apply}
        className="flex flex-col md:flex-row gap-6 w-full"
      >
        {/* Personal Details */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-xl font-semibold text-gray-900">Personal Details</h3>

          <div className="flex items-center gap-3">
            <span>Employment Status</span>
            <select
              className="border p-2 rounded w-48"
              value={employmentStatus}
              onChange={(e) => setEmployeeStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self employed">Self employed</option>
              <option value="Retired">Retired</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <input
            type="number"
            className="w-72 p-3 rounded shadow-md border"
            value={grossIncome}
            required
            onChange={(e) => setGrossIncome(e.target.value)}
            placeholder="Gross income (R30000)"
          />

          <div className="grid gap-4">
            <div>
              <span>Are you blacklisted?</span>
              <select
                className="block border p-2 rounded w-48"
                value={isBlackListed}
                onChange={(e) => setIsBlackListed(e.target.value)}
              >
                <option value="">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <span>Are you in financial debt?</span>
              <select
                className="block border p-2 rounded w-48"
                value={isInDebt}
                onChange={(e) => setIsInDebt(e.target.value)}
              >
                <option value="">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <span>Preferred repayment method</span>
              <select
                className="block border p-2 rounded w-64"
                value={repaymentMethod}
                onChange={(e) => setRepaymentMethod(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Debit order">Debit Order</option>
                <option value="Direct deposit">Direct deposit</option>
                <option value="Salary payment">Salary payment</option>
                <option value="Bank standing order">Bank standing order</option>
                <option value="Post dated check">Post dated check</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loan Calculator */}
        <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full">
          <h4 className="text-lg font-semibold text-gray-900 text-center mb-4">
            Loan Calculator
          </h4>

          <div className="flex items-center gap-3 mb-3">
            <span>Loan Type</span>
            <select
              className="border p-2 rounded w-48"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Personal loan">Personal Loan</option>
              <option value="Business loan">Business Loan</option>
              <option value="Consolidation loan">Consolidation Loan</option>
              <option value="Mortgage loan">Mortgage Loan</option>
              <option value="General loan">General Loan</option>
            </select>
          </div>

          <input
            className="w-full p-3 rounded shadow-md border mb-2"
            type="number"
            value={value}
            onChange={handleChange}
            step={50}
            min={30000}
            placeholder="Enter Loan Amount (R 30000 minimum)"
            required
          />
          {loanAmountError && (
            <p className="text-red-500 text-sm">{loanAmountError}</p>
          )}

          <div className="flex justify-between items-center shadow-md rounded-lg bg-gray-100 p-3 my-4">
            <div className="flex flex-col">
              <label>Period (years)</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow text-teal-500"
                  onClick={decrease}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-14 text-center border-none bg-transparent"
                  value={terms}
                  min={1}
                  max={1000}
                  onChange={(e) => setTerms(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow text-teal-500"
                  onClick={increase}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Monthly Payment</label>
              <p className="font-semibold">R {monthlyRepayment}</p>
            </div>
          </div>

          <ReCAPTCHA
            sitekey="6LcoOvYeAAAAAPqz2GvBd_D2Jr0l7C6uZ1LqU0Zt"
            onChange={() => setIsVerified(!isVerified)}
          />

          {loading ? (
            <div className="grid place-items-center my-4">
              {/* <ThreeCircles color="#01C5C4" height={60} width={60} /> */}
            </div>
          ) : (
            isVerified && (
              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg bg-teal-500 text-white font-bold hover:bg-teal-600 transition"
              >
                Submit Application
              </button>
            )
          )}

          <small className="block text-gray-600 mt-2">
            *Loans are calculated at a 6% interest rate
          </small>

          <div className="flex items-center gap-2 mt-3">
            <input type="checkbox" defaultChecked />
            <Link href="/terms">
              <a className="text-sm text-gray-700">
                Accept <span className="text-teal-600">terms and conditions</span>
              </a>
            </Link>
          </div>
        </div>
      </form>

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default Application;
