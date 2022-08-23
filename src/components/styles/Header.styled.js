import styled from "styled-components";

export const StyledHeader = styled.header`
  * {
    background-color: #000020;
    color: #f4f4f4;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    text-align: center;
  }
  a {
    font-size: 1.6rem;
    &:hover {
      border-bottom: 2px solid #f4f4f4;
    }
  }
`;
