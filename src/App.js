import "./App.css";
import Form from "./components/Form";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme);
  useEffect(() => {
    setTheme(localTheme);
  }, []);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label> 1{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;



 