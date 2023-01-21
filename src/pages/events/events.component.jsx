import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";



const Events = () => {

    return <SectionDiv>
      <Banner text={"Past events"} section="events" sectionLength={5}></Banner>
      <div>Here are some of our past events</div>
    </SectionDiv>
}

export default Events;