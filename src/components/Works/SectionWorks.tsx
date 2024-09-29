import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
            <article>
              <Link to="#" className="w-full worksItemLink">
                <div className="flex flex-col">
                  <div className="flex aspect-square h-full transform overflow-hidden rounded-2xl">
                    <img
                      src="https://shakuro.com/_next/image?url=https%3A%2F%2Fcms.shakuro.com%2Fmedia%2Fbanner-void-1600x1450.webp&w=768&q=75"
                      alt="image"
                      data-image="true"
                      className="flex-grow bg-[#f2f5f7] transition-transform duration-300 h-full object-cover"
                    />
                  </div>
                  <div className="pt-6 xl:pt-10">
                    <p className="text-xs mb-4 uppercase text-[#9d9dad] xl:mb-6">
                      B2C, GAMING SOCIAL COMMUNITY, WEB PLATFORM
                    </p>
                    <h2 className="text-2xl mb-2 text-[#131623] transition-colors duration-300 xl:text-4xl xl:mb-6">
                      Crafting Void: Comprehensive Design, Branding,
                      Illustrations and Video Creation
                    </h2>
                    <p className="max-h-[48px] md:max-h-[64px] md:text-xl text-[#131623] text-base overflow-hidden text-ellipsis">
                      Transforming Void: Social Ties, progress tracking and Game
                      customizations. We crafted user-centric, game-specific
                      interfaces for an immersive gaming experience.
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          </div>
          <div className="flex w-full flex-col gap-20 lg:w-[calc(50%-20px)] lg:gap-[120px] lg:pt-[280px] xl:w-[calc(50%-40px)] 2xl:gap-40">
            <article>
              <Link to="#" className="w-full worksItemLink">
                <div className="flex flex-col">
                  <div className="flex aspect-square h-full transform overflow-hidden rounded-2xl">
                    <img
                      src="https://shakuro.com/_next/image?url=https%3A%2F%2Fcms.shakuro.com%2Fmedia%2Fbanner-void-1600x1450.webp&w=768&q=75"
                      alt="image"
                      data-image="true"
                      className="flex-grow bg-[#f2f5f7] transition-transform duration-300 h-full object-cover"
                    />
                  </div>
                  <div className="pt-6 xl:pt-10">
                    <p className="text-xs mb-4 uppercase text-[#9d9dad] xl:mb-6">
                      B2C, GAMING SOCIAL COMMUNITY, WEB PLATFORM
                    </p>
                    <h2 className="text-2xl mb-2 text-[#131623] transition-colors duration-300 xl:text-4xl xl:mb-6">
                      Crafting Void: Comprehensive Design, Branding,
                      Illustrations and Video Creation
                    </h2>
                    <p className="max-h-[48px] md:max-h-[64px] md:text-xl text-[#131623] text-base overflow-hidden text-ellipsis">
                      Transforming Void: Social Ties, progress tracking and Game
                      customizations. We crafted user-centric, game-specific
                      interfaces for an immersive gaming experience.
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
