import React from "react";
import styled from "styled-components";
import FooterListitem from "../../components/common/FooterListitem";

const StyledFooter = styled.div`
  background-color: black;
  color: white;
`;

const StyledFooterLogo = styled.h4`
  padding-top: 30px;
  font-weight: 900;
`;

const Footer = () => {
  const footeritems = [
    { title: "Products", names: ["Authgear", "FormX.ai", "Gespak"] },
    {
      title: "Service",
      names: [
        "Digital Product ",
        "Mobile App ",
        "Web App ",
        "UI/UX ",
        "Machine ",
        "Microservices "
      ]
    },
    {
      title: "Know more",
      names: ["Aboutus", "CaseStudy", "Tech Stack", "Ousrky Blog"]
    },
    { title: "Connect", names: ["Facebook", "Google"] }
  ];

  return (
    <StyledFooter className="container-fluid">
      <div className="row d-md-flex">
        <StyledFooterLogo className="col">ORUSKY</StyledFooterLogo>
        {footeritems.map((footeritem) => {
          return (
            <FooterListitem title={footeritem.title} names={footeritem.names} />
          );
        })}
      </div>
      <div class="d-flex justify-content-between text-muted">
        <p>hello@oursky.com</p>
        <p>Oursky Ltd</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
