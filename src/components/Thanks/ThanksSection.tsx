import { Link } from "react-router-dom";
import HoverLink from "../HoverLink";
import { links } from "../../data/links";
import InfiniteScroll from "./InfiniteScroll";

const ThanksSection = () => {
  return (
    <section className="px-4 pb-20 pt-40 md:px-6 md:pb-[120px] md:pt-[200px] lg:px-20 xl:px-[156px] xl:pt-[240px] 2xl:px-[256px]">
      <div className="mr-auto max-w-[1408px]">
        <div className="flex flex-col gap-20 lg:flex-row xl:gap-[120px] 2xl:gap-40">
          <div className="flex flex-col lg:w-1/2 2xl:max-w-[624px]">
            <div className="mb-10 flex flex-col gap-4 text-[#131623]">
              <h1 className="text-[48px] md:text-[56px] tracking-[-2px]">
                Thanks!
              </h1>
              <div className="text-xl">
                <p>! Your application will be processed shortly.</p>
                <p>
                  We will email you at{" "}
                  <span className="font-medium text-xl"></span>
                </p>
              </div>
            </div>
            <div className="mb-14 flex gap-4 md:hidden">
              <div className="flex">
                <HoverLink
                  to="/works"
                  bg="bg-black text-white"
                  textcolor="after:text-[#131623]"
                >
                  View works
                </HoverLink>
              </div>
              <div className="flex">
                <HoverLink
                  to="/works"
                  bg="bg-white text-[#131623]"
                  textcolor="after:text-white"
                >
                  Return home
                </HoverLink>
              </div>
            </div>
            <div className="mb-14 hidden items-center md:flex md:gap-10 lg:mb-16">
              <div className="flex">
                <HoverLink
                  to="/works"
                  bg="bg-white text-[#131623]"
                  textcolor="after:text-white"
                >
                  View works
                </HoverLink>
              </div>
              <Link
                to="/"
                className="underline-hover text-[#131623] relative font-medium"
              >
                Return home
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#9d9dad]">Follow us on social</p>
              <ul className="flex justify-between md:justify-start md:gap-10 lg:gap-6 2xl:gap-[28px] ">
                {links.media.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="underline-hover text-[#131623] text-sm relative"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <InfiniteScroll />
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;
