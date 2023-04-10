import { createContext, useState } from "react";
import "./App.css";
import Layout from "./Pages/Layout/Layout";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
      <div className={theme} id="App">
        <Layout toggleTheme={toggleTheme} />
      </div>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
