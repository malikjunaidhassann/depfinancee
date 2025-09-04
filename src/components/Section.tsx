import Image from "next/image"
import { CheckIcon } from "lucide-react"
import Hero from "../../public/herobgimg.webp"

function Section() {
  return (
    <div className="w-full h-auto p-5">
      <div className="max-w-[1250px] mx-auto relative grid">
        {/* Hero Section */}
        <div className="relative w-full max-w-[1250px] mx-auto overflow-hidden min-h-[350px]">
          <Image
            src={Hero}
            alt="Hero background"
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="object-cover rounded-lg"
          />
          <h2 className="absolute top-[10%] left-[5%] z-20 text-[#01c5c4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[600px] leading-tight font-bold">
            Need a <span className="text-white">loan?</span> Think{" "}
            <span className="text-white">Depfin Finance</span>
          </h2>
        </div>

        {/* Introduction Section */}
        <div className="max-w-[800px] w-full p-5 bg-white shadow-md rounded-lg flex flex-col justify-center gap-5 mt-[-40px] ml-5 relative">
          <p className="text-sm md:text-lg lg:text-xl">
            At Depfin Finance we offer affordable and easy to manage loans of up
            to R10 Million with ideal repayment terms. Our transparent loan
            products and services ensures that you get what you pay for with no
            hidden costs. We make managing your loan easy by allowing you access
            to your loan account at any time. Our affordability assessment
            process also considers the best interests of our customers.
          </p>

          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#063940] uppercase">
            We are able to offer the best loans to match clients requirements.
          </h3>

          <p className="text-sm md:text-lg lg:text-xl">
            24 hours approval on all applications. Simple online application
            takes less than 5 minutes to complete. Give us a try and see how
            satisfied you will be with our fast flexible approval process.
          </p>

          <p className="text-sm md:text-lg lg:text-xl">
            We offer loans at 6% Interest rate, Apply Now for any type of loans
            and you will be glad and be satisfied with our flexibility and fast
            services. Blacklisted and Clients under debt review are qualified to
            apply.
          </p>

          {/* Requirements */}
          <div className="grid">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-[#063940] uppercase mb-5 text-center">
              All You Need to Apply
            </h3>
            <div className="grid gap-2">
              <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl">
                <CheckIcon className="text-[#01c5c4] w-5 h-5" /> SA Identity
                Document
              </span>
              <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl">
                <CheckIcon className="text-[#01c5c4] w-5 h-5" /> Three months
                stamped bank statement
              </span>
              <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl">
                <CheckIcon className="text-[#01c5c4] w-5 h-5" /> Proof of
                residential address
              </span>
              <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl">
                <CheckIcon className="text-[#01c5c4] w-5 h-5" /> Latest pay slip
                from the current employer
              </span>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-[800px] w-full p-8 rounded-lg grid gap-3 place-items-center bg-white shadow-md relative -top-24 justify-self-end">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#063940] uppercase mb-5 text-center">
            Why Choose Depfin Finance?
          </h4>
          <div className="min-h-[200px] w-full flex items-center justify-center">
            {/* Placeholder content */}
            <p className="text-gray-500 text-sm md:text-lg lg:text-xl">Fast and Secure Process · Reasonable Terms and APR · Instant Access Online</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid place-items-center py-12">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#063940] uppercase mb-5 text-center">
            What clients are saying
          </h4>
          <div className="min-h-[400px] w-full flex items-center justify-center">
            {/* Placeholder content */}
            <blockquote className="text-center italic max-w-[600px] text-sm md:text-lg lg:text-xl">
              &ldquo;The team was thorough, transparent and quick as responding and
              answering my questions. We got the loan done in a matter of a few
              days. I am looking forward to building a long lasting business
              relationship with Depfin Finance Loans.&rdquo;
              <br />
              <span className="font-bold">— Harry de Beer</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
