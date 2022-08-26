import React, { useContext } from "react";
import Box from "./Box";
import AppContext from "../context/AppContext";

const SingleOrder = ({ name, text, type, id }) => {
  const { deleteOrder, changeType } = useContext(AppContext);
  return (
    <Box>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-order-row">
          <button className="btn-order" onClick={() => changeType(id, type)}>
            CHANGE TYPE
          </button>
          <button className="btn-order" onClick={() => deleteOrder(id)}>
            DELETE
          </button>
        </div>
      </div>
    </Box>
  );
};

export default SingleOrder;
