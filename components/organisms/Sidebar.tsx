"use client";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const router = useRouter();
  const data = Array(20).fill("overview");

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    window.location.href = ("/login");
  };
  return (
    <div className="rounded-md h-screen overflow-y-auto  p-4 border border-gray-300 bg-[#f6f7f9] ">
      <div className="flex items-center gap-2 mb-6 justify-between">
        <img src="/logo.png" alt="" className="size-10 hidden lg:block" />
        <h2 className="font-bold text-2xl ">Dashboard</h2>
        <AiOutlineLogout className="text-2xl" onClick={handleLogout} />
      </div>
      <div></div>{" "}
      <div className="flex flex-col gap-4">
        {data.map((user, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-gray-300"></div>
            <p>{user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
