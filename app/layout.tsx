import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  style={{
    backgroundColor: '#121212', // Pure black shade with slight greyish tint
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>


        {children}
      </body>
    </html>
  );
}
