import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: auto;
  border: none;
`;

const Card = (props) => {
  const { imgurl, title, children } = props;
  return (
    <StyledCard className="card col-sm-6 col-md-4 p-3">
      {/* TO FIGURE OUT: img url????!! */}
      <img src={imgurl.url} className="card-img-top" alt={imgurl} />
      <div className="card-img-overlay" style={{ color: "white" }}>
        <h4 className="card-title">Case Study</h4>
        <h2 className="card-title">{title}</h2>

        <p className="card-text">{children}</p>
      </div>
    </StyledCard>
  );
};
export default Card;
