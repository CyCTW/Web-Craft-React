import React from "react";

import IGImg from "../../img/IG.png";
import styled from "styled-components";

const StyledIntro = styled.div`
  background-color: lightgray;
`;

const StyledIntrobox = styled.div`
  margin: auto;
  position: relative;
  top: -40px;
  background-color: white;
  max-width: 400px;
  padding: 15px;
`;

const StyledIntroImg = styled.img`
  max-width: 300px;
  max-height: 500px;
`;

const Introduction = () => {
  return (
    <StyledIntro>
      <StyledIntrobox className="container border rounded-lg">
        Learned more about how we digitally transform businesses by creating
        amazing digital products
      </StyledIntrobox>
      <div className="d-lg-flex">
        <div className="aboutus">
          <h2>About us</h2>
          <b>
            Oursky is a team of talented developers, designers, data scientists,
            product and project managers and QA engineers working from Hong
            Kong, London, and Taipei. Using cutting-edge technologies, we are an
            end-to-end digital product, web, and mobile app development
            consultancy whose creations have garnered millions of downloads and
            awards from the Apple App Store and Asia Smart Apps Awards.
          </b>
        </div>
        <div>
          <StyledIntroImg alt="#" src={IGImg} className="introimg img-fluid" />
        </div>
      </div>
    </StyledIntro>
  );
};
export default Introduction;
