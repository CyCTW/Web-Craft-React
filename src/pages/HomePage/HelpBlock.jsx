import React from "react";

import styled from "styled-components";

const StyledHelpBlock = styled.div`
  background-color: #1c274a;
  text-align: center;
  padding: 5%;
`;
const HelpBlock = () => {
  return (
    <StyledHelpBlock>
      <h3 style={{ color: "white" }}>
        We build award-winning digital products.
      </h3>
      <h4 style={{ color: "white" }}>Oursky can help you create one.</h4>
      <button
        type="button"
        className="btn btn-warning"
        style={{ margin: "20px" }}
      >
        Let's talk
      </button>
    </StyledHelpBlock>
  );
};

export default HelpBlock;
