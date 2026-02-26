import { motion } from "motion/react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import TopBar from "./TopBar";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 150 : 60 }}
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
          <TopBar />
        </nav>
      </motion.div>
    </div>
  );
};

export default SideBar;
