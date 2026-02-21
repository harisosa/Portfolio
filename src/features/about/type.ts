import { StaticImageData } from 'next/image';


export type SocialItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: StaticImageData;
};

export type TrustedCompanyImageProps = {
  src: StaticImageData;
  alt: string;
};

