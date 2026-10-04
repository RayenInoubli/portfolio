import SectionLabel from "../section-label/SectionLabel";
import ScrollFillText from "../scroll-fill-text/ScrollFillText";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-label">
      <div className="section-grid">
        <SectionLabel id="about-label" index="01">
          About
        </SectionLabel>
        <div className={`${styles.body} section-body`}>
          <ScrollFillText
            className={styles.lead}
            text="I enjoy working across the entire lifecycle of a product, from architecture and implementation to infrastructure and deployment."
          />
          <p className={`${styles.text} reveal`}>
            With a passion for problem-solving, I specialize in full-stack
            development, AI integration and interactive media.
          </p>
        </div>
      </div>
    </section>
  );
}
