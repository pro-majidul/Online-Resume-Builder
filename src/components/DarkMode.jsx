import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    
    document.documentElement.style.setProperty("--primary-color", theme === "light" ? "#F9F51A" : "#F9F51A");
    document.documentElement.style.setProperty("--secondary-color", theme === "light" ? "#FEDBFF" : "#230024");
    document.documentElement.style.setProperty("--accent-color", theme === "light" ? "#20252D" : "#D2D7DF");
    document.documentElement.style.setProperty("--background-color", theme === "light" ? "#FFFFFF" : "#000000");
    document.documentElement.style.setProperty("--text-color", theme === "light" ? "#181A1B" : "#E4E6E7");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px",
        borderRadius: "50%",
        backgroundColor: "var(--primary-color)",
        color: "var(--accent-color)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "light" ? (
        <MdDarkMode style={{ fontSize: "24px", color: "var(--accent-color)" }} />
      ) : (
        <MdLightMode style={{ fontSize: "24px", color: "var(--accent-color)" }} />
      )}
    </button>
  );
};

export default DarkMode;