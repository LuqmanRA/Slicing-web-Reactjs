import { Link } from "react-router-dom";
import Card from "./Card";
import HoverLink from "../HoverLink";

const WorkSection = () => {
  return (
    <section className="relative z-50 bg-white px-4 pb-20 md:px-6 md:pb-[120px] lg:px-20 lg:pb-40 xl:px-[156px] 2xl:px-[256px] 2xl:pb-25">
      <div className="m-auto 2xl:max-w-[1408px]">
        <div className="mb-16 flex flex-col gap-20 md:mb-20 lg:mb-[120px] lg:flex-row xl:gap-[120px] 2xl:mb-40 2xl:gap-40">
          <div className="flex w-full flex-col gap-y-20 xl:gap-y-40">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex w-full flex-col gap-y-20 lg:pt-[400px] xl:gap-y-40">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-20 xl:gap-[120px] 2xl:gap-20">
          <p className="text-black font-semibold leading-normal mb-8 text-text-t900 lg:mb-0 lg:w-full xl:max-w-[504px] 2xl:max-w-[664px]">
            If you are ready for a change or have an idea you believe in, let’s
            talk about it. Contact us and stand by for a quick reply.
          </p>
          <div className="flex w-full flex-col gap-6 md:flex-row lg:w-full lg:justify-start items-center">
            <HoverLink
              to="get-in-touch"
              bg="bg-black text-white"
              textcolor="after:text-black"
            >
              Get in touch
            </HoverLink>
            <Link
              to="/works"
              className="underline-hover relative text-black font-medium"
            >
              See more work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
