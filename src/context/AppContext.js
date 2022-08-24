import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ordName, setOrdName] = useState("");
  const [ordText, setOrdText] = useState("");
  const [ordTypeDark, setOrdTypeDark] = useState(false);
  const [newOrder, setNewOrder] = useState(false);

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
    e.preventDeafault();
    setNewOrder(true);
    console.log(newOrder);
  };

  return (
    <AppContext.Provider
      value={{ changeName, changeText, setDark, submitOrder }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
