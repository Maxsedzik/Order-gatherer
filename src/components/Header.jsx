import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h1>Order Gatherer</h1>
        </Link>
        <ul>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
