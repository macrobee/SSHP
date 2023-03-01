import { motion, AnimatePresence } from "framer-motion";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";

const eventsList = [
  { name: "SSHP End of Year Party", photoUrl: "/sshp/events2.jpg" },
  { name: "Bridge Bike Factory Tour", photoUrl: "/sshp/events3.jpg" },
  { name: "Midweek Crit races", photoUrl: "/sshp/eventpic-midweek.jpg" },
  {
    name: "Safe Streets in High Park Protest",
    photoUrl: "/sshp/eventpic-hp-protest.jpg",
  },
  {
    name: "Know Your Rights Workshop With the Bike Lawyer",
    photoUrl: "/sshp/events1.jpg",
  },
  { name: "Niagara Pride Ride", photoUrl: "/sshp/events0.jpg" },
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
const Events = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner
          text={"Past events"}
          section="events"
          sectionLength={4}
        ></Banner>
        <motion.div
          className="flex flex-col justify-center items-center gap-2 w-80 md:w-60 pt-3 pb-3"
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-xl font-bold" variants={animationVariants}>
            Some of our past events
          </motion.h2>
          {eventsList.map((event) => {
            const { name, photoUrl } = event;
            return (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-1 justify-center items-center`}
                key={photoUrl}
              >
                <h3 className="text-lg font-semibold text-green">{name}</h3>
                <img src={photoUrl} alt={`SSHP at ${name}`} className="w-80" />
              </motion.div>
            );
          })}
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Events;
