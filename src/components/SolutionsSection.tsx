import { Link } from "react-router-dom";

const SolutionsSection = () => {
  return (
    <section className="relative z-50 bg-white px-6 py-20 md:pb-15 md:pt-[100px] md:px-20 xl:px-[156px] xl:py-40 2xl:px-[256px] 2xl:py-[200px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col-reverse items-start gap-y-20 md:gap-y-[120px] lg:grid lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-20 xl:items-center xl:gap-[120px] 2xl:gap-20">
          <div className="2xl:min-w-[623px]">
            <div className="flex flex-col">
              <h2 className="text-4xl font-[450] mb-10 text-black lg:mb-16 2xl:mb-20">
                We are committed to finding innovative and unconventional
                solutions. Pushing boundaries to exceed client goals.
              </h2>
              <div className="mb-20 flex flex-wrap content-start items-start gap-[12px] self-stretch xl:mb-[120px] 2xl:mb-40 2xl:max-w-[623px]">
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
                <Link to="#" className="group">
                  <div className="flex !cursor-pointer items-center justify-center rounded-[48px] border border-black px-4 py-2 transition-colors duration-300 group-hover:bg-[#F3F4F5] group-active:bg-black">
                    <span className="text-black text-lg font-[450] group-active:text-white">
                      E-Learning
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-start gap-8 md:flex-row md:gap-10 lg:gap-6 2xl:mr-[-200px] 2xl:gap-12">
                <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
                  <p className="text-[44px] font-[450] leading-tight text-nowrap tracking-[-2px] text-black lg:tracking-normal 2xl:tracking-[-2px]">
                    150+
                  </p>
                  <span className="text-sm text-black text-nowrap lg:leading-relaxed">
                    team members
                  </span>
                </div>
                <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
                  <p className="text-[44px] font-[450] leading-tight text-nowrap tracking-[-2px] text-black lg:tracking-normal 2xl:tracking-[-2px]">
                    500+
                  </p>
                  <span className="text-sm text-black text-nowrap lg:leading-relaxed">
                    team members
                  </span>
                </div>
                <div className="flex flex-col gap-2 lg:flex-shrink-0 lg:gap-[4px]">
                  <p className="text-[44px] font-[450] leading-tight text-nowrap tracking-[-2px] text-black lg:tracking-normal 2xl:tracking-[-2px]">
                    17 years
                  </p>
                  <span className="text-sm text-black text-nowrap lg:leading-relaxed">
                    team members
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-auto flex h-full min-h-[347px] w-full max-w-[264px] md:min-h-[572px] md:max-w-[436px] lg:min-h-[518px] lg:min-w-[100%] xl:min-h-[664px] 2xl:mr-[-100px] 2xl:min-h-[max-content] ">
            <video
              className="absolute top-1/2 h-full w-full -translate-y-1/2 object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="https://shakuro.com/home/logo-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
