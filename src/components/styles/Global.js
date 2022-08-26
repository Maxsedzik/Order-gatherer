import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 *{
        background-color: #1e002a;
        color: #f4f4f4;
        font-family: 'Overpass', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        line-height: 1.6
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    h1{
        text-align:center;
        padding: 1rem;
        font-size: 55px;
    }
    .content{
        max-width: 768px;
  margin: auto;
  padding: 0 20px;
    }
    .btn-order-row{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
     .btn {
    background-color: #1b1b1b;
    color: #f4f4f4;
    margin-top: 0rem;
    &:hover {
      cursor: pointer;
      background-color: #000;
    }
}
    .btn-order{
    background-color: #1b1b1b;
    color: #f4f4f4;
    font-size: 12px;
    padding: 0 1rem;
    margin: 0 1rem;
     &:hover {
      cursor: pointer;
      background-color: #000;
      color: #fff;
    }
}
  
`;

export default GlobalStyles;
