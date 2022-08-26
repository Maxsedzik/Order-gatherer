import React, { useContext } from "react";
import { StyledBox } from "../components/styles/Box.styled";
import Form from "../components/Form";
import AppContext from "../context/AppContext";

const AddOrderPage = () => {
  const { alertOrder } = useContext(AppContext);
  if (!alertOrder) {
    return (
      <>
        <Form />
      </>
    );
  } else {
    return (
      <StyledBox type="red" cl="#f4f4f4">
        <h2>Order added successfully!</h2>
      </StyledBox>
    );
  }
};

export default AddOrderPage;
