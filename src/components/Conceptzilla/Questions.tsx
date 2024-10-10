import Accordion from "./Accordion";

const Questions = () => {
  return (
    <section className="relative z-50 bg-black px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex w-full flex-col items-start gap-y-10 lg:gap-20 2xl:gap-[120px]">
          <h2 className="xl:text-[64px] md:text-[56px] text-[40px] text-white">
            Frequently asked questions
          </h2>
          <div className="relative flex flex-col items-start gap-10 md:gap-20 lg:grid lg:grid-cols-2 xl:gap-[120px] 2xl:gap-4s0">
            <Accordion />
            <div className="relative m-auto flex h-[410px] w-[358px] md:h-[448px] md:w-[392px] lg:sticky lg:top-20 lg:mt-0 xl:h-[576px] xl:w-[504px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="https://cms.shakuro.com/media/CC-FAQ-video-mp4.mp4"
                className="absolute top-1/2 z-[51] h-full w-full -translate-y-1/2 object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
