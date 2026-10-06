import SectionLabel from "../section-label/SectionLabel";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className="section container" aria-labelledby="work-label">
      <div className="section-grid">
        <SectionLabel id="work-label">
          Selected work
        </SectionLabel>
        <ol className={`${styles.list} section-full`}>
          {projects.map((project, i) => (
            <ProjectItem
              key={project.title}
              number={String(i + 1).padStart(2, "0")}
              index={i}
              {...project}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
