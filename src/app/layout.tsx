import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/lib/navbar";


export const metadata: Metadata = {
  title: "Aman Kr Pandey",
  description: "Portfolio of Aman Kr Pandey, Software Development Engineer",
};

import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin',"symbols","greek"],   
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
    <html lang="en">
      <head>
        <title>{"Aman Kr Pandey"}</title>
      </head>
      <body className={`${roboto.variable} ${monsterateUnderline.variable}`}>
        <NavBar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
