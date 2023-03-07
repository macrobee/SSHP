import { motion, AnimatePresence } from "framer-motion";

import Banner from "../../components/banner/banner";
import EventBox from "../../components/eventbox/eventbox.component";

import { SectionDiv } from "../section.styles";

const eventsList = [
  {
    name: "Ontario Cycling",
    photoUrl: "/links/ontariocycling.png",
    link: "https://ontariocycling.org/sshd23/",
  },
  {
    name: "Bike Brigade",
    photoUrl: "/links/bikebrigade.png",
    link: "https://www.bikebrigade.ca/",
  },

  {
    name: "Ride for Brain Health",
    photoUrl: "/links/baycrest.png",
    link: "https://baycrestbikeforbrainhealth.crowdchange.ca/16201/team/14825",
  },
];
const affiliateLinks = [
  {
    name: "Midweek Cycling Club",
    photoUrl: "/links/midweek.png",
    link: "https://midweekclub.ca/",
  },
  {
    name: "Gyaldem Cycling Collective",
    photoUrl: "/links/gyaldem.jpg",
    link: "https://www.instagram.com/gyaldemcyclingcollective/?hl=en",
  },
  {
    name: "Xert",
    photoUrl: "/links/xert.jpg",
    link: "https://www.xertonline.com/",
  },
];
const animationVariants = {
  initial: { y: "50px", x: 0, opacity: 0 },
  animate: {
    opacity: 1,
    y: "0px",
    x: 0,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};
const Community = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner text={"Community"} section="events" sectionLength={4}></Banner>
        <motion.div
          className="flex flex-col justify-center items-center gap-3 w-80 md:w-60 pt-3 pb-3"
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-xl font-bold" variants={animationVariants}>
            Saddle Sisters in the community
          </motion.h2>

          <div className="flex flex-wrap justify-center items-baseline gap-2">
            {eventsList.map((event) => {
              return <EventBox event={event} />;
            })}
          </div>

          <motion.h2 className="text-xl font-bold" variants={animationVariants}>
            Saddle Sister affiliate links{" "}
          </motion.h2>

          <div className="flex flex-wrap justify-center items-baseline gap-2">
            {affiliateLinks.map((event) => {
              return <EventBox event={event} />;
            })}
          </div>
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Community;
