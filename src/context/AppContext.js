import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const [order,setOrder] = useState([]);
   
   function addNewOrder = ()=>{

   }

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppContext;
