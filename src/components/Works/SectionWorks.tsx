import { NavLink } from "react-router-dom";
import ShowcaseContent from "../ShowcaseContent";

const SectionWorks = () => {
  return (
    <section className="overflow-hidden px-4 pb-20 pt-[120px] md:px-6 md:pt-40 lg:px-20 xl:px-[156px] 2xl:pb-[120px] 2xl:pt-[200px]">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="mb-20 flex flex-col gap-12 2xl:mb-[120px] 2xl:gap-20">
          <div>
            <p className="v-h500n mb-6 text-[#9d9dad] font-medium text-2xl">
              Our works
            </p>
            <h1 className="text-[48px] md:text-[56px] xl:text-[72px] text-[#131623] max-w-[1400px] leading-tight">
              Helping businesses achieve goals. Solving people’s problems.
            </h1>
          </div>
          <nav className="flex items-start gap-x-10 overflow-auto">
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive
                  ? "text-[#131623] text-2xl pointer-events-none cursor-default"
                  : "text-2xl text-[#9d9dad]"
              }
            >
              Featured
            </NavLink>
            <NavLink
              to="/works/web"
              className={({ isActive }) =>
                isActive
                  ? "text-[#131623] text-2xl pointer-events-none cursor-default"
                  : "text-2xl text-[#9d9dad]"
              }
            >
              Web
            </NavLink>
          </nav>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-20 lg:flex-row xl:gap-[120px] 2xl:gap-40">
          <div className="flex w-full flex-col gap-20 lg:w-[calc(50%-20px)] lg:gap-[120px] xl:w-[calc(50%-40px)] 2xl:gap-40">
            <ShowcaseContent />
          </div>
          <div className="flex w-full flex-col gap-20 lg:w-[calc(50%-20px)] lg:gap-[120px] lg:pt-[280px] xl:w-[calc(50%-40px)] 2xl:gap-40">
            <ShowcaseContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
