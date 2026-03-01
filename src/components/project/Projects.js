import styles from "./Projects.module.css";

const projects = [
  {
    title: "React SPF",
    description:
      "Visualizing pathfinding algorithms like Dijkstra and A* using React. Interactive tool to explore how search algorithms navigate obstacles to find the shortest path.",
    tags: ["React", "Algorithms", "Optimization"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Cloud Infrastructure Boilerplate",
    description:
      "Multi-tier React/Node.js deployment template using Terraform and K8s. Ready-to-use infra-as-code for scalable cloud environments.",
    tags: ["Kubernetes", "Terraform", "Node.js", "React"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Turbo Task App",
    description:
      "High-performance task management with real-time updates and an intuitive UI for maximizing daily productivity.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Poker Planning WebApp",
    description:
      "Collaborative estimation tool for agile teams. Real-time voting, session management, and integrated metrics for scrum masters.",
    tags: ["Spring Boot", "React", "MongoDB", "WebSockets"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Live Chat App",
    description:
      "Encrypted real-time messaging platform with instant message delivery and persistent chat history.",
    tags: ["Node.js", "Socket.io", "MongoDB", "React"],
    github: "https://github.com",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} container`}>
      <h2 className={styles.sectionTitle}>Selected Works</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <i className="fab fa-github"></i>
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  <span className={`${styles.iconLink} ${styles.disabled}`}>
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                )}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
