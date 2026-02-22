import type { StaticImageData } from "next/image"

import Amazon from "@/../public/images/amazon.svg"
import Microsoft from "@/../public/images/microsoft.svg"
import Docker from "@/../public/images/docker.svg"
import Atlassian from "@/../public/images/atlassian.svg"

import { JourneyItem } from "../types"

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Built responsive and scalable web interfaces using modern frameworks such as React.js and TypeScript, ensuring seamless integration with backend systems and APIs. Optimized performance through efficient rendering strategies and component-level state management. Implemented accessible UI patterns and reusable design components to enhance usability, maintain consistency across platforms, and support long-term scalability in enterprise-level applications.",
    logoSrc: Amazon,
    logoAlt: "Amazon"
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Collaborated with cross-functional teams including product managers and backend engineers to deliver high-performance frontend solutions. Focused on code maintainability by introducing modular architecture and reusable component libraries. Ensured accessibility compliance and responsive layouts across different screen sizes, while optimizing load performance and reducing unnecessary re-renders in dynamic data-driven interfaces.",
    logoSrc: Microsoft,
    logoAlt: "Microsoft"
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Enhanced user experience by refactoring legacy UI modules into scalable and maintainable structures. Managed asynchronous data flows and integrated RESTful APIs into dynamic components. Contributed to frontend architecture improvements that enabled better performance, consistent layout rendering, and adaptability across mobile and desktop environments in large-scale enterprise platforms.",
    logoSrc: Docker,
    logoAlt: "Docker"
  },
  {
    title: "Frontend Engineer",
    period: "2024 - 2025",
    description:
      "Designed and implemented complex user interface features that required synchronization between multiple state layers and external services. Leveraged component-driven development principles to ensure consistent behavior and visual alignment across different modules. Applied responsive design techniques and layout optimizations to support varying viewport sizes while maintaining performance and scalability.",
    logoSrc: Atlassian,
    logoAlt: "Atlassian"
  }
]