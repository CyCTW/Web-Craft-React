import React from "react";

const Navitem = (props) => {
  const { children } = props;

  return (
    <li className="nav-item dropdown">
      <a href="/#" className="text-white p-2">
        {children}
      </a>

      {/* TODO: dropdown-items */}
      {/* <ul className="dropdown-content"> */}
      {/* <li className="dropdown-item"></li> */}
    </li>
  );
};

export default Navitem;
