import styles from "./Experience.module.css";

const experiences = [
  {
    title: "Lead Engineer & Co-founder",
    company: "Attoset",
    date: "2025 - Present",
    description:
      "Driving the technical vision and engineering roadmap for our innovative solutions.",
  },
  {
    title: "Software Engineer Intern",
    company: "Attoflow Consulting",
    date: "2025",
    description:
      "Engineered an advanced automation module integrated into a core SaaS platform. Architected scalable background task processing using Node.js and BullMQ, while crafting a seamless user interface with React to enhance system productivity and reliability.",
  },
  {
    title: "DevOps Engineer Intern",
    company: "Attijari Bank",
    date: "2024",
    description:
      "Architected a full CI/CD deployment environment for an internal poker planning application (Spring Boot, Angular, MongoDB) leveraging Azure Kubernetes Service (AKS), Docker, and GitHub Actions.",
  },
  {
    title: "Software Dev Intern",
    company: "DevNet",
    date: "2023",
    description:
      "Contributed to the development of a comprehensive work tracking application using Laravel and Flutter.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} container`}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.dot}></div>
              {index !== experiences.length - 1 && (
                <div className={styles.line}></div>
              )}
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.title}>{exp.title}</h3>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
