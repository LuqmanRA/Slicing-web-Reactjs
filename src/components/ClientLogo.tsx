import { clients } from "../data/clients";
import { Link } from "react-router-dom";

const ClientLogo = (props: any) => {
  return (
    <div
      className={`${props.grid} grid w-full overflow-hidden rounded-2xl border border-black border-opacity-5`}
    >
      {clients.map((client) => (
        <Link
          to="#"
          key={client.id}
          className="cursor-pointer hover:bg-[#F6F7FF] min-h-[72px]  md:min-h-[88px] md:px-16 sm:py-[20px] lg:px-4 xl:px-[28px] group relative flex items-center justify-center  border-b border-r border-black border-opacity-5 px-4 py-6 transition-colors last:border-r-0"
        >
          <div className="relative flex w-[114px] items-center justify-center md:h-12">
            <img
              src={client.image}
              alt={client.title}
              className="object-contain w-full h-full text-transparent"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ClientLogo;
