// calculation.ts

/**
 * Calculate the total loan repayment over the full period
 * @param amount Loan amount
 * @param rate Annual interest rate (percentage)
 * @param years Loan term in years
 * @returns Total repayment amount as a number
 */
export const calculateLoanRepayment = (
    amount: number,
    rate: number,
    years: number
  ): number => {
    const repayment = (amount * (rate * 0.01)) / (years * 12)
    const monthlyRepayment = amount / (years * 12) + repayment
    const totalRepayment = monthlyRepayment * years * 12
    return Number(totalRepayment.toFixed(2))
  }
  
  /**
   * Calculate the monthly loan repayment
   * @param amount Loan amount
   * @param rate Annual interest rate (percentage)
   * @param years Loan term in years
   * @returns Monthly repayment amount as a number
   */
  export const calculateLoanRepaymentMonthly = (
    amount: number,
    rate: number,
    years: number
  ): number => {
    const repayment = (amount * (rate * 0.01)) / (years * 12)
    const monthlyRepayment = amount / (years * 12) + repayment
    return Number(monthlyRepayment.toFixed(2))
  }
  