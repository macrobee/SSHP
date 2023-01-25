import { motion } from "framer-motion";

import { ReactComponent as StravaIcon } from "../../assets/strava.svg";
// import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram.svg";
import { ReactComponent as MailIcon } from "../../assets/email.svg";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";
import { ContentDiv } from "../content.styles";
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
const iconSize = 35;

const Contact = () => {
  return (
    <SectionDiv>
      <Banner
        text={"Get in touch!"}
        section="contact"
        sectionLength={2}
      ></Banner>
      <motion.div
        className="flex flex-col gap-2 w-80 md:w-60 pt-3 pb-3"
        variants={animationVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="text-lg font-bold text-green" variants={animationVariants}>
          Where to find us
        </motion.h3>
        <motion.p className="text-justify" variants={animationVariants}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          praesentium a ipsam delectus sint nobis ut perspiciatis, labore vitae
          libero dolor illo voluptatibus et eligendi, suscipit corrupti unde
          minima nostrum! Ipsum asperiores accusamus optio adipisci odit vero
          architecto neque sequi. Sunt rerum at iste ullam delectus sit laborum
          incidunt quis? Harum officiis fuga laudantium voluptatem ipsum
          necessitatibus deserunt delectus ex?
        </motion.p>

        <motion.h3 className="text-lg font-bold text-green" variants={animationVariants}>
          Our social links
        </motion.h3>
        <motion.div className="social-links" variants={animationVariants}>
          <a href="https://www.strava.com/clubs/738936" className="hover:scale-110 duration-200">
            <StravaIcon width={iconSize} height={iconSize} />
          </a>
          {/* <a href="">
            <DiscordIcon width={iconSize} height={iconSize} />
          </a> */}
          <a href="mailto:info@saddlesisters.ca" className="hover:scale-110 duration-200">
            <MailIcon width={iconSize} height={iconSize} />
          </a>
          <a href="https://www.instagram.com/saddlesisterscycling/?hl=en" className="hover:scale-110 duration-200">
            <InstaIcon width={iconSize} height={iconSize} />
          </a>
        </motion.div>
      </motion.div>
    </SectionDiv>
  );
};

export default Contact;
