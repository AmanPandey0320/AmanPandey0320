import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/lib/layout/navbar";


export const metadata: Metadata = {
  title: "Aman Kr Pandey",
  description: "Portfolio of Aman Kr Pandey, Software Development Engineer",
};

import { Roboto, Montserrat } from 'next/font/google';
import { ThemeProvider } from "@/lib/context/ThemeContext";

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', "symbols", "greek"],
  variable: '--font-roboto'
});

const monsterateUnderline = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <title>{"Aman Kr Pandey"}</title>
        </head>
        <body className={`bg-gray-100 dark:bg-gray-800 ${roboto.variable} ${monsterateUnderline.variable}`}>
          <NavBar />
          <div className="font-(family-name:--font-roboto)">
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
