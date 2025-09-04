"use client";

import { useState, useMemo, ChangeEvent, FormEvent } from "react";
import countryList from "react-select-country-list";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createAccount, getData } from "../Services/Auth";
import { login } from "../redux/slice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

// ✅ Define form state type
interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  title: string;
  idNumber: string;
}

function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    idNumber: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [nationality, setNationality] = useState<string>("South Africa");
  const options = useMemo(() => countryList().getData(), []);

  // ✅ Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit handler
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      phoneNumber,
      title,
      idNumber,
    } = form;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !title ||
      !idNumber
    ) {
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);

    const displayName = `${firstName} ${lastName}`;
    const data = { email, photoURL: "", displayName };
    const userAccount = {
      ...data,
      firstName,
      lastName,
      title,
      phoneNumber,
      idNumber,
    };

    try {
      const res = await createAccount(email, password, data, userAccount);

      if ("user" in res && res.user?.uid) {
        toast.success("Account created successfully");
        const uid = res.user.uid;
        const userData = await getData(uid);

        if (!userData?.error) {
          dispatch(login(userData));
          router.replace("/apply");
        } else {
          toast.error("Something went wrong loading user data");
        }
      } else {
        const message = "error" in res ? res.error : "Account creation failed";
        toast.error(message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] w-full mx-auto grid gap-4 p-4">
      <h2 className="text-3xl text-gray-800 font-bold text-center">
        Complete Loan Application
      </h2>
      <p className="text-center text-gray-600">
        *Application takes less than 5 Minutes
      </p>

      <form onSubmit={handleRegister} className="w-full h-full">
        {/* Personal Details */}
        <div className="grid gap-5 w-full">
          <h3 className="text-xl text-gray-800 py-2">Personal Details</h3>

          {/* Title Select */}
          <div className="flex items-center gap-3">
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="max-w-[200px] w-full p-2 border border-gray-200 rounded-md outline-none"
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
            <input
              type="number"
              name="idNumber"
              placeholder="SA ID number"
              value={form.idNumber}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />

            {/* Nationality */}
            <div className="flex items-center gap-3">
              <label className="text-gray-700">Nationality</label>
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="max-w-[200px] w-full p-2 border border-gray-200 rounded-md outline-none"
              >
                {options.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="grid gap-5 w-full mt-6">
          <h3 className="text-xl text-gray-800 py-2">Create Password</h3>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="max-w-[400px] w-full h-[60px] p-3 rounded-md bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mt-5">
          <input defaultChecked type="checkbox" />
          <Link href="/terms" passHref>
            <span className="text-teal-600 underline cursor-pointer">
              Accept <span className="font-semibold">terms and conditions</span>
            </span>
          </Link>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          I hereby declare that all information submitted is correct and to the
          best of my knowledge...
        </p>

        {/* Loader / Submit */}
        {loading ? (
          <div className="grid place-items-center my-5">
            {/* Loader component here */}
          </div>
        ) : (
          <button
            type="submit"
            className="max-w-[300px] w-full py-3 mt-5 rounded-lg bg-teal-500 text-white font-bold text-base cursor-pointer"
          >
            Next Step
          </button>
        )}
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default RegisterForm;
