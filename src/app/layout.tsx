import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
});


export const metadata: Metadata = {
  title: "Sergey Peressypkin portfolio",
  description: "Sergey Peresypkin portfolio on Next.js",
    verification: {
        yandex: "65db42d9bbe8f4f5",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
            <meta name="yandex-verification" content="65db42d9bbe8f4f5" />
        </Head>
        <body className={` ${nunito.className}  antialiased`}>
            {children}
        </body>
    </html>
  );
}
