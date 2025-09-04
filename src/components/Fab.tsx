import Link from "next/link"
import { MessageCircle } from "lucide-react"

function Fab() {
  return (
    <div
      className="
        fixed w-[60px] h-[60px] bottom-10 right-10
        bg-[#0C9] text-white rounded-full text-center
        shadow-md
        md:right-4
      "
    >
      <Link
        href="https://api.whatsapp.com/send?phone=27781293022"
        aria-label="whatsapp"
        className="
          text-white w-full h-full grid place-items-center text-4xl
        "
      >
        <MessageCircle size={48} color="white" />
      </Link>
    </div>
  )
}

export default Fab
