import { motion } from "motion/react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Links from "./ui/Links";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 100 : 60 }}
        transition={{ duration: 0.4 }}
      >
        <button
          className={`cursor-pointer 
            ${isOpen ? "text-2xl " : "text-7xl"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {" "}
          <FaBars />{" "}
        </button>
        <nav
          className={`flex flex-col gap-2 border-gray-700
            ${isOpen ? "" : "hidden"}`}
        >
          <Links />
        </nav>
      </motion.div>
    </div>
  );
};

export default SideBar;
