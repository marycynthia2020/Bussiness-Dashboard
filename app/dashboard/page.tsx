"use client";
import Charts from "@/components/molecules/Charts";
import Navbar from "@/components/organisms/Navbar";
import MobileMenu from "@/components/organisms/MobileMenu";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <div className="w-4/5 h-full lg:hidden">{isOpen && <MobileMenu />}</div>
      <div className="p-4 flex justify-between">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="px-4">
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
