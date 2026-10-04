---
name: new-section
description: Scaffold a new portfolio section or component (e.g. Skills, Testimonials, Contact, Blog) following this repo's folder, CSS Module, theming, and anchor conventions. Use when the user asks to add a section, page block, or reusable component.
---

# New Section

## Steps

1. **Name**: PascalCase component (`Skills`), lowercase folder (`skills`), anchor id lowercase (`skills`).
2. **Create** `src/components/<folder>/<Name>.js` (server component):

```jsx
import SectionLabel from "../section-label/SectionLabel";
import styles from "./<Name>.module.css";

export default function <Name>() {
  return (
    <section id="<anchor>" className="section container" aria-labelledby="<anchor>-label">
      <div className="section-grid">
        <SectionLabel id="<anchor>-label" index="0N"><Label></SectionLabel>
        <div className={`${styles.body} section-body`}>{/* content */}</div>
      </div>
    </section>
  );
}
```

   - Content/copy goes in `src/data/content.js`, not inline arrays. Never invent URLs: `href: null` + `// TODO`.
   - Use `.reveal` for scroll-in, `.parallax` + `style={{ "--speed": "24px" }}` for depth (not both on one element).

3. **Create** `<Name>.module.css`: tokens only (`--text`, `--muted`, `--border`, `--accent`), display type via `var(--display-weight)` + `var(--display-axes)`, collapse at `@media (max-width: 900px)`.
4. **Register** in `src/app/page.js`; if linkable, add to `navItems` in `src/components/header/Header.js`. Renumber SectionLabel indices.
5. **Verify**: `npm run lint && npm run build`; check both themes, 375px, and reduced motion.

## Data-driven content

Lists (projects, jobs, skills): array of objects, `.map()` with stable `key` (id or slug, not index). Repeated entry markup → extract `<NameItem>` in same folder (see `ProjectItem`).
