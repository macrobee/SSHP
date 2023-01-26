import { AnimatePresence, motion } from "framer-motion";
import { SectionDiv } from "../section.styles";
import Banner from "../../components/banner/banner";

const bannerText = "Saddle Sisters of High Park";

const Home = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity:0}}
        transition={{duration:0.5}}

      >
        <Banner text={bannerText} section={`home`} sectionLength={5} />
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Home;
