import { NavLink, Project, SocialLink } from "./types";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "https://example.com/cv.pdf", external: true },
  { name: "Contact Me", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Arcana Mystica",
    description: "A mystical tarot card webapp and encyclopedia acting as a digital oracle. Features AI-powered interpretations to help users understand their spreads, providing deep, personalized spiritual insights through a modern interface.",
    tags: ["React", "OpenAI API", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1634906979668-2b2207a9e627?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "ScentWorld",
    description: "An innovative fragrance mixing platform with over 200+ sourced notes from Fragrantica. Users create custom blends while AI weaves evocative stories and memories associated with their unique scent combinations.",
    tags: ["Next.js", "AI Integration", "PostgreSQL", "Chemistry API"],
    image: "https://images.unsplash.com/photo-1595456488737-25e227092c28?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Landing",
    description: "My personal portal to the digital universe. A fully immersive landing page featuring procedural star systems, ambient audio-reactive visuals, and navigational gateways connecting all my digital works.",
    tags: ["Three.js", "WebAudio API", "React", "WebGL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
  { platform: "Email", url: "mailto:hello@example.com", icon: Mail },
];
