import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
