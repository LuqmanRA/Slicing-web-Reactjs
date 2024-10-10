import Logo from "../../assets/search.svg?react";
import { Link } from "react-router-dom";
import Button from "../Getintouch/Button";
import Navigation from "./Navigation";

const ContentBlog = () => {
  return (
    <section className="px-4 md:px-6 lg:px-20 xl:px-[156px]">
      <div className="relative">
        <div className="flex flex-col justify-center z-10 mx-auto mb-10 w-full max-w-[1408px] lg:mb-16 2xl:mb-20">
          <div className="flex flex-col justify-between  gap-y-6 pb-[2px] md:relative md:flex-row-reverse md:items-center md:overflow-x-hidden xl:items-center xl:overflow-x-hidden">
            <div className="md:w-12 xl:w-full w-full self-center transition-all duration-500 xl:max-w-[249px]">
              <form className="relative md:h-12 xl:w-full xl:max-w-[246px]">
                <button className="md:left-1/2 md:-translate-x-1/2  absolute left-4 top-[12px] duration-500 md:z-[5] text-[#131623] xl:left-4 xl:translate-x-0">
                  <Logo />
                </button>
                <div>
                  <input
                    placeholder="Search..."
                    type="text"
                    className="text-xl w-full border border-black border-opacity-5 bg-white py-2 pr-3 text-[#131623] placeholder:text-[#9d9dad] xl:placeholder:text-[#9d9dad] transition-colors duration-300 ease-in-out overflow-hidden rounded-3xl  pl-[44px] hover:border-opacity-100 md:px-3 xl:pl-[44px]  select-none md:placeholder:text-transparent"
                  />
                </div>
              </form>
            </div>
            <Navigation />
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-[1408px]">
          <div className="mx-auto mt-6 max-w-[1408px]">
            <div className="mb-14 flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-10 lg:mb-16 xl:grid-cols-3">
              <article className="group relative flex flex-col justify-start xl:col-span-2">
                <div>
                  <div className="relative h-[358px] overflow-hidden rounded-2xl bg-[#e6e6f1] 2xl:h-[442px]">
                    <img
                      src="https://blog.cgify.com/wp-content/uploads/2024/10/original-9b1ef4f7e5440613b4b1f0cde410e69d.jpg"
                      alt="image"
                      className="object-cover h-full w-full aspect-square transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-start px-2">
                    <Link
                      to="#"
                      className="before:absolute before:left-0 before:top-0 before:size-full"
                    >
                      <h2 className="text-[#131623] text-2xl">
                        Decoding Blockchain Development: Step-by-Step to Your
                        Next Big App
                      </h2>
                    </Link>
                  </div>
                </div>
                <p className="text-xs mt-4 px-2 text-[#9d9dad]">
                  October 7, 2024
                </p>
                <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                  <Link
                    to="#"
                    className="text-sm z-[1] inline-flex overflow-hidden text-nowrap rounded-3xl border border-solid border-white border-opacity-10 bg-[#131623] bg-opacity-30 px-2 py-1 text-white backdrop-blur-[20px] transition-colors duration-300 hover:bg-opacity-50"
                  >
                    Business
                  </Link>
                </div>
              </article>
              <article className="group relative flex flex-col justify-start">
                <div>
                  <div className="relative h-[358px] overflow-hidden rounded-2xl bg-[#e6e6f1] 2xl:h-[442px]">
                    <img
                      src="https://blog.cgify.com/wp-content/uploads/2024/10/original-9b1ef4f7e5440613b4b1f0cde410e69d.jpg"
                      alt="image"
                      className="object-cover h-full w-full aspect-square transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-start px-2">
                    <Link
                      to="#"
                      className="before:absolute before:left-0 before:top-0 before:size-full"
                    >
                      <h2 className="text-[#131623] text-2xl">
                        Decoding Blockchain Development: Step-by-Step to Your
                        Next Big App
                      </h2>
                    </Link>
                  </div>
                </div>
                <p className="text-xs mt-4 px-2 text-[#9d9dad]">
                  October 7, 2024
                </p>
                <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                  <Link
                    to="#"
                    className="text-sm z-[1] inline-flex overflow-hidden text-nowrap rounded-3xl border border-solid border-white border-opacity-10 bg-[#131623] bg-opacity-30 px-2 py-1 text-white backdrop-blur-[20px] transition-colors duration-300 hover:bg-opacity-50"
                  >
                    Business
                  </Link>
                </div>
              </article>
            </div>
          </div>
          <div className="mb-16 flex justify-center xl:mb-20">
            <Button />
          </div>
          <div className="mt-20 2xl:mt-[120px]">
            <div className="m-auto flex w-full max-w-[1408px] justify-center gap-4 py-10 md:py-14 lg:justify-between xl:py-20 2xl:py-[120px] ">
              <div className="flex w-full flex-col xl:grid xl:grid-cols-2 xl:gap-20">
                <div className="w-full">
                  <p className="text-[40px] mb-4 text-[#131623] md:text-[56px] md:tracking-[-2px]">
                    Subscribe to our blog
                  </p>
                  <p className="text-xl mb-10 text-[#9d9dad] xl:mb-0">
                    Once a month we will send you blog updates
                  </p>
                </div>
                <form className="w-full">
                  <div className="relative w-full max-w-[360px] lg:max-w-[380px] xl:max-w-none">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your email"
                        className="transition-colors duration-300 ease-in-out text-xl w-full border-b border-[#131623] border-opacity-[0.12] bg-white py-2 placeholder:text-[#131623] hover:border-opacity-100 styles_input__zAjji !pr-12 text-[#131623]"
                      />
                    </div>
                    <div className="absolute right-0 top-1/2 flex h-full -translate-y-1/2 items-center">
                      <button className="underline-hover relative text-black font-medium">
                        Subcribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlog;
