import { motion, AnimatePresence } from "framer-motion";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";

const rideList = [
  {
    day: "Monday",
    rides: [
      {
        rideName: "Where’s the Dirt?",
        time: "6:00am",
        location: "Avenue/Bloor",
        pace: "n/a",
        notes: "Gravel/trail ride/skills practice. 32mm+ tire width recommended."
      },
    ],
  },
  {
    day: "Tuesday",
    rides: [
      {
        rideName: "Tommy Tuesday",
        time: "6:15am",
        location: "Canary District",
        pace: "20-23kph average",
      },
      {
        rideName: "Turn Baby Turn",
        time: "5:45pm",
        location: "Jet Fuel, 519 Parliament Street",
        pace: "28kph+ average",
      },
    ],
  },
  {
    day: "Wednesday",
    rides: [
      {
        rideName: "Wake-Up Wednesday",
        time: "5:45am",
        location: "High Park",
        pace: "25-27kph average",
      },
      {
        rideName: "INTRO 2 SSHP",
        time: "5:45am",
        location: "High Park",
        pace: "n/a",
        notes: "Beginner rides for new ‘sisters’ with focus on skills, paceline, rotating, turning/cornering, and more. Twice a month (or as needed).",
      }, {
        rideName: "HILLS HILLS HILLS on repeat",
        time: "6:00am until 7:15am",
        location: "High Park",
        pace: "25-27kph average",
        notes: "The odd morning we will put this event together where we do some Ellis laps and High Park laps while we learn to ride and stay together as a group."
      }, {
        rideName: "Lift Me Up ...Hills",
        time: "6:30pm",
        location: "High Park",
        pace: "n/a",
        notes: "West end hills in the PM. The goal will be elevation rather than speed, with an average speed of 25-27 km on flats."
      },
    ],
  },
  {
    day: "Thursday",
    rides: [
      {
        rideName: "Rotating Oats",
        time: "5:45am",
        location: "East End",
        pace: "n/a",
        notes: "Check Strava to see which type of oats we're serving up each week."
      },
      {
        rideName: "MGCC + SSHP",
        time: "5:50am",
        location: "High Park",
        pace: "26-28+ kph",
        notes: "Must be a registered OCA SSHP member or MGCC member to join this ride. No exceptions."
      }
    ],
  },
  {
    day: "Friday",
    rides: [
      {
        rideName: "Footloose Friday",
        time: "6:00am",
        location: "High Park",
        pace: "20-23kph average",
        notes: "Approx 20-30km ride starting from High Park."
      },
      {
        rideName: "Far-East Friday",
        time: "6:00am/pm",
        location: "East End",
        pace: "20-22kph average",
        notes: "Morning or evening ride (alternating weekly) starting near Danforth and Woodbine. Check Strava for details."
      }
    ],
  },
  {
    day: "Saturday",
    rides: [
      {
        rideName: "COOL BEANS",
        time: "Later start",
        location: "n/a",
        pace: "20-23kph average",
        notes: "Check Strava for details"
      },
    ],
  },
  {
    day: "Sunday",
    rides: [
      {
        rideName: "MGCC Social Sunday",
        time: "5:50am",
        location: "n/a",
        pace: "25+kph average depending on the group",
        notes: "First Sunday of each month we may attend the MGCC Sunday Social coed ride. Pace is approx 25+ avg depending on the group. Must be a registered OCA SSHP member or MGCC member to join this ride. No exceptions. ",
      },
    ],
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

const Rides = () => {
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
          text={"Group rides"}
          section="grouprides"
          sectionLength={4}
        ></Banner>
        <motion.div
          className="flex flex-col gap-2 w-80 md:w-60 pt-3 pb-3"
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={animationVariants}>
            Saddle Sister group rides are not sanctioned by the OCA.
          </motion.p>


          <motion.p
            className="italic text-justify"
            variants={animationVariants}
          >
            <span className="font-bold not-italic">Note:</span> Cycling involves
            many inherent risks. Although we care for each other, it is each
            rider's responsibility to follow the rules of the road, ride
            defensively, avoid hazards and cycle safely. By joining Saddle
            Sisters of High Park ("SSHP") group rides, you acknowledge that you
            do so at your own risk. Neither SSHP nor its ride leaders/ride
            organizers assume responsibility to safeguard SSHP ride participants
            from the risks of cycling (including but not limited to personal
            injury, death and/or property damage) nor does SSHP nor its ride
            leaders/ride organizers assume any duty of care for ride
            participants.
          </motion.p>
          <motion.h3 className="text-xl font-bold">
            2023 weekly ride schedule
          </motion.h3>
          {rideList.map((dayInfo) => {
            const { day, rides } = dayInfo;
            const rideList = rides.map((ride) => {
              const { rideName, time, location, pace, notes } = ride;
              return (
                <motion.div variants={animationVariants}>
                  <h4 className="text-base font-bold text-green">
                    {rideName}
                  </h4>
                  <div>
                    <p className="text-">
                      <span className="font-semibold">Meeting time:</span> {time}
                    </p>
                    <p className="text-"><span className="font-semibold">Location:</span> {location} </p>
                    <p className="text-"><span className="font-semibold">Pace:</span> {pace}</p>
                    {notes ? <p className="text-"><span className="font-semibold"> Notes: </span> <span className="italic"> {notes}</span></p> : null}
                  </div>
                </motion.div>
              );
            });
            return (
              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold">{day} Rides</h3>
                {rideList}
              </motion.div>
            );
          })}
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Rides;
