import KineticGrid from "../kinetic-grid/KineticGrid";
import styles from "./Hero.module.css";

const NAME = ["Rayen", "Inoubli"];

export default function Hero() {
  let index = 0;

  return (
    <section id="top" className={`${styles.hero} container`} aria-label="Introduction">
      <KineticGrid />

      <p className={`${styles.statement} enter`} style={{ "--delay": "700ms" }}>
        I build software products, systems and infrastructure{" "}
        <span className={styles.muted}>from idea to production.</span>
      </p>

      <div className={`${styles.bar} enter`} style={{ "--delay": "900ms" }}>
        <p className={styles.role}>Software Engineer</p>
        <p className={styles.company}>
          <span className={styles.muted}>Co-Founder at</span> Attoset
        </p>
        <a href="#about" className={`${styles.explore} label`} data-magnetic>
          Explore <span className={styles.down} aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Each letter rises out of a cut line, staggered left to right */}
      <h1 className={styles.name} aria-label={NAME.join(" ")}>
        <span className={styles.drift} aria-hidden="true">
          {NAME.map((word) => (
            <span key={word} className={styles.word}>
              {[...word].map((char) => (
                <span key={index} className={styles.char} style={{ "--i": index++ }}>
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      </h1>
    </section>
  );
}
