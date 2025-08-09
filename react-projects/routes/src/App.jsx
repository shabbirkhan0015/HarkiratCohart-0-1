import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/colorContext";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import React from "react";
import { RecoilRoot } from "recoil";
import CountRender from "./components/CountRender";
function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <CountRender />
        <Button />
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
