import Image from "next/image";
import Tilt from "../tilt/Tilt";
import styles from "./ProjectItem.module.css";

export default function ProjectItem({ number, title, kicker, description, stack, image, href, index }) {
  return (
    <li className={`${styles.card} reveal`} style={{ "--i": index }}>
      <Tilt className={styles.tilt}>
        <div className={styles.inner} data-cursor={href ? "View" : undefined}>
          <div className={styles.media}>
            <div className={`${styles.mediaInner} parallax`} style={{ "--speed": "12px" }}>
              {image ? (
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.image}
                />
              ) : (
                <span className={`${styles.placeholder} label`}>Image · 16:10</span>
              )}
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.head}>
              <p className={`${styles.number} label`}>{number}</p>
              <p className={`${styles.kicker} label`}>{kicker}</p>
            </div>
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
            <p className={styles.description}>{description}</p>
            {stack && <p className={`${styles.stack} label`}>{stack.join(" · ")}</p>}
          </div>
        </div>
      </Tilt>
    </li>
  );
}
