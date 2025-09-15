import React, { useState } from "react";
import Login from "./components/Login";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <ToggleTheme dark={dark} setDark={setDark} />
      <Login />
    </div>
  );
}

export default App;
