import Logo from "../../assets/cardlogo.svg?react";
import { infinite } from "../../data/infinite";

const InfiniteScroll = () => {
  return (
    <div className="flex flex-col gap-10 lg:w-1/2 lg:pt-[12px] xl:pt-0 2xl:max-w-[516px]">
      <h2 className="text-[#131623] xl:text-[36px] lg:text-[24px] md:text-[36px] text-[32px]">
        You'll be in the company of our happy customers
      </h2>
      <div className="relative h-[567px] md:h-[592px] lg:h-[499px] xl:h-[480px] 2xl:h-[572px]">
        <div className="absolute top-0 z-10 h-[91px] w-full bg-gradient-to-b from-current text-white"></div>
        <div className="z-0 h-full overflow-hidden">
          <div className="content-animation-scroll">
            <div className="animate-infinite-scroll">
              {infinite.map((data) => (
                <div key={data.id}>
                  <blockquote className="flex items-stretch pl-[12px] md:gap-[12px] lg:gap-0 xl:gap-[12px]">
                    <div className="relative flex translate-x-[-10px] flex-col items-center justify-center pb-[6px]">
                      <div className="pb-[12px] pt-2 md:py-4 lg:pb-[12px] lg:pt-2 xl:py-4 text-[#2d2dff]">
                        <div className="h-[12px] w-[15px] md:h-[16px] md:w-[20px] lg:h-[12px] lg:w-[15px] xl:h-[16px] xl:w-[20px]">
                          <Logo />
                        </div>
                      </div>
                      <div className="h-full w-[1px]">
                        <div className="h-full w-full bg-[#1d2c6a] bg-opacity-20 dark:bg-extra-outline400-d"></div>
                      </div>
                    </div>
                    <div className="flex justify-start pb-10 md:pb-12 lg:pb-10 xl:pb-12">
                      <div className="flex flex-col">
                        <div className="relative mb-2 flex h-12 w-28 items-start p-2">
                          <img
                            src={data.image}
                            alt="logo"
                            className="h-full w-full absolute inset-0 object-contain bg-transparent"
                          />
                        </div>
                        <div className="text-base mb-2 text-[#131623] md:text-xl lg:text-base xl:text-xl md:mb-4 lg:mb-2 xl:mb-4">
                          {data.message}
                        </div>
                        <div className="flex flex-col gap-[4px] md:gap-0">
                          <div className="font-[600] text-[#131623]">
                            {data.name}
                          </div>
                          <div className="text-[#545469] md:text-base text-[14px]">
                            {data.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="animate-infinite-scroll">
              {infinite.map((data) => (
                <div key={data.id}>
                  <blockquote className="flex items-stretch pl-[12px] md:gap-[12px] lg:gap-0 xl:gap-[12px]">
                    <div className="relative flex translate-x-[-10px] flex-col items-center justify-center pb-[6px]">
                      <div className="pb-[12px] pt-2 md:py-4 lg:pb-[12px] lg:pt-2 xl:py-4 text-[#2d2dff]">
                        <div className="h-[12px] w-[15px] md:h-[16px] md:w-[20px] lg:h-[12px] lg:w-[15px] xl:h-[16px] xl:w-[20px]">
                          <Logo />
                        </div>
                      </div>
                      <div className="h-full w-[1px]">
                        <div className="h-full w-full bg-[#1d2c6a] bg-opacity-20 dark:bg-extra-outline400-d"></div>
                      </div>
                    </div>
                    <div className="flex justify-start pb-10 md:pb-12 lg:pb-10 xl:pb-12">
                      <div className="flex flex-col">
                        <div className="relative mb-2 flex h-12 w-28 items-start p-2">
                          <img
                            src={data.image}
                            alt="logo"
                            className="h-full w-full absolute inset-0 object-contain bg-transparent"
                          />
                        </div>
                        <div className="text-base mb-2 text-[#131623] md:text-xl lg:text-base xl:text-xl md:mb-4 lg:mb-2 xl:mb-4">
                          {data.message}
                        </div>
                        <div className="flex flex-col gap-[4px] md:gap-0">
                          <div className="font-[600] text-[#131623]">
                            {data.name}
                          </div>
                          <div className="text-[#545469] md:text-base text-[14px]">
                            {data.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-10 h-[91px] w-full bg-gradient-to-t from-current text-white"></div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
