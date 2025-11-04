import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useScrollDirection } from "../hooks";

const Nav: React.FC = () => {
  const { scrollDir, scrolledToTop } = useScrollDirection();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  let navClass = "";

  if (!scrolledToTop) {
    if (scrollDir === "up") {
      navClass = "scroll-up";
    } else if (scrollDir === "down") {
      navClass = "scroll-down";
    }
  }

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <nav className={`nav ${navClass}`}>
      <div className="logo">
        <NavLink to="/">Movies</NavLink>
      </div>
      <label htmlFor="darkModeToggle" className="toggle-label">
        <input
          type="checkbox"
          id="darkModeToggle"
          className="toggle-input"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span className="toggle-button"></span>
        <span className={`toggle-text ${isDarkMode ? "dark" : "light"}`}>
          {isDarkMode ? "Dark" : "Light"}
        </span>
      </label>
    </nav>
  );
};

export default Nav;
