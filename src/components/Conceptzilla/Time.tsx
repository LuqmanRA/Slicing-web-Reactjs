const Time = () => {
  return (
    <section className="relative z-50 bg-[#F3F4F5] px-4 pb-[120px] pt-[200px] md:px-6 lg:px-20 xl:px-[156px] xl:pt-[240px]">
      <div className="m-auto w-full 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-[120px] 2xl:gap-40">
          <div className="text-[40px] md:text-[56px] text-[#131623] 2xl:text-[64px] leading-[1.12]">
            <h2>Your design concept within 1 week</h2>
          </div>
          <div className="text-[#131623] text-xl leading-relaxed">
            <p>
              A design concept is what you need when time crunch doesn't allow
              for a complete process. This is where Conceptzilla comes in handy.
              We design up to four main screens of your product, ready for
              public display. Fixed price. One week.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
