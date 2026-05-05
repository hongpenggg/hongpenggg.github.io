import { NavLink, Project, SocialLink } from "./types";
import { Github, Linkedin, Mail, InstagramIcon } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/Hongpeng_CV.pdf", external: true },
  { name: "Contact Me", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Arcana Mystica",
    description: "A mystical tarot card webapp and encyclopedia acting as a digital oracle. Features AI-powered interpretations to help users understand their spreads, providing deep, personalized spiritual insights through a modern interface.",
    tags: ["React", "Vite", "Node.js", "Openrouter API", "TypeScript", "Tailwind"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/arcana.jpeg",
    link: "https://arcanamystica.vercel.app",
    github: "https://github.com/hongpenggg/arcana"
  },
  {
    title: "ScentWorld",
    description: "An innovative fragrance mixing platform with over 200+ sourced notes from Fragrantica. Users create custom blends while AI weaves evocative stories and memories associated with their unique scent combinations. In version 2, classic and timeless fragrances by legendary perfume houses like Chanel, Dior and Armani are added as 'preset blends' for users to explore and draw inspiration from.",
    tags: ["HTML", "Openrouter API", "CSS", "JavaScript"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/scentworld.jpeg",
    link: "https://scentworld.vercel.app",
    github: "https://github.com/hongpenggg/scentworld"
  },
  {
    title: "Landing",
    description: "My personal portal to the digital universe. A fully immersive landing page featuring ambient audio-reactive visuals and navigational gateways connecting all my digital works.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/landing.jpeg",
    link: "https://hongpenggg.github.io/landing",
    github: "https://github.com/hongpenggg/landing"
  },
  {
    title: "Echoes of Wisdom - Debate Simulator",
    description: "An AI-powered debate simulator that generates thought-provoking arguments and counterarguments on a wide range of topics. Users can engage in virtual debates with AI opponents (historical and fictional thinkers, ranging from Socrates to Tywin Lannister), enhancing critical thinking and communication skills.",
    tags: ["React", "Vite", "Node.js", "Openrouter API", "TypeScript", "Tailwind"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/echoes.jpeg",
    link: "https://echoesofwisdom.vercel.app",
    github: "https://github.com/hongpenggg/echoes"
  },
  {
    title: "TowOK: Hawker Delivery Aggregator Platform",
    description: "A platform that aggregates hawker food delivery services, allowing hawkers to browse, edit, track, and manage deliveries from multiple local platforms like Grab, Deliveroo, FoodPanda etc, and speed up and streamline their operations with a unified dashboard. Proof of concept for school project.",
    tags: ["Figma", "Photoshop", "HTML", "Canva"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/towok.jpeg",
    link: "https://www.figma.com/proto/XDWmYZhHJvrpjYcmhoX3N0/Hawker-Integration?type=design&t=mQ5VS0fYs7fs0LO6-1&scaling=scale-down&page-id=0%3A1&node-id=5-14&starting-point-node-id=5%3A14&mode=design",
    github: "https://github.com/hongpenggg/"
  },
  {
    title: "TrainEffective App Redesign",
    description: "Undertook a comprehensive redesign of the TrainEffective fitness app, enhancing user experience and visual appeal. The redesign focused on creating a more intuitive interface, improving navigation, and incorporating modern design principles to increase user engagement and satisfaction.",
    tags: ["Figma", "Photoshop", "HTML", "Canva"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/traineffective.jpeg",
    link: "https://www.figma.com/proto/hg4t2yBqvW8ZTSizVBK0Cb/TrainEffective-App?type=design&node-id=1-2&t=Tg6MNPzmqpJa2IUQ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    github: "https://github.com/hongpenggg/"
  },
  {
    title: "TroopDrop",
    description: "Conducted study and literature review of the applications of AR/VR technologies in training soldiers for combat in SEA-specific geography, such as rainforests. Studied the use of computer vision with Lidar to detect and map obstacles and hostile threats.",
    tags: ["TensorFlow", "Keras", "Deep Learning", "Computer Vision", "Augmented Reality"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/troopdrop.jpg",
    link: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/Troopdrop_Paper.pdf",
    github: "https://github.com/hongpenggg/"
  },
  {
    title: "Ruby Phoenixes Football Platform",
    description: "Worked with staff and coaches from Ruby Phoenixes FC and MCCY to develop a web-based platform for tracking player development and improvement with data-oriented approach.",
    tags: ["React", "Vite", "Node.js", "TypeScript", "Tailwind", "Supabase"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/ruby_phoenixes.jpeg",
    link: "https://rubyphoenixes.vercel.app",
    github: "https://github.com/hongpenggg/ruby-phoenixes"
  },
  {
    title: "Il Consigliere RPG",
    description: "1940s post-war noir mafia RPG based on Suzerain. Every choice has a consequence. Some are out to help you, more are out to get you.",
    tags: ["React", "Vite", "Node.js", "OpenRouter API", "TypeScript", "Tailwind", "Supabase", "Google Auth"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/il_consigliere.jpeg",
    link: "https://il-consigliere.vercel.app",
    github: "https://github.com/hongpenggg/il_consigliere"
  },
  {
    title: "Bit by Bit Coding Website",
    description: "Developed front-facing website for Bit by Bit Coding, the non-profit coding education groundup that I run with a team of passionate volunteers. Website handled >100 users with >1.5k events. High engagement with >40s average time spent.",
    tags: ["React", "Vite", "Node.js", "TypeScript", "Tailwind", "Tally API", "Google Analytics"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/bbb_website.jpeg",
    link: "https://bbbcoding.vercel.app",
    github: "https://github.com/bitbybitcoding/bitbybitcoding.github.io"
  },
  {
    title: "Bit by Bit Coding Playground",
    description: "Developed Bit by Bit Coding's web playground for students to attempt extra challenges after lessons and practice anywhere.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Supabase", "Google Auth", "Pyodide"],
    image: "https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/bbb_playground.jpeg",
    link: "https://bbbplayground.vercel.app",
    github: "https://github.com/bitbybitcoding/playground"
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/hongpenggg", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/hongpengwei", icon: Linkedin },
  { platform: "Instagram", url: "https://instagram.com/hongpenggg", icon: InstagramIcon },
  { platform: "Email", url: "mailto:wei.hongpeng.2023@vjc.edu.sg", icon: Mail },
];
