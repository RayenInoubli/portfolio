import ThemeToggle from "../theme-toggle/ThemeToggle";
import styles from "./Header.module.css";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <a href="#top" className={styles.logo} aria-label="Rayen Inoubli, back to top">
          RI<span className="stop">.</span>
        </a>
        <nav aria-label="Main" className={styles.nav}>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`${styles.item} link`} data-magnetic>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
