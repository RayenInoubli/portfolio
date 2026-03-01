import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} container`}>
      <h1>Rayen Inoubli</h1>
      <p>Software Engineer & Creative Technologist</p>
      <div className={styles.cta}>
        <a href="#projects" className={styles.primaryBtn}>
          <i className="fas fa-rocket"></i> 
          <span>Explore My Work</span>
        </a>
        <a href="#footer" className={styles.secondaryBtn}>
          <i className="fas fa-envelope"></i>
          <span>Get In Touch</span>
        </a>
      </div>
    </section>
  );
}
