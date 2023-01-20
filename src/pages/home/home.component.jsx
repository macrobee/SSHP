import { SectionDiv } from "../section.styles";
import Banner from "../../components/banner/background";

const bannerText = "Saddle Sisters of High Park";

const Home = () => {
  return <SectionDiv>
    <Banner text={bannerText} />
  </SectionDiv>;
};

export default Home;
