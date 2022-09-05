import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* STEP 2 - Wrap your app in a Provider and pass in your store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
