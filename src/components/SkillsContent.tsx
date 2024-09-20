import { useState } from "react";
import { contents, Content } from "../data/contents";

const SkillsContent = () => {
  const [openContent, setOpenContent] = useState<number>(1);
  const totalContents = contents.length;

  const handleToggle = (contentId: number) => {
    if (openContent === contentId) {
      setOpenContent((prev) => (prev === totalContents ? 1 : prev + 1));
    } else {
      setOpenContent(contentId);
    }
  };

  return (
    <div className="flex flex-col items-start self-stretch 2xl:max-w-[526px]">
      {contents.map((content: Content) => (
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
            <p className="mb-4 text-white">{content.description}</p>
            {content.details.map((detail, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg text-white mb-2">{detail.heading}</h4>
                <ul className="pl-[18px] list-disc">
                  {detail.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="list-disc text-[#a2a2a2]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
