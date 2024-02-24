import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniruddh Nagare",
  description: "Developerand Creator"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
