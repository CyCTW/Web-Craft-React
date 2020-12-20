import React from "react";
import Listiem from "../../components/common/Listitem";

import CoreServiceIcon1 from "../../img/CoreServices/asset 0.svg";
import CoreServiceIcon2 from "../../img/CoreServices/asset 1.svg";
import CoreServiceIcon3 from "../../img/CoreServices/asset 2.svg";
import CoreServiceIcon4 from "../../img/CoreServices/asset 4.png";
import styled from "styled-components";
const StyledParaghOne = styled.div`
  background-color: lightgray;
  padding: 30px;
`;
const ParagraphOne = () => {
  const listitemAttrs = [
    {
      id: "001",
      title: "Digital Product Development",
      imgurl: { url: CoreServiceIcon1 },
      text: "Accuracy and creativity for mobile"
    },
    {
      id: "002",
      title: "Skylab.AI",
      imgurl: { url: CoreServiceIcon2 },
      text: "Accuracy and creativity for mobile"
    },
    {
      id: "003",
      title: "UI/UX and Digital Product Design",
      imgurl: { url: CoreServiceIcon3 },
      text: "Accuracy and creativity for mobile"
    },
    {
      id: "004",
      title: "Microservices and Containerization",
      imgurl: { url: CoreServiceIcon4 },
      text: "Accuracy and creativity for mobile"
    }
  ];
  return (
    <>
      <div className="container p-5">
        <p>Explore more of our work ...</p>
      </div>

      <StyledParaghOne className=" d-md-flex justify-content-between">
        <div className="container">
          <h3>
            <b>Digital transformation powered by ingenuity</b>
          </h3>
          <p>
            We don’t just build apps. Oursky creates digital experiences that
            help our partners succeed in today’s fast-paced business landscape.
          </p>
          <p>
            We work with founders in creating their blueprints for success —
            from minimum viable products (MVPs) to interactive prototypes.
            Oursky uses an iterative approach to help startups launch faster,
            scale quickly, and deliver great user experience.
          </p>
          <p>
            Oursky partners with enterprises to fast-track their digital
            transformation, helping them adopt and transition to cloud-native
            technologies and microservices.
          </p>
        </div>

        {/* Listitem */}
        <div className="container">
          <h4>Core Services</h4>
          <div className="list-group">
            {listitemAttrs.map((listitem) => {
              return (
                <Listiem
                  key={listitem.id}
                  imgurl={listitem.imgurl}
                  title={listitem.title}
                >
                  {listitem.text}
                </Listiem>
              );
            })}
          </div>
        </div>
      </StyledParaghOne>
    </>
  );
};

export default ParagraphOne;
