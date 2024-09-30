import { Link } from "react-router-dom";

const ShowcaseContent = () => {
  return (
    <article>
      <Link to="#" className="w-full worksItemLink">
        <div className="flex flex-col">
          <div className="flex aspect-square h-full transform overflow-hidden rounded-2xl">
            <img
              src="https://shakuro.com/_next/image?url=https%3A%2F%2Fcms.shakuro.com%2Fmedia%2Fbanner-void-1600x1450.webp&w=768&q=75"
              alt="image"
              data-image="true"
              className="flex-grow bg-[#f2f5f7] transition-transform duration-300 h-full object-cover"
            />
          </div>
          <div className="pt-6 xl:pt-10">
            <p className="text-xs mb-4 uppercase text-[#9d9dad] xl:mb-6">
              B2C, GAMING SOCIAL COMMUNITY, WEB PLATFORM
            </p>
            <h2 className="text-2xl mb-2 text-[#131623] transition-colors duration-300 xl:text-4xl xl:mb-6">
              Crafting Void: Comprehensive Design, Branding, Illustrations and
              Video Creation
            </h2>
            <p className="max-h-[48px] md:max-h-[64px] md:text-xl text-[#131623] text-base overflow-hidden text-ellipsis">
              Transforming Void: Social Ties, progress tracking and Game
              customizations. We crafted user-centric, game-specific interfaces
              for an immersive gaming experience.
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ShowcaseContent;
