import { links } from "@/utils";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="items-center justify-center hidden lg:flex gap-x-4">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
