const ParallaxVideoSection = () => {
  return (
    <section className="h-[483px] md:h-[420px] lg:h-[524px] lg:min-h-[524px] lg:pb-0 xl:h-[732px] 2xl:min-h-[800px]">
      <div className="relative top-0 flex h-full w-full justify-center lg:fixed opacity-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 h-full w-full -translate-y-1/2 object-cover"
        >
          <source
            src="https://cms.shakuro.com/media/Shakuro Home Page Video_mp4.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;
