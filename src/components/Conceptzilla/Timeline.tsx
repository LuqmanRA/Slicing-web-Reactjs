import Circle from "../../assets/circle.svg?react";

const Timeline = () => {
  return (
    <section className="relative z-50 bg-[#F3F4F5] px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-10 md:gap-20">
          <h3 className="text-[#131623] tracking-[-2px] xl:text-[64px] md:text-[56px] text-[40px]">
            Just one week from start to finish
          </h3>
          <ul className="lg:flex">
            <li className="lg:flex-col flex gap-4">
              <div className="lg:flex-row flex flex-col items-center text-[#131623] ">
                <div className="h-6 w-6 lg:mx-1">
                  <Circle />
                </div>
                <div className="lg:h-[1px] lg:w-full lg:bg-[#bac0d9] h-full w-[1px] bg-[#131623] "></div>
              </div>
              <div className="lg:pb-0 lg:pr-10 pb-16 text-[#131623]">
                <span className="mb-2 block text-[#9d9dad] md:mb-6 lg:mb-2">
                  Day 1
                </span>
                <h3 className="text-2xl mb-2 lg:mb-4">The baseline</h3>
                <p>
                  Within 1-2 business days, we’ll reach out to you and schedule
                  a call to discuss the details.
                </p>
              </div>
            </li>
            <li className="lg:flex-col flex gap-4">
              <div className="lg:flex-row flex flex-col items-center text-[#131623] ">
                <div className="h-6 w-6 lg:mx-1">
                  <Circle />
                </div>
                <div className="lg:h-[1px] lg:w-full lg:bg-[#bac0d9] h-full w-[1px] bg-[#131623] "></div>
              </div>
              <div className="lg:pb-0 lg:pr-10 pb-16 text-[#131623]">
                <span className="mb-2 block text-[#9d9dad] md:mb-6 lg:mb-2">
                  Day 1
                </span>
                <h3 className="text-2xl mb-2 lg:mb-4">The baseline</h3>
                <p>
                  Within 1-2 business days, we’ll reach out to you and schedule
                  a call to discuss the details.
                </p>
              </div>
            </li>
            <li className="lg:flex-col flex gap-4 lg:min-w-[30%] 2xl:min-w-[35%]">
              <div className="lg:flex-row flex flex-col items-center text-[#131623] ">
                <div className="h-6 w-6 lg:mx-1">
                  <Circle />
                </div>
                <div className="lg:h-[1px] lg:w-full lg:bg-[#bac0d9] h-full w-[1px] bg-[#131623] "></div>
              </div>
              <div className="lg:pb-0 lg:pr-10 pb-16 text-[#131623]">
                <span className="mb-2 block text-[#9d9dad] md:mb-6 lg:mb-2">
                  Day 1
                </span>
                <h3 className="text-2xl mb-2 lg:mb-4">The baseline</h3>
                <p>
                  Within 1-2 business days, we’ll reach out to you and schedule
                  a call to discuss the details.
                </p>
              </div>
            </li>
            <li className="lg:flex-col flex gap-4">
              <div className="lg:flex-row flex flex-col items-center text-[#131623] ">
                <div className="h-6 w-6 lg:mx-1">
                  <Circle />
                </div>
                <div className="lg:bg-[#bac0d9] h-0 w-0 lg:!h-0 lg:!w-0 bg-[#131623] "></div>
              </div>
              <div className="lg:pb-0 lg:pr-10 pb-16 text-[#131623]">
                <span className="mb-2 block text-[#9d9dad] md:mb-6 lg:mb-2">
                  Day 1
                </span>
                <h3 className="text-2xl mb-2 lg:mb-4">The baseline</h3>
                <p>
                  Within 1-2 business days, we’ll reach out to you and schedule
                  a call to discuss the details.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
