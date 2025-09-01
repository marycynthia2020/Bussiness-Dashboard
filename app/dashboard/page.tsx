"use client";
import Charts from "@/components/molecules/Charts";
import Navbar from "@/components/organisms/Navbar";
import MobileMenu from "@/components/organisms/MobileMenu";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathName = usePathname();
  const router = useRouter();

  console.log(pathName);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem("user");
      if (storedItem) {
        try{
          setCurrentUser(JSON.parse(storedItem));
        }catch{
          localStorage.removeItem("user")
        }
      }
    }
  }, []);

  useEffect(()=>{
    if(window.location.pathname === "/dashboard" && currentUser === null) {
      window.location.href = "/login"
    }
  }, [currentUser])

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
