import { NavLink, Project, SocialLink } from "./types";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "https://pdfhost.io/v/VnOpMQ1jv_Hongpeng_Weis_Curriculum_Vitae", external: true },
  { name: "Contact Me", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Arcana Mystica",
    description: "A mystical tarot card webapp and encyclopedia acting as a digital oracle. Features AI-powered interpretations to help users understand their spreads, providing deep, personalized spiritual insights through a modern interface.",
    tags: ["React", "Openrouter API", "TypeScript", "Tailwind"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/arcana.jpeg",
    link: "https://hongpenggg.github.io/arcana",
    github: "https://github.com/hongpenggg/arcana"
  },
  {
    title: "ScentWorld",
    description: "An innovative fragrance mixing platform with over 200+ sourced notes from Fragrantica. Users create custom blends while AI weaves evocative stories and memories associated with their unique scent combinations.",
    tags: ["HTML", "Openrouter API", "CSS", "JavaScript"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/scentworld.jpeg",
    link: "https://hongpenggg.github.io/scentworld",
    github: "https://github.com/hongpenggg/scentworld"
  },
  {
    title: "Landing",
    description: "My personal portal to the digital universe. A fully immersive landing page featuring ambient audio-reactive visuals and navigational gateways connecting all my digital works.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/landing.jpeg",
    link: "https://hongpenggg.github.io/landing",
    github: "https://github.com/hongpenggg/landing"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/hongpenggg", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/hongpengwei", icon: Linkedin },
  { platform: "Instagram", url: "https://instagram.com/hongpenggg", icon: Twitter },
  { platform: "Email", url: "mailto:wei.hongpeng.2023@vjc.edu.sg", icon: Mail },
];
