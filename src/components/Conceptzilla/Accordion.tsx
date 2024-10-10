import { useState } from "react";
import { accordion } from "../../data/accordionData";

const Accordion = () => {
  const [openContent, setOpenContent] = useState<number>(1);
  const totalContents = accordion.question.length;

  const handleToggle = (contentId: number) => {
    if (openContent === contentId) {
      setOpenContent((prev) => (prev === totalContents ? 1 : prev + 1));
    } else {
      setOpenContent(contentId);
    }
  };

  return (
    <div className="flex flex-col items-start self-stretch 2xl:max-w-[526px]">
      {accordion.question.map((content) => (
        <div
          key={content.id}
          className="w-full overflow-hidden border-b border-solid border-[#545454] bg-black py-6"
        >
          <div
            onClick={() => handleToggle(content.id)}
            className="flex w-full cursor-pointer items-center justify-between gap-2 self-stretch"
          >
            <h3 className="align-left text-white text-2xl font-[450]">
              {content.title}
            </h3>
            <div className="relative h-6 w-6">
              <div
                className={
                  openContent === content.id
                    ? "icon-min-plus show"
                    : "icon-min-plus h-full w-full text-white"
                }
              ></div>
            </div>
          </div>
          <div
            id="content"
            className={openContent === content.id ? "open" : ""}
          >
            <div className="h-2"></div>
            {content.description.map((data, index) => (
              <p key={index} className="mb-4 text-[#dcdcdc]">
                {data}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
