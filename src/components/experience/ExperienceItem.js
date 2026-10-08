import styles from "./ExperienceItem.module.css";

export default function ExperienceItem({ period, company, role, description, href }) {
  return (
    <li className={styles.item}>
      <p className={`${styles.period} label`}>{period}</p>
      <div className={`${styles.main} reveal`}>
        <h3 className={styles.company}>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cover}>
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.description}>{description}</p>
      </div>
      {href && (
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      )}
    </li>
  );
}
