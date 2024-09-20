const PausedOverlay = () => {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl">
      <img
        className="group-hover:opacity-0 inline-block aspect-square w-full object-cover transition-all duration-500"
        src="https://shakuro.com/_next/image?url=https%3A%2F%2Fcms.shakuro.com%2Fmedia%2Fbanner-void-1600x1450.webp&w=1440&q=75"
      />
    </div>
  );
};

export default PausedOverlay;
