import ShowcaseContent from "../ShowcaseContent";
import { showcase } from "../../data/showcase";

const Showcase = () => {
  const firstHalf = showcase.slice(0, 2);
  const secondHalf = showcase.slice(2, 3);

  return (
    <section className="bg-white px-4 py-12 md:px-6 lg:px-20 lg:py-16 xl:px-[156px] xl:py-20">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-14 lg:gap-20 2xl:gap-[120px]">
          <div className="flex flex-col gap-y-6 text-[#9d9dad]">
            <span className="text-2xl">Showcase</span>
            <h2 className="2xl:text-[56px] text-[40px] text-[#131623]">
              Proudly presenting a few of our recent works
            </h2>
          </div>
          <div className="flex flex-col gap-20 lg:grid lg:grid-cols-2 xl:gap-[120px] 2xl:gap-40">
            <div className="flex flex-col gap-20 lg:gap-40">
              <ShowcaseContent showcaseData={firstHalf} />
            </div>
            <div className="lg:pt-[400px]">
              <ShowcaseContent showcaseData={secondHalf} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
