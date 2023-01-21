import { SectionDiv } from "../section.styles";
import { ContentDiv } from "../content.styles";

import Banner from "../../components/banner/banner";

const About = () => {
  return (
    <div className="w-1/5 h-1/5 bg-black">
      <Banner text={"Who we are"} section="about" sectionLength={1}/>
      <ContentDiv>We host rides between 20-30kph.</ContentDiv>
    </div>
  );
};

export default About;
