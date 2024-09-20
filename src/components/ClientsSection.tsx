import HoverLink from "./HoverLink";
import ClientLogo from "./ClientLogo";

const Clients = () => {
  return (
    <section className="relative z-50 bg-white px-2  py-20 md:px-6 md:py-[120px] lg:px-20 lg:py-40 xl:px-[156px] 2xl:px-[256px] 2xl:py-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col items-start gap-y-14 lg:grid lg:grid-cols-2 lg:flex-row lg:justify-between lg:gap-20 xl:gap-[120px] 2xl:gap-40">
          <div className="flex flex-col gap-10 2xl:gap-12">
            <div className="flex flex-col gap-6 2xl:max-w-[528px] 2xl:gap-8">
              <h2 className=" text-black leading-tight text-[40px] lg:text-[56px] 2xl:text-[64px] md:tracking-[-2px]">
                Trust is earned, not given
              </h2>
              <p className="text-black text-xl">
                Every project is a chance to change someone’s life. Courtesy of
                our clients, we impact millions of lives and create a better
                future for everyone.
              </p>
            </div>
            <div className="md:flex">
              <HoverLink
                to="#"
                bg="bg-white text-black"
                textcolor="after:text-white"
              >
                Read all testimonials
              </HoverLink>
            </div>
          </div>
          <div className="h-full">
            <ClientLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
