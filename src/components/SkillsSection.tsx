import HoverLink from "./HoverLink";
import SkillsContent from "./SkillsContent";

const SkillsSection = () => {
  return (
    <section className="relative z-50 h-auto bg-black px-4 py-20 md:px-6 md:py-[120px] lg:px-20 lg:py-[120px] xl:px-[156px] xl:py-40 2xl:px-[256px] 2xl:py-[240px]">
      <div className="m-auto flex w-full flex-col items-start gap-y-10 md:gap-y-10 lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-[120px] 2xl:max-w-[1408px] 2xl:gap-40">
        <div className="flex flex-col gap-12 md:items-start lg:gap-14 2xl:max-w-[514px]">
          <div className="2xl:max-w-[528px]">
            <h2 className="text-[40px] leading-tight text-white xl:text-[56px] 2xl:text-[64px] mb-6 text-text-t900-d md:mb-8">
              Helping clients embrace the change
            </h2>
            <div className="text-white text-xl flex flex-col items-start gap-6">
              <p>
                We rely on imagination and technical prowess to help brands
                transform, shine, and reinvent themselves commercially and
                culturally.
              </p>
              <p>
                Our biggest value is the client’s trust.
                <br />
                Our only achievement is their success.
              </p>
            </div>
          </div>
          <div className="md:w-auto">
            <HoverLink
              to="/get-in-touch"
              bg="bg-white text-black border-white"
              textcolor="after:text-white"
            >
              Get in touch
            </HoverLink>
          </div>
        </div>
        <SkillsContent />
      </div>
    </section>
  );
};

export default SkillsSection;
