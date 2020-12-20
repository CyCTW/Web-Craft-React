import React from "react";
import Card from "./common/Card";
import Asset1 from "../img/cards/asset18.png";
import Asset2 from "../img/cards/asset 19.png";
import Asset3 from "../img/cards/asset 20.gif";

const CaseStudyCards = () => {
  const cardAttr = [
    {
      id: "001",
      img: { url: Asset1 },
      title: "ASOS",
      text: "We helped ASOS blabla to finish their text"
    },
    {
      id: "002",
      img: { url: Asset2 },
      title: "Jamn Player",
      text: "We want to finish our task and learn front end knowledge."
    },
    {
      id: "003",
      img: { url: Asset3 },
      title: "Wilson Party",
      text:
        "I am new to frontend, hence, I think my html structure is bad. Sorry for the bad structure.QQ"
    }
  ];

  return (
    <div className=" d-md-flex justify-content-center pt-5">
      {cardAttr.map((card) => {
        return (
          <Card key={card.id} imgurl={card.img} title={card.title}>
            {card.text}
          </Card>
        );
      })}
    </div>
  );
};

export default CaseStudyCards;
// key={card.id}, image={card.image} title={card.title}
