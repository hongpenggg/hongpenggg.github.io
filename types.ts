import { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
