'use client';  


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, Phone, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Logo from "../../public/depfin.png";
import { useRouter } from "next/navigation";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  return (
    <header className="w-full sticky top-0 z-30 bg-white font-sans">
      <div className="flex justify-evenly items-center w-[95%] mx-auto md:w-full py-2">
        {/* Logo */}
        <Link href="/" className="relative w-[250px] h-[110px] cursor-pointer -ml-6 md:ml-0">
          <Image
            src={Logo}
            width={250}
            height={110}
            alt="Depfin Logo"
            priority
            quality={60}
            sizes="(max-width: 768px) 180px, 250px"
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" aria-label="Main navigation">
          <ul className="flex gap-8">
            <li><Link href="/" className="text-gray-900 text-[15px] hover:text-teal-500 transition">Home</Link></li>
            <li><Link href="/personal/business/loan/apply" className="text-gray-900 text-[15px] hover:text-teal-500 transition">Apply online</Link></li>
            <li><Link href="/about" className="text-gray-900 text-[15px] hover:text-teal-500 transition">About us</Link></li>
            <li><Link href="/solutions" className="text-gray-900 text-[15px] hover:text-teal-500 transition">Solutions</Link></li>
            <li><Link href="/blogs" className="text-gray-900 text-[15px] hover:text-teal-500 transition">Blogs</Link></li>
            <li><Link href="/contact" className="text-gray-900 text-[15px] hover:text-teal-500 transition">Contact us</Link></li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <Link href="tel:0875107793" className="flex items-center gap-1 text-gray-900 hover:text-teal-500 transition" aria-label="Call us at 0875107793">
            <Phone size={20} />
            <span className="hidden md:inline">0875107793</span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={open}
            type="button"
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>

          {/* Desktop Login Button */}
          <button 
            className="hidden md:inline px-6 py-2 rounded-lg bg-gray-100 text-teal-500
           font-semibold text-sm bg-dark hover:text-teal-500 transition"
            onClick={() => router.push('/login')}
            aria-label="Navigate to login page"
            type="button"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && <MobileMenu />}
    </header>
  );
}

export default Header;
