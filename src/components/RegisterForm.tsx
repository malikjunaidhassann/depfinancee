export default function RegisterForm() {
    return (
      <div className="max-w-4xl w-full mx-auto grid gap-4 p-4">
        <h1 className="font-poppins-bold text-dark text-center text-[3rem] max-sm:text-[1rem] font-bold">
          Complete Loan Application
        </h1>
  
        <form className="w-full">
          {/* Personal Details */}
          <div className="grid gap-5">
          <p className=" text-gray-600">
          *Application takes less than 5 Minutes
        </p>
            <h2 className="font-poppins-bold text-dark py-2 text-[1.6rem] max-sm:text-[0.9rem] font-bold">
              Personal Details
            </h2>
  
            <div className="flex items-center gap-3">
              <label htmlFor="title" className="sr-only">Title</label>
              <select id="title" className="max-w-xs w-full p-2 border border-gray-200 rounded-md" aria-label="Select your title">
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Other">Other</option>
              </select>
            </div>
  
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="saId" className="sr-only">SA ID number</label>
                <input
                  id="saId"
                  type="number"
                  placeholder="SA ID number"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="nationality" className="text-dark">Nationality</label>
                <select id="nationality" className="max-w-xs w-full p-2 border border-gray-200 rounded-md" aria-label="Select your nationality">
                  <option value="ZA">South Africa</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="IN">India</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Password */}
          <div className="grid gap-5 mt-6">
            <h2 className="font-poppins-bold text-dark py-2 text-[1.6rem] max-sm:text-[0.9rem] font-bold">
              Create Password
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  aria-required="true"
                  className="max-w-md w-full h-14 px-3 rounded-md shadow-sm border border-gray-200"
                />
              </div>
            </div>
          </div>
  
          {/* Terms */}
          <div className="flex items-center gap-2 mt-6">
            <input 
              id="terms" 
              type="checkbox" 
              defaultChecked 
              className="accent-teal-500" 
              aria-describedby="terms-description"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Accept <a href="/terms" className="text-teal-600 font-medium hover:underline">terms and conditions</a>
            </label>
          </div>
  
          <p id="terms-description" className="text-gray-600 mt-4">
            I hereby declare that all information submitted is correct and to the best of my knowledge...
          </p>
  
          {/* Button */}
          <button
            type="submit"
            className="max-w-xs w-full bg-teal-600 text-white font-bold text-lg py-3 px-6 rounded-xl mt-6 shadow hover:bg-teal-700 transition max-sm:text-sm max-sm:py-2 max-sm:px-4"
            aria-label="Proceed to next step of loan application"
          >
            Next Step
          </button>
        </form>
      </div>
    );
  }
  