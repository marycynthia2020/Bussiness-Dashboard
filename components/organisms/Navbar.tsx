import { CgArrowLeft } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarProps } from "@/types";


const Navbar = ({isOpen, setIsOpen}:NavbarProps) => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="hidden lg:flex items-center gap-4">
        <CgArrowLeft className="bg-white p-1 text-4xl rounded-lg shadow-md w-14 cursor-pointer" />
        <input
          type="text"
          placeholder="search"
          className="outline-none p-2 w-80 bg-[#ebeaef] rounded-2xl"
        />
      </div>
      <div className="lg:hidden">
        {" "}
        <img src="/logo.png" alt="" className="size-10" />
      </div>

      <div className="flex items-center gap-4  " >
        <IoIosNotificationsOutline className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer" />
        <BiMessageSquareDots className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer" />
        <CiSettings className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer" />
        <div className="lg:hidden" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose className="text-2xl" />: <RxHamburgerMenu className="text-2xl" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
