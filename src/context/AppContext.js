import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [alertOrder, setAlertOrder] = useState(false);
  const [ordName, setOrdName] = useState("");
  const [ordText, setOrdText] = useState("");
  const [ordTypeDark, setOrdTypeDark] = useState(false);
  const [orders, setOrders] = useState([
    {
      name: "Zeus",
      text: "abc",
      night: true,
      id: uuidv4(),
    },
    { name: "Hades", text: "xyz", night: false, id: uuidv4() },
    { name: "Hera", text: "qwe", night: true, id: uuidv4() },
  ]);

  const changeName = (e) => {
    setOrdName(e.target.value);
  };

  const changeText = (e) => {
    setOrdText(e.target.value);
  };

  const setDark = () => {
    setOrdTypeDark(!ordTypeDark);
  };

  const submitOrder = (e) => {
    e.preventDefault();
    if (ordName.trim().length >= 5 && ordText.trim().length >= 5) {
      let order = {
        name: ordName,
        text: ordText,
        night: ordTypeDark,
        id: uuidv4(),
      };

      setOrders([order, ...orders]);
      setAlertOrder(true);
      setTimeout(() => {
        setAlertOrder(false);
      }, 2000);
    }
  };
  const deleteOrder = (id) => {
    console.log(id);
    setOrders(orders.filter((order) => order.id !== id));
  };

  const changeType = () => {};
  return (
    <AppContext.Provider
      value={{
        changeName,
        changeText,
        setDark,
        submitOrder,
        orders,
        alertOrder,
        deleteOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
