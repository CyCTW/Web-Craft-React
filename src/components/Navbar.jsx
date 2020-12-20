import React from "react";
import Navitem from "./common/Navitem";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: blue;
`;

const Navbar = (props) => {
  const navitemAttrs = [
    { description: "Product", id: "001" },
    { description: "Services", id: "002" },
    { description: "Resources", id: "003" },
    { description: "About", id: "004" }
  ];

  return (
    <StyledNavbar className="d-md-flex container-fluid pt-2 justify-content-between fixed-top">
      <a href="/#" className="Logo font-weight-bold pl-2" href="#">
        OURSKY
      </a>

      <ul className="nav">
        {navitemAttrs.map((navitem) => {
          return <Navitem key={navitem.id}>{navitem.description}</Navitem>;
        })}
        <li className="nav-item">
          <a href="/#" className="text-white bg-warning rounded-lg p-2">
            Start your project
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
