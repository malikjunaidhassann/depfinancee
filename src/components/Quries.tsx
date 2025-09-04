import Image from "next/image"
import { Phone, MessageCircle, Mail } from "lucide-react"

export default function Queries() {
  return (
    <div className="max-w-6xl w-full mx-auto font-sans">
      {/* Heading */}
      <h6 className="font-poppins-bold text-teal-600 text-center text-[2rem] max-sm:text-[1.5rem] font-bold m-20 max-sm:m-10">
        Require more Help?
        <span className="text-dark">
          our advisors are always ready to <br /> assist you.
        </span>
      </h6>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-22 mt-[7rem] max-sm:mt-[3rem] w-full mb-10">
        {/* Contact Info */}
        <div className="w-full relative space-y-6 max-sm:space-y-4">
          {/* Image */}
          <div className="w-full h-[400px] max-sm:h-[250px] relative">
            <Image
              className="rounded-lg object-cover"
              src="https://res.cloudinary.com/devtedcloud/image/upload/q_25/v1685957431/depfin-finance/pexels-photo-8867630_1_hxo02o_1_mxcaaq.webp"
              alt="Require more help for Loan In South Africa"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              priority={false}
            />
          </div>

          {/* Work Hours */}
          <div className="absolute right-0 top-64 max-sm:top-40 max-w-xs w-full h-12 max-sm:h-10 grid place-items-center bg-gray-800 text-white rounded-lg">
            <p className="text-sm md:text-base max-sm:text-xs">Week Day 08:00 - 16:00</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-4 max-sm:gap-2 flex-wrap">
            <div className="flex items-center justify-center gap-3 p-3 max-sm:p-2 bg-gray-100 rounded-lg w-full sm:w-auto">
              <span className="w-8 h-8 max-sm:w-6 max-sm:h-6 grid place-items-center bg-teal-600 text-white rounded-full">
                <Phone size={18} className="max-sm:w-4 max-sm:h-4" />
              </span>
              <a href="tel:+27781293022" className="text-gray-800 max-sm:text-sm">
                27781293022
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 max-sm:p-2 bg-gray-100 rounded-lg w-full sm:w-auto">
              <span className="w-8 h-8 max-sm:w-6 max-sm:h-6 grid place-items-center bg-teal-600 text-white rounded-full">
                <MessageCircle size={18} className="max-sm:w-4 max-sm:h-4" />
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=27781293022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 max-sm:text-sm"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 max-sm:p-2 bg-gray-100 rounded-lg w-full sm:w-auto">
              <span className="w-8 h-8 max-sm:w-6 max-sm:h-6 grid place-items-center bg-teal-600 text-white rounded-full">
                <Mail size={18} className="max-sm:w-4 max-sm:h-4" />
              </span>
              <a
                href="mailto:info@depfinfinance.co.za"
                className="text-gray-800 max-sm:text-sm"
              >
                info@depfinfinance.co.za
              </a>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-4 max-sm:space-y-3 mt-4">
            <h5 className="font-semibold text-lg max-sm:text-base">• Branch Address</h5>
            <p className="text-gray-700 max-sm:text-sm">
              208 De Waal Rd, Southfield, Cape Town, 7800 South Africa.
            </p>
            <h5 className="font-semibold text-lg max-sm:text-base">• Head office address</h5>
            <p className="text-gray-700 max-sm:text-sm">
              Office Ground Flour, The Glen Shopping Centre, C/O Orpen & Letaba
              Road, Eastcliff, Oakdene, Johannesburg, 2190
            </p>
          </div>
        </div>

        {/* FAQs Placeholder */}
        <div className="w-full h-[500px] md:h-[600px] bg-gray-50 border rounded-lg hidden md:block">
          <p className="text-center text-gray-500 py-20">FAQs go here...</p>
        </div>
      </div>
    </div>
  )
}
