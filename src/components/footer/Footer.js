import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/rayen-inoubli-a7842120b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/RayenInoubli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Rayen Inoubli
      </div>
    </footer>
  );
}
