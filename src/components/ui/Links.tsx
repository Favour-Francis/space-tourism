import { NavLink } from "react-router-dom";
import Link from "../../lib/navigation";

export default function Links() {
  return (
    <>
      {Link.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) =>
            `text-md font-bold flex items-center gap-3 sm:py-10 md:py-7 cursor-pointer 
                ${isActive ? "border-b-2" : ""}`
          }
        >
          <span className="hidden lg:block text-lg">{link.number}</span>
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
