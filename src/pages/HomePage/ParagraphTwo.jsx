import React from "react";
import Listiem from "../../components/common/Listitem";

import ProductIcon1 from "../../img/Products/asset 5.png";
import ProductIcon2 from "../../img/Products/asset 6.png";
import ProductIcon3 from "../../img/Products/asset 7.png";

const ParagraphTwo = () => {
  const listitemAttrs = [
    {
      id: "002",
      title: "Skylab.AI",
      imgurl: { url: ProductIcon1 },

      text: "Accuracy and creativity for mobile"
    },
    {
      id: "003",
      title: "UI/UX and Digital Product Design",
      imgurl: { url: ProductIcon2 },

      text: "Accuracy and creativity for mobile"
    },
    {
      id: "004",
      title: "Microservices and Containerization",
      imgurl: { url: ProductIcon3 },
      text: "Accuracy and creativity for mobile"
    }
  ];

  return (
    <div style={{ padding: "30px" }} class=" d-md-flex justify-content-between">
      {/* Listitem */}
      <div className="container">
        <h4>Products</h4>
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
      {/* Paragraph */}
      <div className="container">
        <h3>
          <strong>
            We’re your low-code solution for your next IT project.
          </strong>
        </h3>
        <p>
          We don’t just build apps. Oursky creates digital experiences that help
          our partners succeed in today’s fast-paced business landscape.
        </p>
        <p>
          We work with founders in creating their blueprints for success — from
          minimum viable products (MVPs) to interactive prototypes. Oursky uses
          an iterative approach to help startups launch faster, scale quickly,
          and deliver great user experience.
        </p>
        <p>
          Oursky partners with enterprises to fast-track their digital
          transformation, helping them adopt and transition to cloud-native
          technologies and microservices.
        </p>
      </div>
    </div>
  );
};

export default ParagraphTwo;
