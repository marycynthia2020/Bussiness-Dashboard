import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const icons = [
  {
    name: <SiApple />,
    bg: "bg-black",
    text: "text-white",
  },

  {
    name: <FcGoogle />,
    bg: "bg-black",
    text: "",
  },
  {
    name: <FaFacebookF />,
    bg: "bg-blue-600",
    text: "text-white",
  },
];

const SocialIcons = () => {
  return (
    <div className=" flex items-center gap-x-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={` flex items-center justify-center size-14 rounded-full text-4xl ${icon.bg} ${icon.text}`}
        >
          {icon.name}
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
