import React from "react";

import styled from "styled-components";

const StyleListImg = styled.img`
  display: inline-block;
  width: 50px;
  height: 60px;
`;

const StyledListBlock = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Listitem = (props) => {
  const { imgurl, title, children } = props;
  return (
    <>
      <a href="/#" className="list-group-item list-group-item-action">
        <StyleListImg src={imgurl.url} alt={imgurl} />
        <StyledListBlock>
          <b>{title}</b>
          <p>{children}</p>
        </StyledListBlock>
      </a>
    </>
  );
};

export default Listitem;
