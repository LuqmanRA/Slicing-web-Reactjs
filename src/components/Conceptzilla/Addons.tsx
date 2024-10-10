import HoverLink from "../HoverLink";
import { addons } from "../../data/addons";

const Addons = () => {
  return (
    <section className="relative z-50 bg-white px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex w-full flex-col items-start gap-20 lg:grid lg:grid-cols-2 xl:gap-[120px] 2xl:gap-40">
          <div className="text-text-t900 lg:sticky lg:top-[120px] xl:top-[140px] 2xl:top-[200px]">
            <h2 className="mb-6 text-[40px] md:text-[56px] 2xl:text-[64px] md:tracking-[-2px]">
              Design add-ons
            </h2>
            <p className="text-lg mb-10 md:mb-14">
              We encourage you to add additional options to your design. This
              will help increase investor loyalty, user interest and make your
              future product more competitive and unique.
            </p>
            <div className="flex">
              <HoverLink
                to="#"
                bg="bg-white text-black"
                textcolor="after:text-white"
              >
                Get in touch
              </HoverLink>
            </div>
          </div>
          <div className="relative flex w-full flex-col lg:pt-2 xl:pt-0">
            {addons.map((data, index) => (
              <div
                key={data.id}
                className={`flex w-full flex-col border-b border-[rgba(29,43,106,0.2)] text-[#131623] ${
                  index === 0 ? "pb-10" : "py-10"
                }`}
              >
                <h4 className="text-2xl mb-2">{data.title}</h4>
                <p className="mb-4 md:max-w-[480px]">{data.description}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl">{data.pricing}</span>
                  <span className="text-[#545469]">{data.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addons;
