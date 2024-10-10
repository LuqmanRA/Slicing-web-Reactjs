import Video from "../../assets/who_segm_about-webm.webm";
import { companies } from "../../data/companies";
import ResultsCard from "./ResultsCard";

const Results = () => {
  const firstHalf = companies.data3.slice(0, 3);
  const secondHalf = companies.data3.slice(3, 5);

  return (
    <section className="relative z-50 bg-white px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-20 md:gap-[120px] xl:gap-40">
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 2xl:gap-14">
            <h3 className="text-[#131623] tracking-[-2px] xl:text-[64px] md:text-[56px] text-[40px]">
              What you’ll get as a result
            </h3>
            <div className="flex flex-col gap-20 lg:grid lg:grid-cols-2 lg:items-center xl:gap-[120px] 2xl:gap-40">
              <div className="flex flex-col gap-10 lg:gap-16 2xl:gap-20">
                {companies.data2.map((data) => (
                  <div key={data.id} className="flex flex-col gap-4">
                    <h3 className="2xl-text-[36px] text-2xl text-[#131623]">
                      {data.title}
                    </h3>
                    <p className="text-[#545469] text-xl">{data.description}</p>
                  </div>
                ))}
              </div>
              <div className="relative m-auto flex w-[358px] items-center justify-center md:w-[392px] xl:w-[396px] 2xl:w-[490px]">
                <div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    src={Video}
                    className="h-full min-h-[466px] w-full object-cover md:min-h-[512px] 2xl:min-h-[642px]"
                  ></video>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 lg:grid lg:grid-cols-2 xl:gap-[120px] 2xl:gap-40">
            <div className="flex flex-col gap-20 lg:gap-[120px] xl:gap-40">
              <ResultsCard resultsData={firstHalf} />
            </div>
            <div className="flex flex-col gap-20 lg:gap-[120px] lg:pt-[400px] xl:gap-40">
              <ResultsCard resultsData={secondHalf} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
