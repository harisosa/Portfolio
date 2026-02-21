import {
  Facebook,
  Instagram,
  Linkedin,
  Music2,
} from 'lucide-react';
import Code from "@/../public/icons/code.svg";
import Web from "@/../public/icons/web.svg";
import ComponentBased from "@/../public/icons/components-line.svg";
import Mobile from "@/../public/icons/mobile.svg";
import { FeatureItem, SocialItem } from '../type';


export const aboutSocials: SocialItem[] = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'TikTok', href: '#', icon: Music2 },
];

export const aboutFeatures: FeatureItem[] = [
  {
    title: 'Frontend Development',
    description:
      'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
    icon: Code,
  },
  {
    title: 'Web Performance',
    description:
      'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
    icon: Web,
  },
  {
    title: 'Component Based UI',
    description:
      'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
    icon: ComponentBased,
  },
  {
    title: 'Responsive Design',
    description:
      'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
    icon: Mobile,
  },
];