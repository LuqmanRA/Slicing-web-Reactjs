import { Link } from "react-router-dom";
import HoverLink from "../HoverLink";
import Star from "../../assets/star.svg?react";
import Client from "../../assets/client.svg?react";
import StickyFooter from "./StickyFooter";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="relative z-50 bg-black ">
        <div className="m-auto w-full px-4 md:px-6 lg:px-20 xl:px-[156px]">
          <div className="m-auto 2xl:max-w-[1408px]">
            <div className="relative z-1 overflow-hidden bg-black py-20 md:py-[120px] lg:pb-20 lg:pt-40 xl:pb-40 2xl:overflow-visible 2xl:py-[200px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-[120px] 2xl:gap-40">
                <div className="flex w-full flex-col justify-between lg:gap-20">
                  <div>
                    <div className="overflow-hidden">
                      <h2 className="text-[40px] leading-tight mb-10 text-white xl:text-[56px] 2xl:text-[64px]">
                        Have an idea? <br /> We can help.
                      </h2>
                    </div>
                    <div className="mb-10 flex w-full items-center gap-4 md:gap-10 lg:mb-0">
                      <div className="w-full pl-[2px] md:flex md:w-auto">
                        <HoverLink
                          to="#"
                          bg="bg-white border-white text-black"
                          textcolor="after:text-white"
                        >
                          Start your project
                        </HoverLink>
                      </div>
                      <Link
                        to="#"
                        className="underline-hover font-medium shrink-0 relative text-white"
                      >
                        <span className="block md:hidden">Email us</span>
                        <span className="hidden md:block">
                          hello@shakuro.com
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex justify-between md:justify-start md:gap-10 lg:gap-6 2xl:gap-10">
                      <SocialMedia />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:pt-4">
                  <div className="flex flex-col justify-between gap-10 md:gap-12 lg:h-full lg:gap-0">
                    <div className="flex w-full flex-col justify-start gap-10 sm:flex-row lg:h-full lg:items-start xl:mb-6">
                      <div className="w-full md:max-w-[240px]">
                        <div className="mb-2 text-white md:mb-[12px]">
                          United States
                        </div>
                        <p className="text-[#a2a2a2]">
                          16192 Coastal Highway, Lewes, DE 19958
                        </p>
                      </div>
                      <div className="w-full md:max-w-[240px]">
                        <div className="mb-2 text-white md:mb-[12px]">
                          United States
                        </div>
                        <p className="text-[#a2a2a2]">
                          16192 Coastal Highway, Lewes, DE 19958
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-12 xl:gap-6">
                      <div className="flex lg:hidden xl:block">
                        <div className="grid grid-cols-2 gap-6 md:flex lg:gap-10 xl:gap-4">
                          <div className="w-auto max-w-15 lg:max-w-[168px]">
                            <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                          </div>
                          <div className="w-auto max-w-15 lg:max-w-[168px]">
                            <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                          </div>
                          <div className="w-auto max-w-15 lg:max-w-[168px]">
                            <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                          </div>
                          <div className="w-auto max-w-15 lg:max-w-[168px]">
                            <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="hidden w-full flex-col md:flex lg:hidden">
                        <div className="flex justify-between md:justify-start md:gap-10 lg:gap-6 2xl:gap-10">
                          <SocialMedia />
                        </div>
                      </div>
                      <div className="flex">
                        <Link to="#">
                          <div className="flex items-center gap-2 rounded-[72px] border border-solid border-[#545454] bg-black px-2 py-2 pr-4 transition-colors duration-300 hover:border-white ">
                            <Client />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-[3px]">
                                <span className="text-sm font-[500] text-white">
                                  5,0
                                </span>
                                <Star />
                              </div>
                              <span className="text-[10px] font-[450] leading-[1.28] text-[#dcdcdc]">
                                Based on{" "}
                                <strong className="font-[600] text-white">
                                  57 clutch reviews
                                </strong>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full flex-col md:hidden lg:w-1/2">
                      <div className="flex justify-between md:justify-start md:gap-10 lg:gap-6 2xl:gap-10">
                        <SocialMedia />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:pt-20 xl:hidden">
                <div className="grid grid-cols-2 gap-3 md:flex lg:gap-10 xl:gap-4">
                  <div className="w-auto max-w-15 lg:max-w-[168px]">
                    <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                  </div>
                  <div className="w-auto max-w-15 lg:max-w-[168px]">
                    <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                  </div>
                  <div className="w-auto max-w-15 lg:max-w-[168px]">
                    <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                  </div>
                  <div className="w-auto max-w-15 lg:max-w-[168px]">
                    <img src="https://shakuro.com/_next/static/media/clutch-aword-top-design-131c5815a426533378697b8cd910da47.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </footer>
  );
};

export default Footer;
