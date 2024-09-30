import HoverLink from "../HoverLink";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative z-50 bg-white px-4 pb-20 pt-[200px] md:px-6 lg:px-20 lg:pb-[120px] xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-y-10 md:gap-y-14">
          <div className="flex flex-col gap-6">
            <div className="text-5xl tracking-[-2px] xl:tracking-[-3px] leading-tight sm:text-[56px] md:text-7xl lg:text-[88px] font-[450]">
              <h1>
                Defying the creative odds. <br /> For client success
              </h1>
            </div>
            <div className="text-xl leading-relaxed">
              <p>
                Shakuro is a multidisciplinary design and development agency
                <br />
                working with individual startups and enterprises worldwide.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-4 md:gap-12 md:items-center">
            <HoverLink
              to="/get-in-touch"
              bg="bg-black text-white"
              textcolor="after:text-black"
            >
              Get in touch
            </HoverLink>
            <div className="w-auto shrink-0 md:hidden">
              <HoverLink
                to="/works"
                bg="bg-transparent text-black"
                textcolor="after:text-white"
              >
                Works
              </HoverLink>
            </div>
            <div className="hidden md:block">
              <Link
                to="/works"
                className="underline-hover relative text-black font-medium"
              >
                Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
