import React, { useContext } from "react";
import SingleOrder from "../components/SingleOrder";
import AppContext from "../context/AppContext";
const OrdersPage = () => {
  const { orders } = useContext(AppContext);

  return (
    <div>
      {orders.map((order) => (
        <SingleOrder
          key={order.id}
          id={order.id}
          name={order.name}
          text={order.text}
          type={order.night}
        />
      ))}
    </div>
  );
};

export default OrdersPage;
