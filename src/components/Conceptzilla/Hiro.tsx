import HoverLink from "../HoverLink";

const Hiro = () => {
  return (
    <section className="relative z-50 bg-white px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-y-10 md:gap-y-14">
          <div className="flex flex-col gap-y-6 text-[#9d9dad]">
            <span className="text-2xl">Сonceptzilla</span>
            <div className="text-[48px] leading-[1.12] tracking-[-2px] text-[#131623] lg:text-[56px] xl:text-[72px] 2xl:text-[88px] xl:max-w-[1080px] 2xl:max-w-[1280px]">
              <h1>Presentation-ready concepts for $3000 within one week</h1>
            </div>
            <div className="text-xl text-[#131623] xl:max-w-[855px]">
              <p>
                Having launched our own startups and with 500+ successful
                projects on our resume, we know exactly how to make ideas shine.
              </p>
            </div>
          </div>
          <div className="flex">
            <HoverLink
              to="#"
              bg="bg-black text-white"
              textcolor="after:text-black"
            >
              Order a concept
            </HoverLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiro;
