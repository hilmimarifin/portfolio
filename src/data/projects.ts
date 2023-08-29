import geniouz from '../../public/images/projects/geniouz.png'
import quran from '../../public/images/projects/quran.png'

export const projects = [
  {
    title: "Geniouz catalogue",
    slug: "geniouz-catalogue",
    description: "Developer-friendly Entity Relationship Diagram Builder",
    jobs: ["Frontend"],
    tools: ["typescript", "react"] as const,
    url: "https://geniouz.id",
    gitUrl: "https://github.com/hilmimarifin/geniouz-catalogue",
    thumbnail: geniouz,
  },
  {
    title: "Al-Qur'an App",
    slug: "quran-app",
    description: "Developer-friendly Entity Relationship Diagram Builder",
    jobs: ["Frontend"],
    tools: ["typescript", "react"] as const,
    url: "https://quran-web-two.vercel.app/",
    gitUrl: "https://quran-web-two.vercel.app/",
    thumbnail: quran,
  },
];
