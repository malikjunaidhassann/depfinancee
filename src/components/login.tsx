"use client";
// components/Login.jsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toasts
import { login } from "../redux/slice";
import { userLogin } from "../Services/Auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const SignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");
    setLoading(true);

    try {
      const res : any = await userLogin(email, password);
      if (!res.error) {
        dispatch(login(res.data));
        toast.success("Login Successful");
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container w-full min-h-[550px] flex items-center justify-center max-w-[1250px] mx-auto font-poppins-regular md:h-full">
      <div className="form__container max-w-[400px] w-full h-[400px] flex flex-col items-center p-8">
        <div className="top__header text-center">
          <h1 className="font-poppins-bold text-teal-500 text-4xl w-full pb-5 md:text-3xl">Login</h1>
        </div>

        <form className="w-full flex flex-col items-center justify-center" onSubmit={SignIn}>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            aria-describedby="email-error"
            className="max-w-[350px] w-full h-[50px] p-3 my-2 border border-gray-300 outline-none rounded-md"
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            aria-describedby="password-error"
            className="max-w-[350px] w-full h-[50px] p-3 my-2 border border-gray-300 outline-none rounded-md"
          />

          <div className="forget__password self-end py-2">
            <Link href="/auth/reset" className="text-gray-800 text-base">
              Forgot password ?
            </Link>
          </div>

          {loading ? (
            <div className="loaderWrapper flex justify-center items-center h-[60px] my-2">
{/*               <ThreeCircles
                color="#01C5C4"
                height={60}
                width={60}
                ariaLabel="three-circles-rotating"
              /> */}
            </div>
          ) : (
            <button 
              type="submit" 
              className="w-full h-[50px] text-xl my-2 cursor-pointer bg-teal-500 text-white border-none outline-none rounded-md"
              aria-label="Sign in to your account"
            >
              Login
            </button>
          )}
        </form>

        <div className="sign__up self-center py-2">
          <Link href="/signup" className="text-gray-800 text-base">
            New user ? <span className="text-teal-500">Register</span>
          </Link>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  </div>
  );
}

export default Login;