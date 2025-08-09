import React from "react";
import { useTheme } from "./colorContext";

export const Header = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h1 style={{ color: theme === "light" ? "#000" : "#f26" }}>
        Current Theme: {theme}
      </h1>
    </div>
  );
};
