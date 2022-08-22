import styled from "styled-components";

export const StyledBox = styled.div`
  * {
    background-color: ${({ type }) => type};
    color: #1b1b1b;
    margin: 1rem 3rem;
    padding: 1px;
    border-radius: 5px;
  }
`;
