import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
});


export const metadata: Metadata = {
  title: "Sergey Peressypkin's portfolio",
  description: "Sergey Peresypkin's portfolio on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nunito.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
