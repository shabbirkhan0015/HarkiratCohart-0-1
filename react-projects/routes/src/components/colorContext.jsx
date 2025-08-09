import { createContext, useContext, useState } from "react";

// 1. Create context
const ThemeContext = createContext();

// 2. Export hook to consume context
export const useTheme = () => useContext(ThemeContext);

// 3. Export Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
