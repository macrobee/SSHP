import { motion, AnimatePresence } from "framer-motion";

import Banner from "../../components/banner/banner";
import SponsorBox from "./sponsorbox.component";

import { SectionDiv } from "../section.styles";

const sponsorList = [
  {
    name: "The Biking Lawyer",
    image:
      "/sponsors/bikinglawyer.png",
    description:
      "The Biking Lawyer LLP specializes in helping injured cyclists and other vulnerable people. From bike accidents to police violence we provide compassionate and first rate personal injury law services.",
    siteUrl: "https://www.thebikinglawyer.ca/",
  },{
    name: "Stage 21 Inc.",
    image:
      "/sponsors/stage21.jpg",
    description:
      "Stage 21 Inc. is a cycling lifestyle brand that amplifies the social aspects of cycling through a classic European van. The van encompasses a mobile coffee shop, bike repair shop and event space that will advance Toronto cycling culture and enhance the active outdoors experience of all Torontonians. The van will serve to expand and develop the growing Toronto cycling culture.",
    siteUrl: "https://stage-21-inc.myshopify.com/",
  },{
    name: "The Smoke Bloke",
    image:
      "/sponsors/smokebloke.jpg",
    description:
      "We are a high quality smoked seafood supplier focusing on producing Toronto’s best smoked salmon. Our products are made without artificial preservatives, flavours, additives or colours. You will find our products in Toronto’s best restaurants and retailers since 2014.",
    siteUrl: "https://www.thesmokebloke.ca/",
  },
  {
    name: "Bikes on Wheels",
    image:
      "/sponsors/bow.png",
    description:
      "Bikes on Wheels is your neighbourhood bike shop located in Kensington Market, supporting Toronto cyclists and cross-town commuters since 1993. Whether your bike gets you around on the city streets, a track, or out on the open road, Bikes on Wheel has your back.",
    siteUrl: "https://bikesonwheels.com/",
  },{
    name: "Dismount Bike Shop",
    image:
      "/sponsors/dismount.png",
    description:
      "Dismount is a full service family bike shop that specializes in City, Adventure, Mountain, and Kids bikes. We operate a coffee bar inside our walls that provides a social hub for the community, and offers you a unique bike buying experience",
    siteUrl: "https://dismountbikeshop.com/",
  },
  {
    name: "ROADKIT",
    image:
      "/sponsors/roadkit.jpg",
    description:
      "Based in Toronto, ROADKIT is a locally owned business with a commitment to high-quality international cycling gear for riders at all levels. We scoured the globe to find great brands to help you stand out in the peloton. Whether you’re a seasoned cyclist or just starting out on group rides we’ve got you covered. We’ll help you look race ready with high-quality, innovative, and stylish apparel.",
    siteUrl: "https://www.roadkit.com/",
  },
  {
    name: "D'Ornellas Bike Shop",
    image:
      "/sponsors/dornellas.png",
    description:
      "D'Ornellas is a high-end shop offering mountain, road & hybrid bikes for all ages, plus apparel, gear & repairs.",
    siteUrl: "https://dornellas-bike-shop.shoplightspeed.com/",
  },
  {
    name: "Blacksmith Cycle",
    image:
      "/sponsors/blacksmith.png",
    description:
      "What makes Blacksmith different is what we are not. We are not a normal bike shop. Sorry. Yes, while we do technically sell bikes what we really do is design and execute to a customer's exacting needs. Whether you know what you’re after down to the finest detail or have no clue other than it’ll probably have two wheels, we are here to work with you. Be it a fit consult on an existing bike, mechanical service, complete bike design, or upgrades, if you are a serious cyclist in Toronto or anywhere around the world, we are more than your local shop.",
    siteUrl: "https://blacksmithcycle.com/",
  },
  
];

const Sponsors = () => {
  return (
    <AnimatePresence>
      <SectionDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.5}}
      >
        <Banner
          text={"Our generous sponsors"}
          section="sponsors"
          sectionLength={1}
        />
        <div className="flex flex-col gap-3 md:gap-2 w-80 md:w-60 pt-3 pb-3">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Many of our events are made possible thanks to our sponsors. These
            events include informational workshops, tours, discounts on
            equipment, and/or sponsorship for our race team. Check out their sites below!
          </motion.p>
          {sponsorList.map((sponsor) => {
            const { name, image, description, siteUrl } = sponsor;
            return (
              <SponsorBox
                reverse={
                  sponsorList.indexOf(sponsor) % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }
                name={name}
                image={image}
                description={description}
                siteUrl={siteUrl}
                key={name}
              />
            );
          })}
        </div>
      </SectionDiv>
    </AnimatePresence>
  );
};

export default Sponsors;
