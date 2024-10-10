import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="md:-translate-x-full xl:translate-x-0 block overflow-x-auto transition-transform  duration-500 ease-[cubic-bezier(0.49,0,0.05,1)] md:absolute md:left-0 xl:static xl:block">
      <ul className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8">
        <li className="flex flex-shrink-0">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-xl transition-colors duration-300 ease-in-out hover:text-[#131623] text-[#131623]"
                : "text-[#9d9dad] text-xl transition-colors duration-300 ease-in-out hover:text-[#131623]"
            }
          >
            Recents
          </NavLink>
        </li>
        <li className="flex flex-shrink-0">
          <NavLink
            to="/blog/category/shakuro-agency-about-design"
            className={({ isActive }) =>
              isActive
                ? "text-xl transition-colors duration-300 ease-in-out hover:text-[#131623] text-[#131623]"
                : "text-[#9d9dad] text-xl transition-colors duration-300 ease-in-out hover:text-[#131623]"
            }
          >
            Recents
          </NavLink>
        </li>
        <li className="flex flex-shrink-0">
          <NavLink
            to="/blog/category/shakuro-agency-about-development"
            className={({ isActive }) =>
              isActive
                ? "text-xl transition-colors duration-300 ease-in-out hover:text-[#131623] text-[#131623]"
                : "text-[#9d9dad] text-xl transition-colors duration-300 ease-in-out hover:text-[#131623]"
            }
          >
            Recents
          </NavLink>
        </li>
        <li className="flex flex-shrink-0">
          <NavLink
            to="/blog/category/shakuro-agency-about-business"
            className={({ isActive }) =>
              isActive
                ? "text-xl transition-colors duration-300 ease-in-out hover:text-[#131623] text-[#131623]"
                : "text-[#9d9dad] text-xl transition-colors duration-300 ease-in-out hover:text-[#131623]"
            }
          >
            Recents
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
