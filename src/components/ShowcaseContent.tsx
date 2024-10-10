import { Link } from "react-router-dom";

const ShowcaseContent = ({ showcaseData }: any) => {
  return (
    <>
      {showcaseData.map((data: any) => (
        <article key={data.id}>
          <Link to={data.href} className="w-full worksItemLink">
            <div className="flex flex-col">
              <div className="flex aspect-square h-full transform overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt="image"
                  data-image="true"
                  className="flex-grow bg-[#f2f5f7] transition-transform duration-300 h-full object-cover"
                />
              </div>
              <div className="pt-6 xl:pt-10">
                <p className="text-xs mb-4 uppercase text-[#9d9dad] xl:mb-6">
                  {data.category}
                </p>
                <h2 className="text-2xl mb-2 text-[#131623] transition-colors duration-300 xl:text-4xl xl:mb-6">
                  {data.title}
                </h2>
                <p className="max-h-[48px] md:max-h-[64px] md:text-xl text-[#131623] text-base overflow-hidden text-ellipsis">
                  {data.description}
                </p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default ShowcaseContent;
