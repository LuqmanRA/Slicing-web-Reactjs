const ResultsCard = ({ resultsData }: any) => {
  return (
    <>
      {resultsData.map((data: any) => (
        <div key={data.id} className="flex flex-col gap-y-10">
          <div className="flex aspect-square h-full transform overflow-hidden rounded-2xl worksItemLink">
            <img
              src={data.image}
              alt="image"
              data-image="true"
              className="flex-grow bg-[#f2f5f7] transition-transform duration-300 h-full object-cover"
            />
          </div>
          <div className="text-[#131623]">
            <h3 className="mb-4 text-2xl md:max-w-[660px]">{data.title}</h3>
            <p className="mb-6">{data.description}</p>
            <ul className="font-medium">
              {data.features.map((feature: any, index: any) => (
                <li key={index}>→ {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultsCard;
