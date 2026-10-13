import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plate2People | Every Plate Counts",
  description:
    "Plate2People helps restaurants and event hosts redirect safe surplus food to trusted community organisations.",
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
