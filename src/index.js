import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//REACT 17
// ReactDOM.render(
//   <AppProvider>
//     <App />
//   </AppProvider>,
//   document.getElementById("root")
// );

//REACT 18
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
