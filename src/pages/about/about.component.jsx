import { motion, AnimatePresence } from "framer-motion";

import { SectionDiv } from "../section.styles";

import Banner from "../../components/banner/banner";
import PolicyBox from "../../components/policybox/policybox.component";

const policies = [
  {
    title: "Waiver",
    link: "./files/SSHPWaiver.pdf",
  },
  {
    title: "Code of Conduct",
    link: "./files/SSHPCodeOfConduct.pdf",
  },
  {
    title: "Privacy Policy",
    link: "./files/SSHPPrivacyPolicy.pdf",
  },
  {
    title: "Discipline and Complaints Policy",
    link: "./files/SSHPDisciplineAndComplaintsPolicy.pdf",
  },
  {
    title: "Concussion Policy",
    link: "./files/SSHPConcussionPolicy.pdf",
  },
];
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
        transition={{ duration: 0.5 }}
      >
        <Banner text={"Who we are"} section="about" sectionLength={4} />
        <motion.div
          className="flex flex-col justify-center items-start gap-1/2 w-80 md:w-60 pt-3 pb-3"
          as={motion.div}
          variants={pVariants}
          initial="initial"
          animate="animate"
        >
          <section className="flex flex-col justify-center items-start mb-2 gap-1/2">
            <motion.p
              className="font-xl font-bold text-green"
              variants={pVariants}
            >
              We are a network of women who plan organized rides in the
              mornings.
            </motion.p>
            <motion.p variants={pVariants}>
              We aim to be an inclusive space for Women, Trans, Femme, and
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
          </section>
          <section className="flex flex-col justify-center items-start gap-1/2">
            <motion.p
              className="font-xl font-bold text-green"
              variants={pVariants}
            >
              Interested in joining us?
            </motion.p>
            <motion.p variants={pVariants}>
              Send us a DM on our Instagram{" "}
              <a
                href={"https://www.instagram.com/saddlesisterscycling/?hl=en"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green"
              >
                (@saddlesisterscycling)
              </a>{" "}
              or email{" "}
              <a href="mailto:info@saddlesisters.ca" className="text-green">
                info@saddlesisters.ca
              </a>
              
            </motion.p>
            <motion.p variants={pVariants}>
              If you are interested in joining our race team, please email
              <a
                href="mailto:info@saddlesisters.ca"
                className="text-green font-bold"
              >
                {" "}
                info@saddlesisters.ca
              </a>
              .
            </motion.p>
            <motion.p variants={pVariants}>
              Our rides are not OCA sanctioned. If you're interested in
              purchasing insurance coverage for cycling activities please visit{" "}
              <a
                href="https://ontariocycling.org/membership/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green font-bold"
              >
                https://ontariocycling.org/membership/
              </a>
            </motion.p>

            <motion.p variants={pVariants} className="mt-1 italic">
              <span className="font-bold text-green">Note: </span>Effective May
              1st, 2023, all cyclists who join SSHP official rides are expected
              to sign our Waiver and Code of Conduct.
            </motion.p>
          </section>

          <motion.h2
            variants={pVariants}
            className="text-xl font-semibold text-green pt-2"
          >
            Saddle Sisters Policies
          </motion.h2>
          <motion.div
            variants={pVariants}
            className="w-full flex flex-col gap-1"
          >
            {policies.map((policy) => (
              <PolicyBox policy={policy} />
            ))}
          </motion.div>
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default About;
