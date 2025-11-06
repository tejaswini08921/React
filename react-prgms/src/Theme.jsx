
import React, { useState } from "react";

const withTheme = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"}
        </button>

        {/* Pass theme to wrapped component */}
        <WrappedComponent theme={theme} {...props} />
      </div>
    );
  };
};

export default withTheme;
