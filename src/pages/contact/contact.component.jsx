import { motion, AnimatePresence } from "framer-motion";

import { ReactComponent as StravaIcon } from "../../assets/strava.svg";
// import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram.svg";
import { ReactComponent as MailIcon } from "../../assets/email.svg";
import { ReactComponent as LinktreeIcon } from "../../assets/linktree.svg";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";
import "./contact.scss";

const animationVariants = {
  initial: { y: "50px", x: 0, opacity: 0 },
  animate: {
    opacity: 1,
    y: "0px",
    x: 0,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};
const iconSize = 50;

const Contact = () => {
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
          text={"Get in touch!"}
          section="contact"
          sectionLength={4}
        ></Banner>

        <motion.div
          className="flex flex-col gap-2 w-80 md:w-60 pt-3 pb-3"
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3
            className="text-lg font-bold text-green"
            variants={animationVariants}
          >
            Where to find us
          </motion.h3>
          <motion.p className="text-justify" variants={animationVariants}>
            Check out our Instagram page to see what we've been up to! If you're
            looking to join a ride, join our Strava group to see our upcoming
            events. We also have an active Discord community where you can ask
            questions, share ideas, and find riding partners! For general
            inquiries, send us an email at{" "}
            <span className="text-green">info@saddlesisters.ca</span>.
          </motion.p>
          <motion.h3
            className="text-lg font-bold text-green"
            variants={animationVariants}
          >
            Our social links
          </motion.h3>
          <motion.div className="social-links" variants={animationVariants}>
            <a
              href="https://www.strava.com/clubs/738936"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-200 shadow-md rounded-md"
            >
              <StravaIcon width={iconSize} height={iconSize} />
            </a>
            {/* <a href="">
              <DiscordIcon width={iconSize} height={iconSize} />
            </a> */}
            <a
              href="mailto:info@saddlesisters.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-200 shadow-md rounded-md"
            >
              <MailIcon width={iconSize} height={iconSize} />
            </a>
            <a
              href="https://www.instagram.com/saddlesisterscycling/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-200 shadow-md rounded-md"
            >
              <InstaIcon width={iconSize} height={iconSize} />
            </a>
            <a
              href="https://linktr.ee/saddlesisters"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-200 shadow-md rounded-md"
            >
              <LinktreeIcon width={iconSize} height={iconSize} />
            </a>
          </motion.div>
        </motion.div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Contact;
