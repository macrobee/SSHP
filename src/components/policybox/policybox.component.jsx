import { useState } from "react";

import { ReactComponent as ExpandIcon } from "../../assets/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/collapse.svg";

const PolicyBox = ({ policy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const { title, link } = policy;
  return (
    <div className="w-full shadow-md">
      <h3 className="w-full flex justify-between items-center bg-green hover:bg-pink duration-200 ease-in-out text-background px-1 py-1/2 font-bold" onClick={toggleExpand}>
        {title}{" "}
        {isExpanded ? (
          <CollapseIcon height={15} width={15} className="invert"/>
        ) : (
          <ExpandIcon height={15} width={15} className="invert"/>
        )}
      </h3>
      <div className={`${isExpanded ? "visible" : "hidden"} px-1 py-1/2 hover:text-pink`}>
        <a href={link} target="_blank" rel="noopener noreferrer">Link to {title}</a>
      </div>
    </div>
  );
};

export default PolicyBox;
