"use client";

import { useState } from "react";
import { useTheme } from "../../app/ThemeProvider";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("about");

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>RI.</div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.navItem} ${activeItem === item.id ? styles.active : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubIcon}
        >
          <i className="fab fa-github"></i>
        </a>
        <button className={styles.toggleBtn} onClick={toggleTheme}>
          <i className={`fas ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
        </button>
      </div>
    </header>
  );
}
