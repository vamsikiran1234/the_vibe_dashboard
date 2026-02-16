import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Dashboard",
  description: "A modern dashboard for browsing items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
