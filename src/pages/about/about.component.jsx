import { motion, AnimatePresence } from "framer-motion";

import { SectionDiv } from "../section.styles";

import Banner from "../../components/banner/banner";

const pVariants = {
  initial: { y: "50px", x: 0, opacity: 0 },
  animate: {
    opacity: 1,
    y: "0px",
    x: 0,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};
const About = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.5}}

      >
        <Banner text={"Who we are"} section="about" sectionLength={1} />
        <motion.div
          className="flex flex-col items-center gap-2 w-80 md:w-60 pt-3 pb-3"
          as={motion.div}
          variants={pVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p className="font-semibold text-green" variants={pVariants}>
            SSHP aims to be an inclusive space for Women, Trans, Femme, and
            Non-Binary cyclists.
          </motion.p>
          <motion.p variants={pVariants}>
            We organize rides between 20-30 km/h avg - Be sure to read the
            description of the posted ride and RSVP on Strava.
          </motion.p>
          <motion.p variants={pVariants}>
            We work together and communicate to maintain safe rides.
          </motion.p>
          <motion.p variants={pVariants}>
            We stay together and don't leave people behind.
          </motion.p>
          <motion.p variants={pVariants}>Helmets 100% mandatory.</motion.p>
          <motion.p variants={pVariants}>
            Send us a DM on our Instagram (@saddlesisterscycling) to ask about
            how to join our DISCORD chat group (or email info@saddlesisters.ca)
            Our rides are not OCA sanctioned.
          </motion.p>
          <motion.p variants={pVariants}>
            If you are interested in joining our race team, please email
            <span className="text-green font-bold"> info@saddlesisters.ca</span>
            .
          </motion.p>
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default About;
