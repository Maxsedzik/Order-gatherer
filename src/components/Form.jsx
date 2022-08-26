import React, { useContext } from "react";
import { StyledForm } from "./styles/Form.styled";
import Box from "./Box";
import AppContext from "../context/AppContext";

const Form = () => {
  const { changeText, changeName, setDark, submitOrder } =
    useContext(AppContext);

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
            onChange={changeName}
          />
        </div>
        <div className="ord-text">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            placeholder="Your Order"
            onChange={changeText}
          ></textarea>
        </div>
        <div className="ord-type">
          <div className="ord-type-row">
            <label htmlFor="type-dark">Night Order</label>
            <input
              type="checkbox"
              name="type-dark"
              id="type-dark"
              onClick={setDark}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <input
            type="submit"
            className="btn"
            value="Add"
            onClick={submitOrder}
          />
        </div>
      </StyledForm>
    </Box>
  );
};
export default Form;
