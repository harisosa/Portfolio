export type FaqItem = {
  id: string
  question: string
  answer?: string
  avatarUrl: string;
  tone?: "default" | "highlight"
}