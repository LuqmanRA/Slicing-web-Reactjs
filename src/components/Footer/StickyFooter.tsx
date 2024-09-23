import { Link } from "react-router-dom";
import { links } from "../../data/links";

const StickyFooter = () => {
  return (
    <div className="bottom-0 top-0 sticky">
      <div className="bg-[#151515] 2xl:px-[256px]">
        <div className="m-auto w-full px-4 py-20 md:px-6 lg:px-20 xl:px-[156px] 2xl:max-w-[1408px] 2xl:px-0">
          <nav className="grid h-full w-full grid-cols-1 items-start justify-between gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-20 xl:gap-[120px] 2xl:gap-40">
            <div className="flex h-full flex-col">
              <div className="flex w-full flex-col">
                <h3 className="text-base mb-4 text-[#787878]">Services</h3>
                <ul className="flex flex-wrap gap-2">
                  {links.service.map((link) => (
                    <li key={link.id} className="relative flex items-center">
                      <Link
                        to={link.href}
                        className="underline-hover text-sm min-h-6 relative text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm hidden text-[#787878] md:mt-auto md:block">
                © 2024 Shakuro. All rights reserved.
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex w-full flex-col">
                <h3 className="text-base mb-4 text-[#787878]">Industries</h3>
                <ul className="flex flex-wrap gap-2">
                  {links.industri.map((link) => (
                    <li key={link.id} className="relative flex items-center">
                      <Link
                        to={link.href}
                        className="underline-hover text-sm min-h-6 relative text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col">
                <h3 className="text-base mb-4 text-[#787878]">Industries</h3>
                <ul className="flex flex-wrap gap-2">
                  {links.company.map((link) => (
                    <li key={link.id} className="relative flex items-center">
                      <Link
                        to={link.href}
                        className="underline-hover text-sm min-h-6 relative text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-sm text-[#787878] md:hidden">
              © 2024 Shakuro. All rights reserved.
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
