import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SlideshowImage } from "./banner.styles";

const Slideshow = ({ section, sectionLength }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const increaseIndex = () => {
      setCurrentIndex((currentIndex + 1) % sectionLength);
    };

    const timer = setTimeout(increaseIndex, 10000);

    return function cancelTimeout() {
      clearTimeout(timer);
    };
  }, [currentIndex]);
  return (
    <AnimatePresence>
      <SlideshowImage
        as={motion.img}
        key={`/sshp/${section}${currentIndex}.jpg`}
        src={`/sshp/${section}${currentIndex}.jpg`}
        alt="sisters together"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1, ease: 'linear'}}
      />
    </AnimatePresence>
  );
};

export default Slideshow;
