import Link from "next/link";

function MobileMenu() {
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

        <button 
          className="mx-auto w-3/5 px-6 py-2 rounded-lg bg-gray-100 text-teal-500 font-semibold text-sm 
        hover:bg-dark hover:text-teal-500 transition"
          aria-label="Navigate to login page"
          type="button"
        >
          Login
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;
