import React, { useContext } from "react";
import Box from "./Box";
import AppContext from "../context/AppContext";

const SingleOrder = ({ name, text, id }) => {
  const { deleteOrder } = useContext(AppContext);
  return (
    <Box>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{text}</p>
          <h2>{id}</h2>
        </div>
        <div className="btn-order-row">
          <button className="btn-order">DONE</button>
          <button className="btn-order">CHANGE TYPE</button>
          <button
            className="btn-order"
            onClick={({ id }) => deleteOrder({ id })}
          >
            DELETE
          </button>
        </div>
      </div>
    </Box>
  );
};

export default SingleOrder;
