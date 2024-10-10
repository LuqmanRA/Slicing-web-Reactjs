import { Link } from "react-router-dom";
import ClientLogo from "../ClientLogo";
import HoverLink from "../HoverLink";
import { clients } from "../../data/clients";

const Client = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-6 lg:px-20 lg:py-16 xl:px-[156px] xl:py-20">
      <div className="m-auto w-full max-w-[1408px]">
        <div className="flex flex-col gap-14 lg:gap-20 2xl:gap-[120px]">
          <div className="flex flex-col gap-y-6 text-[#9d9dad]">
            <span className="text-2xl">Our friends</span>
            <h2 className="2xl:text-[56px] text-[40px] text-[#131623]">
              Join this group of outstanding brands we’re happy to call our
              clients
            </h2>
          </div>
          <div className="w-full">
            <div className="h-full">
              <ClientLogo grid="grid-cols-3 md:grid-cols-6" />
            </div>
          </div>
          <div className="flex flex-col gap-y-14 md:gap-y-20 2xl:gap-y-[120px]">
            <div className="flex w-full flex-col gap-10 lg:gap-y-6 2xl:gap-14">
              {clients.review.map((client) => (
                <div
                  key={client.id}
                  className="flex flex-col items-start gap-y-6 border-b border-[#d1d1e1] pb-10 last:border-none last:pb-0 2xl:pb-14"
                >
                  <div className="w-full lg:flex lg:flex-row-reverse lg:justify-between">
                    <div className="flex items-center gap-3 lg:w-full lg:max-w-[300px]">
                      <div className="relative h-10 w-10 overflow-hidden bg-[#eeeeee] rounded-full">
                        <img
                          src={client.image}
                          alt=""
                          className="object-cover w-full h-full text-transparent"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-[#131623]">{client.name}</span>
                        <span className="text-[#545469]">
                          {client.position}
                        </span>
                      </div>
                    </div>
                    <div className="pt-6 lg:pr-6">
                      <p className="text-2xl text-[#131623] md:max-w-[532px] xl:max-w-[624px]">
                        {client.mesage}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={client.href}
                    className="underline-hover relative text-black font-medium"
                  >
                    Show review
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex">
              <HoverLink
                to="#"
                bg="bg-transparent text-black h-20"
                textcolor="after:text-white"
              >
                Read all testimonials
              </HoverLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
