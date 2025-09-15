import React from "react";

function ToggleTheme({ dark, setDark }) {
  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default ToggleTheme;
