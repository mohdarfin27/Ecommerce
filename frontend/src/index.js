import React from "react";
import ReactDOM from "react-dom/client";
import  Login from "./login";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import Loginpro from "./logindesign"; 
// import Pic from "./picstore.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    {/* <Login/> */}
    <App />
    {/* < Loginpro/> */}
    {/* < Pic /> */}
  </ShopContextProvider>
);
