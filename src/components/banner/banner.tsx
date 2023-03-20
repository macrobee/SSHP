import { motion } from "framer-motion";

import Slideshow from "./slideshow.component";

import { HeroSection } from "./banner.styles";

//typing objects
//type (allows union, more for functional programming)
type BannerProps = {
  text: string;
  section: string;
  sectionLength: number;
};

//interface (extendable, more for OOP)
interface IBannerProps {
  text: string;
  section?: string | number;
  sectionLength: number;
}

//typing functions
// const func: (a: string, b: string, c: number) => void = (a, b, c)=> {}

const Banner = ({ text, section, sectionLength }: IBannerProps) => {
  return (
    <HeroSection>
      <motion.h1
        className="text-3xl font-bold text-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </motion.h1>
      <Slideshow section={section} sectionLength={sectionLength} />
      <div></div>
    </HeroSection>
  );
};

export default Banner;
