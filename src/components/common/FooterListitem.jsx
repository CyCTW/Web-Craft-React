import React from "react";
import styled from "styled-components";
const StyledFooterCol = styled.div`
  padding-top: 30px;
`;
const FooterListitem = (props) => {
  const { title, names } = props;

  return (
    <StyledFooterCol className=" col">
      <h5>{title}</h5>

      <ul className="list-unstyled">
        {names.map((name) => {
          return <li>{name}</li>;
        })}
        {/* <li>{name}</li> */}
        {/* <li>{name}</li> */}
        {/* <li>{name}</li> */}
        {/* <li>{name}</li> */}
      </ul>
    </StyledFooterCol>
  );
};

export default FooterListitem;
