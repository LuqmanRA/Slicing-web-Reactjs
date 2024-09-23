import HoverLink from "../HoverLink";
import { links } from "../../data/links";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="flex w-full flex-col gap-y-4 md:gap-y-6 2xl:gap-y-8">
        <span className="text-[#9D9DAD]">Menu</span>
        <ul className="flex w-full flex-col flex-nowrap items-start justify-start gap-y-4 md:gap-y-6">
          {links.menu.map((link) => (
            <li key={link.id} className="w-full">
              <Link
                to={link.href}
                className="underline-hover relative text-black md:text-[32px] text-[24px]"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className="mt-4 w-full md:w-auto 2xl:mt-6">
            <div className="flex">
              <HoverLink
                to="/get-in-touch"
                bg="bg-black text-white"
                textcolor="after:text-black"
              >
                Get in touch
              </HoverLink>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="flex w-full flex-col gap-y-4">
        <span className="text-[#9d9dad] ">Services</span>
        <ul className="flex flex-wrap gap-4">
          {links.service.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="underline-hover text-sm min-h-6 relative text-[#131623]"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex w-full flex-col gap-y-4">
        <span className="text-[#9d9dad] ">Services</span>
        <ul className="flex flex-wrap gap-4">
          {links.industri.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="underline-hover text-sm min-h-6 relative text-[#131623]"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex flex-col pb-10 gap-y-4 w-full">
        <span className="text-[#9d9dad] ">Social</span>
        <ul className="flex flex-wrap justify-between gap-4">
          {links.media.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="underline-hover text-sm min-h-6 relative text-[#131623]"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
