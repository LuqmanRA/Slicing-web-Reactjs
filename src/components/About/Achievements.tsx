const Achievements = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-6 lg:px-20 lg:py-16 xl:px-[156px] xl:py-20">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-14 lg:gap-20 2xl:gap-[120px]">
          <div className="flex flex-col gap-y-4 text-[#9d9dad]">
            <span className="text-2xl">Select achievements</span>
            <h2 className="2xl:text-[56px] text-[40px] text-[#131623]">
              Earned courtesy of our clients
            </h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 flex-wrap gap-x-12 gap-y-14 md:flex md:gap-y-12 lg:gap-16 xl:gap-20 2xl:gap-[104px]">
              <div className="group relative flex w-auto items-center">
                <div className="relative md:w-14 lg:w-16 h-full min-h-8 xl:w-[88px] w-full min-w-8 max-w-[144px] md:max-w-[104px] lg:max-w-[136px] xl:max-w-[184px] 2xl:max-w-[235px]">
                  <img
                    src="https://shakuro.com/about-us/awards-logos/clutch-logo.svg"
                    alt=""
                    className="h-full w-full absolute left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                  />
                </div>
              </div>
              <div className="group relative flex w-auto items-center">
                <div className="relative md:w-14 lg:w-16 h-full min-h-8 xl:w-[88px] w-full min-w-8 max-w-[144px] md:max-w-[104px] lg:max-w-[136px] xl:max-w-[184px] 2xl:max-w-[235px]">
                  <img
                    src="https://shakuro.com/about-us/awards-logos/clutch-logo.svg"
                    alt=""
                    className="h-full w-full absolute left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                  />
                </div>
              </div>
              <div className="group relative flex w-auto items-center">
                <div className="relative md:w-14 lg:w-16 h-full min-h-8 xl:w-[88px] w-full min-w-8 max-w-[144px] md:max-w-[104px] lg:max-w-[136px] xl:max-w-[184px] 2xl:max-w-[235px]">
                  <img
                    src="https://shakuro.com/about-us/awards-logos/clutch-logo.svg"
                    alt=""
                    className="h-full w-full absolute left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                  />
                </div>
              </div>
              <div className="group relative flex w-auto items-center">
                <div className="relative md:w-14 lg:w-16 h-full min-h-8 xl:w-[88px] w-full min-w-8 max-w-[144px] md:max-w-[104px] lg:max-w-[136px] xl:max-w-[184px] 2xl:max-w-[235px]">
                  <img
                    src="https://shakuro.com/about-us/awards-logos/clutch-logo.svg"
                    alt=""
                    className="h-full w-full absolute left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
