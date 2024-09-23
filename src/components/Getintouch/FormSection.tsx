import Button from "./Button";

const FormSection = () => {
  return (
    <section className="bg-white px-4 pb-20 pt-40 md:px-6 md:pb-[120px] lg:px-20 lg:pt-[200px] xl:px-[156px] xl:pt-[240px] 2xl:px-[256px]">
      <div className="mr-auto max-w-[700px] 2xl:m-auto 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-10 2xl:max-w-[700px]">
          <div className="flex flex-col gap-y-6 text-black">
            <h1 className="text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] tracking-[-2px]">
              Get in touch
            </h1>
            <p className="text-xl">
              Before we start, we would like to better understand your needs.
              We'll review your application and schedule a free estimation call.
            </p>
          </div>
          <form action="">
            <div className="mb-16 flex flex-col gap-12 md:mb-20">
              <div className="flex flex-col gap-8 md:gap-6">
                <div className="relative flex flex-col gap-6">
                  <input
                    className="form md:py-6"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="relative flex flex-col gap-6">
                  <input
                    className="form md:py-6"
                    type="text"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="relative flex flex-col gap-6">
                  <textarea
                    name="message"
                    className="text-lg text-[#131623] bg-white md:py-6 min-h-[65px] resize-none md:min-h-[81px] rounded-none"
                    placeholder="Tell us about your project"
                    id="contact-message"
                  ></textarea>
                </div>
              </div>
              <div className="relative flex flex-col gap-6">
                <label className="text-[#131623] text-lg">Project budget</label>
                <div className="flex flex-wrap gap-[12px]">
                  <div className="radio relative cursor-pointer overflow-hidden rounded-[48px] py-2 px-4 border border-solid border-[#131623] text-[#131623]">
                    <input
                      type="radio"
                      name="budget"
                      data-gtm-form-interact-field-id="0"
                      className="absolute cursor-pointer left-0 top-0 h-full w-full border-0 opacity-0"
                    />
                    <label className="text-lg cursor-pointer">5-15k</label>
                  </div>
                  <div className="radio relative cursor-pointer overflow-hidden rounded-[48px] py-2 px-4 border border-solid border-[#131623] text-[#131623]">
                    <input
                      type="radio"
                      name="budget"
                      data-gtm-form-interact-field-id="1"
                      className="absolute cursor-pointer left-0 top-0 h-full w-full border-0 opacity-0"
                    />
                    <label className="text-lg cursor-pointer">5-15k</label>
                  </div>
                  <div className="radio relative cursor-pointer overflow-hidden rounded-[48px] py-2 px-4 border border-solid border-[#131623] text-[#131623]">
                    <input
                      type="radio"
                      name="budget"
                      data-gtm-form-interact-field-id="2"
                      className="absolute cursor-pointer left-0 top-0 h-full w-full border-0 opacity-0"
                    />
                    <label className="text-lg cursor-pointer">5-15k</label>
                  </div>
                  <div className="radio relative cursor-pointer overflow-hidden rounded-[48px] py-2 px-4 border border-solid border-[#131623] text-[#131623]">
                    <input
                      type="radio"
                      name="budget"
                      data-gtm-form-interact-field-id="3"
                      className="absolute cursor-pointer left-0 top-0 h-full w-full border-0 opacity-0"
                    />
                    <label className="text-lg cursor-pointer">5-15k</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
