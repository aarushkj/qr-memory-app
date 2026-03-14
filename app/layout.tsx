import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Memory App",
  description: "Scan QR codes to unlock memories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
