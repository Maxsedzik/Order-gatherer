import React from "react";
import { StyledBox } from "./styles/Box.styled";

const Box = ({ children }) => {
  return (
    <StyledBox type="#f4f4f4" cl="#1b1b1b">
      {children}
    </StyledBox>
  );
};

export default Box;
