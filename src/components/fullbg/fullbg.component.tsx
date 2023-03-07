import { motion } from "framer-motion";
import uniqid from "uniqid";

import NavLink from "../banner/navlink/navlink.component";
import AnimatedHeader from "../banner/animatedHeader/animatedHeader.component";

import { BackgroundImage } from "./fullbg.styles";

type NavLinks = {
  text: string;
  link: string;
};

type FullBackgroundProps = {
  headerText1: string;
  headerText2: string;
  links: NavLinks[];
  backgroundLink: string;
};
const linkDivAnimation = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};
const linkAnimation = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const FullBackground = ({
  headerText1,
  headerText2,
  links,
  backgroundLink,
}: FullBackgroundProps) => {
  return (
    <BackgroundImage
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      url={backgroundLink}
    >
      <div className="h-[15vh] md:h-[10vh] bg-transparent"></div>

      <motion.div className="header-text flex flex-col justify-center items-center md:flex-row gap-1/2 relative z-10">
        <AnimatedHeader text={headerText1} />
        <AnimatedHeader text={headerText2} />
      </motion.div>

      <motion.div
        variants={linkDivAnimation}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-1 md:gap-2 flex-col md:flex-row px-3 justify-center items-center overflow-hidden"
      >
        {links.length &&
          links.map(({ text, link }) => (
            <motion.span
              variants={linkAnimation}
              className="flex justify-center items-center"
            >
              <NavLink text={text} link={link} />
            </motion.span>
          ))}
      </motion.div>
    </BackgroundImage>
  );
};

export default FullBackground;
