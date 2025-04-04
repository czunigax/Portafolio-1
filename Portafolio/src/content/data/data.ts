export const profileImage = "/images/yo.jpg"; 

export const introData = {
  introduction: {
    title: "¡Hola! Soy Cristian Rodil Zuniga",
    description: `
      Soy un estudiante apasionado de la carrera de <strong>Ingeniería en Sistemas</strong>, con una fuerte inclinación hacia el desarrollo de software y la gestión de proyectos.
      Me entusiasma la creación de <strong>soluciones tecnológicas innovadoras y eficientes</strong>, y mi portafolio es una muestra de mi dedicación por aprender y aplicar mis conocimientos en proyectos desafiantes.

      <strong>Mi enfoque principal</strong> se centra en tecnologías como <strong>JavaScript</strong> y <strong>React</strong>, que me permiten construir <strong>interfaces de usuario interactivas y dinámicas</strong>, así como <strong>Python</strong> y <strong>Java</strong>, lenguajes versátiles y poderosos que utilizo para desarrollar la lógica de mis aplicaciones.
    `,
  },
  aboutMe: {
    title: "🏆 Sobre mí",
    description: `
      Soy una persona <strong>proactiva</strong>, con capacidad para <strong>trabajar en equipo</strong>, <strong>resolver problemas de manera efectiva</strong> y <strong>comunicarme claramente</strong>.

      Soy un ferviente amante de los <strong>videojuegos</strong> y del <strong>deporte</strong>, mezclando ambos mundos para mantenerme saludable física y mentalmente.
    `,
  },
};



export type SkillCategory = "Frontend" | "Backend" | "Databases" | "DevOps";
export type Skill = { name: string; level: number };

export const skills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: "JavaScript", level: 60 },
    { name: "React", level: 60 },
    { name: "TailwindCSS", level: 50 },
  ],
  Backend: [
    { name: "Python", level: 50 },
    { name: "Java", level: 50 },
    { name: "C++", level: 40 },
  ],
  Databases: [
    { name: "MySQL", level: 50 },
    { name: "SQL Server", level: 50 },
    { name: "PostgreSQL", level: 40 },
  ],
  DevOps: [
    { name: "Apache", level: 50 },
    { name: "Docker", level: 40 },
  ],
} as const;

export type Social = { name: string; url: string; icon: string };
export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cristian-rodil/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "GitHub",
    url: "https://github.com/cristianrodil",
    icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
] as const;

export type NavItem = {
  title: string;
  href: string;
  subitems?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Proyectos",
    href: "/projects",
    subitems: [
      {
        title: "ERP Repuestos",
        href: "/projects/erp-repuestos",
      },
      {
        title: "Matrícula UNAH",
        href: "/projects/matricula",
      },
      {
        title: "ERP Ferretería",
        href: "/projects/erp-ferreteria",
      },
      {
        title: "Sistema de Colas",
        href: "/projects/simulacion",
      },
      {
        title: "ERP de Funeraria",
        href: "/projects/erp-funeraria",
      },
    ],
  },
] as const;