import SectionLabel from "../section-label/SectionLabel";
import { links } from "../../data/content";
import styles from "./AttosetFeature.module.css";

export default function AttosetFeature() {
  return (
    <section id="attoset" className={styles.feature} aria-labelledby="attoset-label">
      <span className={`${styles.glyph} parallax`} style={{ "--speed": "120px" }} aria-hidden="true">
        A
      </span>
      <div className="container">
        <div className="section-grid">
          <SectionLabel id="attoset-label">
            Currently building
          </SectionLabel>
          <div className={`${styles.content} section-body`}>
            <h3 className={`${styles.title} reveal`}>Attoset<span className="stop">.</span></h3>
            <p className={`${styles.tagline} reveal`}>The LEGO for work.</p>
            <p className={`${styles.description} reveal`}>
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
        </div>
      </div>
    </section>
  );
}
