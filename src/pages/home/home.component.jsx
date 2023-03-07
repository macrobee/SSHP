import { AnimatePresence, motion } from "framer-motion";
import FullBackground from "../../components/fullbg/fullbg.component";
import { SectionDiv } from "../section.styles";

const bannerText = "Saddle Sisters";
const bannerText2 = "of High Park";
const homeImageUrl = "sshp/homepage.jpg";

const links = [
  { text: "About us", link: "/about" },
  { text: "Community", link: "/community" },
  { text: "Group rides", link: "/rides" },
  { text: "Sponsors", link: "/sponsors" },
  { text: "Contact", link: "/contact" },
];

const Home = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FullBackground
          headerText1={bannerText}
          headerText2={bannerText2}
          links={links}
          backgroundLink={homeImageUrl}
        />
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Home;
