import styled from "styled-components";

export const StyledBox = styled.div`
  * {
    background-color: ${({ type }) => type};
    color: ${({ cl }) => cl};
    margin: 1rem 3rem;
    padding: 1px;
    border-radius: 5px;
  }
  p {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`;
