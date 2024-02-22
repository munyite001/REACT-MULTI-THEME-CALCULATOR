import { useState } from "react";
import "./App.css"
import "./components/Display"
import Display from "./components/Display";
import Numpad from "./components/Numpad";

export default function App() {
  const [theme, setTheme] = useState(0);
  const [equation, setEquation] = useState("0");
  const handleThemeSwitch = (e) => {
    setTheme(e.target.value);
  }

  const handleEquation = (val) => {
    if (val == "DEL") {
      setEquation((prevEquation) => {
        if (prevEquation.length == 1) {
          return "0";
        }
        else {
          return prevEquation.slice(0, -1);
        }
      });
      return;
    }
    else if (val == "Reset") {
      setEquation("0");
      return;
    }
    else if (val == "=") {
      try {
        setEquation((prevEquation) => {
          return eval(prevEquation).toString();
        });
      }
      catch (e) {
        setEquation(`Error: ${e} `);

      }
    }
    else if (val == "x") {
      setEquation((prevEquation) => {
        return prevEquation + "*";
      });
    }
    else
    {
      setEquation((prevEquation) => {
        if (prevEquation == "0") {
          return val;
        }
        else {
          return prevEquation + val;
        }
      
      });
    }
  }

  const textStyles = {
    color: theme == 0 ? "hsl(0, 0%, 100%)" : theme == 1 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"
  }

  return (
    <div className="app" style={
        theme == 0 ? {backgroundColor: "hsl(222, 26%, 31%)"} :
        theme == 1 ? {backgroundColor: "hsl(0, 0%, 90%)", color: "hsl(60, 10%, 19%)"} : {backgroundColor: "hsl(268, 75%, 9%)"}
        }>
      <div className="container">
        <header className="header">
          <h1 className="title" style={textStyles}>
            calc
          </h1>
          <div className="theme-switcher">
            <p style={textStyles}>THEME</p>
            <div className="toggle">
              <div className="theme-number" style={textStyles}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <input type="range" min={0} max={2} id="toggle-switch" value={theme} onChange={handleThemeSwitch} />
            </div>
          </div>
        </header>
        <Display  equation={equation} theme={theme}/>
        <Numpad handleEquation={handleEquation} theme={theme}/>
      </div>
    </div>
  )
}