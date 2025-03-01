import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/default.scss";
import "./components/DataHandlers/TableDescr/tableDescr.scss";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
