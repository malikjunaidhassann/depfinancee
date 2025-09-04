"use client"

import { useSelector } from "react-redux"
import { selectUser } from "@/redux/slice"
import RegisterForm from "@/components/RegisterForm"
import Application from "@/components/Applictaion"

function Form() {
  const user = useSelector(selectUser)

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-6">
      {user ? <Application /> : <RegisterForm />}
    </div>
  )
}

export default Form


