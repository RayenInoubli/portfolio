import Image from "next/image";
import styles from "./ProjectItem.module.css";

export default function ProjectItem({ number, title, kicker, description, stack, image, href }) {
  return (
    <li className={`${styles.item} draw-rule`} data-cursor={href ? "View" : undefined}>
      <p className={`${styles.number} label parallax`} style={{ "--speed": "40px" }}>
        {number}
      </p>
      <div className={`${styles.main} reveal`}>
        <h3 className={styles.title}>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cover}>
              {title}
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className={styles.kicker}>{kicker}</p>
        <p className={styles.description}>{description}</p>
        {stack && <p className={`${styles.stack} label`}>{stack.join(" · ")}</p>}
      </div>
      <div className={styles.media}>
        <div className={`${styles.mediaInner} parallax`} style={{ "--speed": "28px" }}>
          {image ? (
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          ) : (
            <span className={`${styles.placeholder} label`}>Image · 4:3</span>
          )}
        </div>
      </div>
    </li>
  );
}
