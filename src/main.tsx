import "./index.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { App as AntdApp } from "antd";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <AntdApp>
          <App />
        </AntdApp>
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
