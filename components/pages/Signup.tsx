import React from "react";
import LayoutImage from "../atoms/Layout-image";
import SignUpForm from "../organisms/SignupForm";

const Signup = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 flex gap-20 justify-between items-center">
      <div className="hidden md:block md:w-1/2">
        <LayoutImage />
      </div>
      <div className="w-full md:w-1/2 ">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;
