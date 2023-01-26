import { motion } from "framer-motion";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";

const rideList = [
  {
    day: "Monday",
    rides: [
      {
        rideName: "Never Miss a Monday",
        time: "6:30am-7:30am",
        location: "High Park",
        pace: "25kph average",
      },
      {
        rideName: "Learn To Race (LTR) with Midweek",
        time: "6:30pm",
        location: "Mississauga",
        pace: "n/a",
      },
    ],
  },
  {
    day: "Tuesday",
    rides: [
      {
        rideName: "Pre-Tommy Tuesday",
        time: "6:00am",
        location: "Exhibition",
        pace: "20-25kph average",
      },
      {
        rideName: "Tommy Tuesday",
        time: "6:30-8:00am",
        location: "Canary District",
        pace: "20-25kph average",
      },
      {
        rideName: "Midweek Crit",
        time: "6:15pm",
        location: "Mississauga",
        pace: "race pace",
      },
    ],
  },
  {
    day: "Wednesday",
    rides: [
      {
        rideName: "High Park/Ellis Laps",
        time: "6:00am-7:15am",
        location: "High Park",
        pace: "21-25kph average",
      },
    ],
  },
  {
    day: "Thursday",
    rides: [
      {
        rideName: "Steel Cut Oats (hills)",
        time: "5:45am",
        location: "Canary District",
        pace: "25kph average",
      },
    ],
  },
  {
    day: "Friday",
    rides: [
      {
        rideName: "Duck Duck Goose/Bayview Drills",
        time: "6:30-8:00am",
        location: "Canary District",
        pace: "20-24kph average",
      },
    ],
  },
  {
    day: "Saturday",
    rides: [
      {
        rideName: "Open to discord for recommendations/ideas",
        time: "n/a",
        location: "n/a",
        pace: "n/a",
      },
    ],
  },
  {
    day: "Sunday",
    rides: [
      {
        rideName: "Coffee Ride/100km route",
        time: "7:00-11am",
        location: "n/a",
        pace: "n/a",
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
    <SectionDiv>
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
          Stay tuned for our 2023 ride schedule!
        </motion.p>
        <motion.p className="italic text-justify" variants={animationVariants}>
          <span className="font-bold not-italic">Note:</span> Cycling involves
          many inherent risks. Although we care for each other, it is each
          rider's responsibility to follow the rules of the road, ride
          defensively, avoid hazards and cycle safely. By joining Saddle Sisters
          of High Park ("SSHP") group rides, you acknowledge that you do so at
          your own risk. Neither SSHP nor its ride leaders/ride organizers
          assume responsibility to safeguard SSHP ride participants from the
          risks of cycling (including but not limited to personal injury, death
          and/or property damage) nor does SSHP nor its ride leaders/ride
          organizers assume any duty of care for ride participants.
        </motion.p>
        <motion.h3 className="text-xl font-bold">
          2022 weekly ride schedule
        </motion.h3>
        {rideList.map((dayInfo) => {
          const { day, rides } = dayInfo;
          const rideList = rides.map((ride) => {
            const { rideName, time, location, pace } = ride;
            return (
              <motion.div variants={animationVariants}>
                <h4 className="text-base font-semibold text-green">
                  {rideName}
                </h4>
                {console.log(day)}

                <div>
                  <p>
                    Meet at:{" "}
                    {day.toLocaleLowerCase() !== "saturday" &&
                    day.toLocaleLowerCase() !== "sunday" ? (
                      <span>
                        {time} at {location}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p>Pace: {pace}</p>
                </div>
              </motion.div>
            );
          });
          return (
            <motion.div
              className="flex flex-col gap-1"
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold">{day} Rides</h3>
              {rideList}
            </motion.div>
          );
        })}
      </motion.div>
    </SectionDiv>
  );
};

export default Rides;
