import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

export interface IAlert {
  msg: string;
  type: string;
}
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState<IAlert | undefined>(undefined);

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(undefined);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert(undefined);
    }
  };
  return (
    <>
      <Router>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
        {/* /users --> Component 1
            /users/home --> Component 2 */}
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/">
        <Textform
          heading={"Enter text to analyze below"}
          mode={mode}
          showAlert={showAlert}
        />
        </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
