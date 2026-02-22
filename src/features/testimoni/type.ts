export type TestimoniRole = "hero" | "top" | "bottom";

export interface TestimoniFeature {
  id: string;
  role: TestimoniRole;
  metric?: string;
  headline?: string;
  rating?: number;
  quote: string;
  person: {
    name: string;
    title: string;
    avatarUrl: string;
  };
}