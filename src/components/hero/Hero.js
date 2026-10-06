import KineticGrid from "../kinetic-grid/KineticGrid";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={`${styles.hero} container`} aria-label="Introduction">
      <KineticGrid />

      <h1 className={styles.name}>
        <span className={styles.drift} style={{ "--drift": "-12vh", "--drift-x": "-8vw" }}>
          <span className="enter" style={{ "--delay": "100ms" }}>Rayen</span>
        </span>
        <span className={`${styles.drift} ${styles.last}`} style={{ "--drift": "-5vh", "--drift-x": "8vw" }}>
          <span className="enter" style={{ "--delay": "250ms" }}>Inoubli<span className="stop">.</span></span>
        </span>
      </h1>

      <div className={styles.meta}>
        <p className={`${styles.role} enter`} style={{ "--delay": "600ms" }}>
          Software Engineer
          <br />
          <span className={styles.muted}>Co-Founder at Attoset</span>
        </p>
        <p className={`${styles.intro} enter`} style={{ "--delay": "750ms" }}>
          I build software products, systems and infrastructure from idea to production.
        </p>
        <a
          href="#about"
          className={`${styles.explore} label enter`}
          data-magnetic
          style={{ "--delay": "1000ms" }}
        >
          <span className={styles.down} aria-hidden="true">↓</span> Explore
        </a>
      </div>
    </section>
  );
}
