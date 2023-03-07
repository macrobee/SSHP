import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ReactComponent as ExpandIcon } from "../../assets/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/collapse.svg";

const variants = {
  open: { opacity: 1, height: "auto", y:0 },
  collapsed: { opacity: 0, height: 0, y:-50 },
};

const PolicyBox = ({ policy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const { title, link } = policy;
  return (
    <motion.div className="w-full shadow-md" initial={{ height: "auto" }}>
      <h3
        className="w-full flex justify-between items-center bg-green hover:bg-pink duration-200 ease-in-out text-background px-1 py-1/2 font-bold z-20 relative"
        onClick={toggleExpand}
      >
        {title}{" "}
        {isExpanded ? (
          <CollapseIcon height={15} width={15} className="invert" />
        ) : (
          <ExpandIcon height={15} width={15} className="invert" />
        )}
      </h3>
      {isExpanded && (
        <motion.div
          variants={variants}
          initial={isExpanded ? "open" : "collapsed"}
          animate={isExpanded ? "open" : "collapsed"}
          className={`px-1 py-1/2 hover:text-pink duration-200 z-10 relative`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link to {title}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PolicyBox;
