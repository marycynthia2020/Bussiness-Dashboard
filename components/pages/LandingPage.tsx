import React from "react";
import LandingCard from "../organisms/LandingCard";
import LayoutImage from "../atoms/Layout-image";

const LandingPage = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 flex gap-20 justify-between items-center">
      <div className="hidden md:block md:w-1/2">
        <LayoutImage />
      </div>
      <div className="w-full md:w-1/2 ">
        <LandingCard />
      </div>
    </div>
  );
};

export default LandingPage;
