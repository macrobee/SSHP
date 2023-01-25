import { motion } from "framer-motion";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";

const eventsList = [
  { name: "SSHP End of Year Party", photoUrl: "/sshp/events2.jpg" },
  { name: "Bridge Bike Factory Tour", photoUrl: "/sshp/events3.jpg" },
  { name: "Rapha Women's 100", photoUrl: "/sshp/eventpic-womens-100.jpg" },
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
    <SectionDiv>
      <Banner text={"Past events"} section="events" sectionLength={5}></Banner>
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
              variants={animationVariants}
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
  );
};

export default Events;
