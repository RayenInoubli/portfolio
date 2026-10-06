// Site content. Entries with `href: null` render without a link;
// replace each TODO with a real URL when available.
// Project images: drop a 16:10 file (e.g. 1312×816) into public/projects/
// and set `image: "/projects/<name>.jpg"`. `null` shows a placeholder frame.

export const links = {
  linkedin: "https://www.linkedin.com/in/rayen-inoubli-a7842120b",
  github: "https://github.com/RayenInoubli",
  attoset: null, // TODO: Attoset website URL
  attosetLinkedin: null, // TODO: Attoset company LinkedIn URL
};

export const experiences = [
  {
    period: "2025 – Present",
    company: "Attoset",
    role: "Co-Founder · Lead Engineer",
    description:
      "Building Attoset, an AI-native work management platform designed to bring data, workflows and AI agents into one system. Driving the technical vision and engineering roadmap.",
    href: links.attoset,
  },
  {
    period: "2025",
    company: "Attoflow Consulting",
    role: "Software Engineer",
    description:
      "Built features for a core SaaS platform, working across backend services and the user interface.",
    href: null,
  },
  {
    period: "2024",
    company: "Attijari Bank",
    role: "DevOps Engineer Intern",
    description:
      "Architected a full CI/CD deployment environment for an internal poker planning application (Spring Boot, Angular, MongoDB) on Azure Kubernetes Service, Docker and GitHub Actions.",
    href: null,
  },
  {
    period: "2023",
    company: "DevNet",
    role: "Software Developer Intern",
    description:
      "Contributed to a work tracking application built with Laravel and Flutter.",
    href: null,
  },
];

export const projects = [
  {
    title: "Murmur",
    kicker: "Spending tracker",
    description: "A voice-first, offline-first app for tracking what you spend.",
    stack: null,
    image: "/projects/murmur.jpg",
    href: null,
  },
  {
    title: "Tickd",
    kicker: "Task management",
    description: "A better task app, designed to fix Microsoft To Do’s pain points.",
    stack: null,
    image: "/projects/tickd.jpg",
    href: null,
  },
  {
    title: "Palenque UI",
    kicker: "Open-source UI library",
    description:
      "A startup-focused UI library with MCP support for AI agents.",
    stack: null,
    image: "/projects/palenque-ui.jpg",
    href: null,
  },
];
