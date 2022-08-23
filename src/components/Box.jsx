import React from "react";
import { StyledBox } from "./styles/Box.styled";

const Box = ({ children }) => {
  return <StyledBox type="#f4f4f4">{children}</StyledBox>;
};

export default Box;
