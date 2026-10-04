import SectionLabel from "../section-label/SectionLabel";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "../../data/content";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-label">
      <div className="section-grid">
        <SectionLabel id="experience-label" index="04">
          Experience
        </SectionLabel>
        <ol className={`${styles.list} section-full`}>
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}
