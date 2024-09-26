import { Link } from "react-router-dom";
import Logo from "../../assets/cardlogo.svg?react";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import { useRef } from "react";
import { cards } from "../../data/cards";

const Card2 = () => {
  const wrapperLinkRef = useRef(null);

  return (
    <>
      {cards.slice(4, 7).map((card) => (
        <Link
          key={card.id}
          to={card.href}
          className="group text-slate-700 font-medium"
          ref={wrapperLinkRef}
        >
          <div className="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-4 xl:gap-y-8">
            <HoverVideoPlayer
              videoSrc={card.video}
              restartOnPaused
              muted
              preload="auto"
              videoClassName="hover-video"
              pausedOverlay={<PausedOverlay />}
              hoverTarget={wrapperLinkRef}
            />
            <p className="text-black text-4xl font-[450] md:max-w-[660px]">
              {card.title}
            </p>
            <blockquote className="!gap-[0px] flex items-stretch">
              <div className="flex translate-x-[-10px] flex-col items-center justify-center pb-[6px]">
                <div className="pb-[12px] pt-2 md:pb-4 lg:pb-[12px] xl:pb-4 text-blue-800">
                  <div className="h-[16px] w-[20px]">
                    <Logo />
                  </div>
                </div>
                <div className="h-full w-[1px]">
                  <div className="h-full w-full bg-blue-500 opacity-20"></div>
                </div>
              </div>
              <div className="gap-2 md:!gap-4 flex flex-col">
                <div className="text-base font-normal xl:text-xl text-black">
                  {card.message}
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-black font-semibold">{card.name}</div>
                    <div className="text-slate-700 xl:leading-relaxed">
                      {card.position}
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card2;
