import { ReactComponent as StravaIcon } from "../../assets/strava.svg";
import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram.svg";

import Banner from "../../components/banner/banner";

import { SectionDiv } from "../section.styles";
import { ContentDiv } from "../content.styles";
import './contact.scss';

const iconSize = 35;
const Contact = () => {
  return (
    <SectionDiv>
      <Banner
        text={"Get in touch!"}
        section="contact"
        sectionLength={2}
      ></Banner>
      <ContentDiv>
        <h2>Where to find us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          praesentium a ipsam delectus sint nobis ut perspiciatis, labore vitae
          libero dolor illo voluptatibus et eligendi, suscipit corrupti unde
          minima nostrum! Ipsum asperiores accusamus optio adipisci odit vero
          architecto neque sequi. Sunt rerum at iste ullam delectus sit laborum
          incidunt quis? Harum officiis fuga laudantium voluptatem ipsum
          necessitatibus deserunt delectus ex?
        </p>

        <h3>Our social links</h3>
        <div className="social-links">
          <a href="https://www.strava.com/clubs/738936">
            <StravaIcon width={iconSize} height={iconSize} />
          </a>
          <a href="">
            <DiscordIcon width={iconSize} height={iconSize} />
          </a>
          <a href="https://www.instagram.com/saddlesisterscycling/?hl=en">
            <InstaIcon width={iconSize} height={iconSize} />
          </a>
        </div>
      </ContentDiv>
    </SectionDiv>
  );
};

export default Contact;
