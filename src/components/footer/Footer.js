import { links } from "../../data/content";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "Attoset", href: links.attoset },
  { label: "Attoset on LinkedIn", href: links.attosetLinkedin },
  { label: "GitHub", href: links.github },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer id="contact" className={`${styles.footer} container`}>
      <div className={styles.top}>
        <h2 className={`${styles.cta} reveal`}>Let’s build something<span className="stop">.</span></h2>
        <ul className={styles.links}>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link" data-magnetic>
                {link.label} <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <p className="label">© {new Date().getFullYear()} Rayen Inoubli</p>
        <a href="#top" className={`${styles.topLink} label`} data-magnetic>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
