import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Provider from "./components/providers";


export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
            <Header />
            {children}
        </Provider>
      </body>
    </html>
  );
}
