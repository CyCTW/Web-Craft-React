import React from "react";
import styled from "styled-components";
import OurskyHeroImg from "../../img/oursky-hero.png";

const StyledSlogan = styled.div`
  margin: auto;
  font-size: 30px;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
`;

const StyledBlock = styled.div`
  background-color: blue;
  padding: 100px;
  display: inline-block;
`;
const Banner = () => {
  return (
    <StyledBlock className="d-sm-flex justify-content-center">
      <StyledSlogan>
        We design and develop award-winning appllications
      </StyledSlogan>
      <div className="main_image">
        <img alt="#" src={OurskyHeroImg} class="img-fluid" />
      </div>
    </StyledBlock>
  );
};
export default Banner;
