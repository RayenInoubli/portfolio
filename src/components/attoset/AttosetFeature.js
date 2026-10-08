import SectionLabel from "../section-label/SectionLabel";
import { links, experiences } from "../../data/content";
import styles from "./AttosetFeature.module.css";

const attoset = experiences.find((exp) => exp.company === "Attoset");

// Top to bottom; the bottom brick lands first
const BRICKS = ["Automation", "Data", "Work"];

export default function AttosetFeature() {
  return (
    <section id="attoset" className="section container" aria-labelledby="attoset-label">
      <div className="section-grid">
        <SectionLabel id="attoset-label">
          Currently building
        </SectionLabel>

        <div className={`${styles.panel} section-body reveal`}>
          <div className={styles.copy}>
            <h3 className={styles.title}>Attoset</h3>
            <p className={styles.tagline}>The LEGO for work.</p>
            <p className={styles.description}>
              An AI-native work management platform for teams that need their
              work, data and automation in one place.
            </p>
            {links.attoset && (
              <a
                href={links.attoset}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} link`}
              >
                Explore Attoset <span className="arrow" aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          {/* Work, data and automation snapping together, one brick at a time */}
          <div className={styles.stack} aria-hidden="true">
            {BRICKS.map((brick) => (
              <span key={brick} className={styles.brick}>
                <span className="label">{brick}</span>
              </span>
            ))}
          </div>

          {attoset && (
            <dl className={styles.facts}>
              <div>
                <dt className="label">Role</dt>
                <dd>{attoset.role}</dd>
              </div>
              <div>
                <dt className="label">Period</dt>
                <dd>{attoset.period}</dd>
              </div>
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
