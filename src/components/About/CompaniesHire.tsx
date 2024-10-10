import Video from "../../assets/who_segm_about-webm.webm";
import { companies } from "../../data/companies";

const CompaniesHire = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-6 lg:px-20 lg:py-16 xl:px-[156px] xl:py-20">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-14 lg:gap-20 xl:gap-10">
          <div className="flex flex-col gap-y-4 text-[#9d9dad]">
            <span className="text-2xl">Companies hire us</span>
            <h2 className="2xl:text-[56px] text-[40px] text-[#131623]">
              When it’s time for a key change
            </h2>
          </div>
          <div className="flex flex-col gap-20 lg:grid lg:grid-cols-2 lg:items-center xl:gap-[120px] 2xl:gap-40">
            <div className="flex flex-col gap-10 lg:gap-16 2xl:gap-20">
              {companies.data1.map((data) => (
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
      </div>
    </section>
  );
};

export default CompaniesHire;
