import React from "react";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
// import Box from "./components/Box";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddOrderPage from "./pages/AddOrderPage";
import OldOrdersPage from "./pages/OldOrdersPage";
import OrdersPage from "./pages/OrdersPage";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Welcome />
                  </>
                }
              ></Route>
              <Route path="/add" element={<AddOrderPage />}></Route>
              <Route path="/old" element={<OldOrdersPage />}></Route>
              <Route path="/orders" element={<OrdersPage />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
