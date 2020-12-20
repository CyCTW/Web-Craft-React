import React from "react";

import Asset8 from "../../img/companys/asset 8.svg";
import Asset9 from "../../img/companys/asset 9.svg";
import Asset10 from "../../img/companys/asset 10.svg";
import Asset11 from "../../img/companys/asset 11.svg";
import Asset12 from "../../img/companys/asset 12.svg";
import Asset13 from "../../img/companys/asset 13.svg";
import Asset14 from "../../img/companys/asset 14.svg";
import Asset15 from "../../img/companys/asset 15.svg";

import styled from "styled-components";
const StyledSentance = styled.div`
  max-width: 800px;
  padding: 50px;
`;

const StyledImgrow = styled.div`
  max-width: 60%;
  margin: auto;
  padding-bottom: 100px;
`;
// import { ReactComponent as Asset11 } from "../../img/asset 11.svg";

const Company = () => {
  return (
    <div className="Company container-fluid">
      <StyledSentance className="sentance_block container pt-5">
        <h4 style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
          We help companies around the world bring their ideas to life.
        </h4>
      </StyledSentance>

      <StyledImgrow className=" row">
        <img src={Asset8} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset9} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset10} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset11} className="col-md-3 col-sm-6" alt="#" />
      </StyledImgrow>

      <StyledImgrow className=" row">
        <img src={Asset12} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset13} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset14} className="col-md-3 col-sm-6" alt="#" />
        <img src={Asset15} className="col-md-3 col-sm-6" alt="#" />
      </StyledImgrow>
    </div>
  );
};

export default Company;
