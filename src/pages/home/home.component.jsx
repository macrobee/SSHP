import { SectionDiv } from "../section.styles";
import Banner from "../../components/banner/banner";

const bannerText = "Saddle Sisters of High Park";

const Home = () => {
  return <SectionDiv>
    <Banner text={bannerText} section={`home`} sectionLength={5}/>
  </SectionDiv>;
};

export default Home;
