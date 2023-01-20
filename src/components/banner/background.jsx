import { useState, useEffect } from "react";

import { Background } from "./banner.styles";
import { SectionDiv } from "../../pages/section.styles";


const Banner = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const increaseIndex = () => {
      setCurrentIndex((currentIndex + 1) % 5);
    };

    const timer = setTimeout(increaseIndex, 5000);

    return function cancelTimeout() {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <SectionDiv>
        <Background>
          <h1>{text}</h1>
          <img src={`/sshp/fall${currentIndex}.jpg`} alt="sisters together" />
        </Background>
    </SectionDiv>
  );
};

export default Banner;
