import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign out"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-2 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-2 w-full bg-gray-800"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-4 my-2 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg "
          type="submit"
        >
          {isSignInForm ? "Sign in" : "Sign out"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? signed in now"}
        </p>
      </form>
    </>
  );
};

export default Login;
