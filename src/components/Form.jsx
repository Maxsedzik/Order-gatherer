import React from "react";
import { StyledForm } from "./styles/Form.styled";
import Box from "./Box";

const Form = () => {
  return (
    <Box>
      <StyledForm>
        <h2 style={{ textAlign: "center" }}>Add your order sir!</h2>
        <div className="ord-name">
          <input
            type="text"
            name="ord-name"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="ord-text">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            placeholder="Your Order"
          ></textarea>
        </div>
        <div className="ord-type">
          <div className="ord-type-row">
            <label htmlFor="type-dark">Day Order</label>
            <input type="checkbox" name="type-dark" id="type-dark" />
          </div>
          <div className="ord-type-row">
            <label htmlFor="type-light">Night Order</label>
            <input type="checkbox" name="type-light" id="type-light" />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <input type="submit" className="btn" value="Add" />
        </div>
      </StyledForm>
    </Box>
  );
};

export default Form;
