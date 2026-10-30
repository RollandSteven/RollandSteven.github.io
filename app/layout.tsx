import "./globals.css";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
export const metadata: Metadata = { title: `${profile.name} | ${profile.title}`, description: profile.intro };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
