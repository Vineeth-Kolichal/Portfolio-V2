import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vineeth Chandran | Flutter & React Native Developer",
  description:
    "Portfolio of Vineeth Chandran, a Flutter and React Native developer with 4+ years of experience building scalable cross-platform mobile apps. Available for full-time roles and freelance projects.",
  keywords: ["Flutter developer", "React Native developer", "Dart", "Clean Architecture", "BLoC", "freelance mobile developer", "Kochi"],
  authors: [{ name: "Vineeth Chandran" }],
  openGraph: {
    title: "Vineeth Chandran | Flutter & React Native Developer",
    description: "Scalable cross-platform mobile apps with Clean Architecture. Open to roles and freelance work.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">{children}</body>
    </html>
  );
}
