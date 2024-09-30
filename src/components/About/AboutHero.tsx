const AboutHero = () => {
  return (
    <section className="bg-black px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-y-6 text-[#a2a2a2]">
            <span className="text-2xl">About us</span>
            <div className="text-[48px] leading-[1.12] tracking-[-2px] text-white lg:text-[56px] xl:text-[72px] 2xl:text-[88px] xl:max-w-[1080px] 2xl:max-w-[1280px]">
              <h1>We are Shakuro. A digital design and development agency</h1>
            </div>
            <div className="text-xl xl:max-w-[855px]">
              <p>
                We help our clients build their brand identity, and design,
                develop, launch, and support their digital products. Working
                with startups and enterprises from all over the world.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-12 text-white md:flex-row lg:gap-16 xl:gap-24 2xl:mr-[-200px] 2xl:gap-12">
            <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
              <p className="text-[48px] text-nowrap tracking-[-2px] lg:text-[56px] xl:text-[72px]-md 2xl:text-[88px]">
                150+
              </p>
              <span>team members</span>
            </div>
            <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
              <p className="text-[48px] text-nowrap tracking-[-2px] lg:text-[56px] xl:text-[72px]-md 2xl:text-[88px]">
                150+
              </p>
              <span>team members</span>
            </div>
            <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
              <p className="text-[48px] text-nowrap tracking-[-2px] lg:text-[56px] xl:text-[72px]-md 2xl:text-[88px]">
                150+
              </p>
              <span>team members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
