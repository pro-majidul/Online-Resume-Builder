"use client"; // Required because we're using useState & useEffect

import { createContext, useContext, useState, useEffect } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage when the app starts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  // Apply the selected theme and store it in localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a Custom Hook to use the Theme Context
export const useTheme = () => {
  return useContext(ThemeContext);
};
