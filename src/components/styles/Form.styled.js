import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  textarea {
    resize: none;
    border: 1px solid #1b1b1b;
    margin: 0 3rem;
    background-color: #f4f4f4;
  }
  input {
    border: 1px solid #1b1b1b;
    width: 250px;
    margin: 0 3rem;
    background-color: #f4f4f4;
  }
  label {
    margin: 0 3rem;
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
  .ord-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .ord-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .ord-type {
    display: flex;
    flex-direction: column;
  }
  .ord-type-row {
    display: flex;
    flex-direction: row;
  }
  #type-light,
  #type-dark {
    width: 1rem;
  }
  .alertOk {
  }
`;
