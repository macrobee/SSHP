import { motion } from "framer-motion";

import Slideshow from "./slideshow.component";

import { HeroSection } from "./banner.styles";

const Banner = ({ text, section, sectionLength }) => {
  return (
    <HeroSection>
      <motion.h1 className="text-3xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {text}
      </motion.h1>

      <Slideshow section={section} sectionLength={sectionLength} />
    </HeroSection>
  );
};

export default Banner;
