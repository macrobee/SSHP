import { motion, AnimatePresence } from "framer-motion";

import Banner from "../../components/banner/banner";
import EventBox from "../../components/eventbox/eventbox.component";

import { SectionDiv } from "../section.styles";

const eventsList = [
  {
    name: "Ontario Cycling",
    description: "SSHP started from a small group of women who just wanted to ride during the pandemic. Since then, it has grown into a vibrant community of over 300 women. Read the story about how SSHP came to be:",
    photoUrl: "/links/ontariocycling.png",
    link: "https://ontariocycling.org/sshd23/",
  },
  {
    name: "Bike Brigade", description: "The Bike Brigade is a group of volunteer cyclists delivering food and other essentials by bike across the city. Learn about how to help underinvested communities in our city with the Bike Brigade:",
    photoUrl: "/links/bikebrigade.png",
    link: "https://www.bikebrigade.ca/",
  },

  {
    name: "Ride for Brain Health",
    description: "In June 2024, SSHP will be riding at the Baycrest Bike for Brain Health to support brain research. Join our team here: ",
    photoUrl: "/links/baycrest.png",
    link: "https://baycrestbikeforbrainhealth.crowdchange.ca/42340/team/19300",
  },
];
const affiliateLinks = [
  {
    name: "Midweek Cycling Club",
    description: "Midweek Cycling Club (MWCC) is an athletes-for-life bike racing program in Toronto and Missisauga. SSHP members have learned essential race skills through MWCC's Learn to Race workshops and Midweek Crit races. Learn more about them here: ",
    photoUrl: "/links/midweek.png",
    link: "https://midweekclub.ca/",
  },
  {
    name: "Gyaldem Cycling Collective",
description: "Gyaldem Cycling Collective (GDCC) is a volunteer-run community cycling group for women. Find out about their events here: ",
    photoUrl: "/links/gyaldem.jpg",
    link: "https://www.instagram.com/gyaldemcyclingcollective/?hl=en",
  },
  {name: "Morning Glory Cycling Club",
description: "The Morning Glory Cycling Club is a group of riders that enjoy watching the sunrise from their saddles! #Getupandgo",
photoUrl: "/links/MGCC.png",
link: "http://www.mgridetoronto.com/"}
  
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
              return <EventBox event={event} key={`${event.name+"box"}`}/>;
            })}
          </div>

          <motion.h2 className="text-xl font-bold" variants={animationVariants}>
            Saddle Sisters Cycling Friends{" "}
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
