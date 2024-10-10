import { links } from "../../data/links";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-start gap-x-10 overflow-auto">
      {links.works.map((link) => (
        <NavLink
          key={link.id}
          to={link.href}
          end={link.href === "/works"}
          className={({ isActive }) =>
            isActive
              ? "text-[#131623] text-2xl pointer-events-none cursor-default transition-all duration-300"
              : "text-2xl text-[#9d9dad] hover:text-[#131623] transition-all duration-300"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
