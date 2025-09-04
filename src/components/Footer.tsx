import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-white py-10 mt-20">
      {/* Top text */}
      <h2 className="text-[12px] text-center px-4 mb-6">
        Startup Business Loans | Blacklisted Loans & Short Term Loans Cape Town | Instant Online Loans South Africa
      </h2>

      {/* Main container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 mt-20">
        {/* Logo / Title */}
        <div>
          <h3 className="text-2xl font-medium">Depfin Finance</h3>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-6 text-sm font-poppins-bold font-bold">
            <li>
              <Link href="/" className="hover:text-teal-400 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/personal/business/loan/apply" className="hover:text-teal-400 hover:underline">
                Apply online
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:text-teal-400 hover:underline">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-teal-400 hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-teal-400 hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources + Socials */}
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-6 text-sm font-poppins-bold font-bold">
            <li>
              <Link href="/conflictofinterest" className="hover:text-teal-400 hover:underline">
                Conflict of Interest management
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal-400 hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-teal-400 hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy" className="hover:text-teal-400 hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.facebook.com/Depfin-Finance-Loans-100582409291663"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500"
            >
              <span className="text-white text-sm">FB</span>
            </a>
            <a
              href="https://twitter.com/DepfinL"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500"
            >
              <span className="text-white text-sm">TW</span>
            </a>
            <a
              href="https://www.linkedin.com/in/palesa-namhla-b19254236/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500"
            >
              <span className="text-white text-sm">LI</span>
            </a>
            <a
              href="https://www.instagram.com/kimlorna46/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500"
            >
              <span className="text-white text-sm">IG</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        <small>
          Copyright &copy; <span>{new Date().getUTCFullYear()}</span> Depfin Finance
        </small>
      </div>
    </footer>
  )
}
