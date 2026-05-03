import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "heading",
//   },
//   "Welcome to mobile dev!",
// );

let name = "App";

createRoot(document.getElementById("root")).render(
  <>
   
    <App />
  </>
);
