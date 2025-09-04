"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";
import { LogOut } from "../Services/Auth";

function MobileMenu() {
  const user = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="fixed top-[100px] left-0 w-full h-screen bg-gray-900 text-white transition-all" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
      <nav className="grid gap-8 py-6" aria-label="Mobile navigation">
        <ul className="flex flex-col items-center gap-8">
          <li><Link href="/" className="text-lg hover:text-teal-400 transition">Home</Link></li>
          <li><Link href="/apply" className="text-lg hover:text-teal-400 transition">Apply online</Link></li>
          <li><Link href="/about" className="text-lg hover:text-teal-400 transition">About us</Link></li>
          <li><Link href="/solutions" className="text-lg hover:text-teal-400 transition">Solutions</Link></li>
          <li><Link href="/contact" className="text-lg hover:text-teal-400 transition">Contact us</Link></li>
        </ul>

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => router.push("/auth/profile")}
              className="mx-auto w-3/5 px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold text-sm hover:bg-teal-600 transition"
              aria-label="Go to profile"
              type="button"
            >
              My Account
            </button>
            <button 
              onClick={() => {
                LogOut();
                dispatch(logout());
              }}
              className="mx-auto w-3/5 px-6 py-2 rounded-lg bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition"
              aria-label="Logout"
              type="button"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => router.push("/login")}
            className="mx-auto w-3/5 px-6 py-2 rounded-lg bg-gray-100 text-teal-500 font-semibold text-sm hover:bg-dark hover:text-teal-500 transition"
            aria-label="Navigate to login page"
            type="button"
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
}

export default MobileMenu;
