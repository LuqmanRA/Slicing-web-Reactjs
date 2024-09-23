const Button = () => {
  return (
    <button
      type="submit"
      className={`relative flex items-center justify-center border border-solid border-black font-medium cursor-pointer group w-full md:w-auto py-6 px-8 h-20 overflow-hidden rounded-[48px] bg-white`}
    >
      <div
        className="inset-0 absolute z-1 block overflow-hidden rounded-[48px] text-[inherit] "
        style={{ transform: "translateZ(0)" }}
      >
        <div
          className="block h-full w-full translate-y-[-101%] rounded-[48px] rounded-tl-[48px] rounded-tr-[48px] bg-current group-hover:translate-y-0 group-hover:rounded-[0]"
          style={{
            transition:
              "transform .5s cubic-bezier(.4,0,0,1), border-radius .5s cubic-bezier(.4,0,0,1)",
          }}
        ></div>
      </div>
      <div className="relative z-2 block overflow-hidden">
        <span
          className={`after:content-[attr(data-text)] after:absolute after:left-0 after:-top-[110%] after:block block  group-hover:translate-y-[110%] after:text-white`}
          data-text="Send Request"
          style={{
            transition: "transform .8s cubic-bezier(.16,1,.3,1)",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          }}
        >
          Send Request
        </span>
      </div>
    </button>
  );
};

export default Button;
