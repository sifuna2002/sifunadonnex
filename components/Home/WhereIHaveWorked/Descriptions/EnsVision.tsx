import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development in the web domain using Angular, Python, Bootstrap",
      keywords: ["Angular", "web", "Python", "SQLite"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and gained expertise in Data analysis",
      keywords: ["Data analysis", "Anmgular"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer <span className="text-AAsecondary">Angular</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2022 - Jan 2023</span>
         
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
