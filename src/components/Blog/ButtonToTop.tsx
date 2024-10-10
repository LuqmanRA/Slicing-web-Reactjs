import Arrow from "../../assets/arrow.svg?react";

const ButtonToTop = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex h-10 w-10 items-center overflow-hidden rounded-full sm:h-16 sm:w-16">
      <button
        onClick={() => {
          document.getElementById("pp")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group relative flex h-10 w-10 items-center rounded-full border border-solid border-[#131623] bg-white sm:h-16 sm:w-16"
      >
        <div className="absolute h-full w-full scale-0 rounded-full bg-[#131623] transition-transform duration-700 group-hover:scale-100"></div>
        <div className="inline-flex shrink-0 fill-current z-[101] m-auto text-[#131623] transition-all duration-500 group-hover:scale-110 group-hover:text-white">
          <Arrow />
        </div>
      </button>
    </div>
  );
};

export default ButtonToTop;
