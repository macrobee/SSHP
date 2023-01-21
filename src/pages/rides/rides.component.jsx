import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";

const Rides = () => {

    return <SectionDiv>
      <Banner text={"Group rides"} section="grouprides" sectionLength={4}></Banner>
      <div>Weekly group rides</div>
    </SectionDiv>
}

export default Rides;