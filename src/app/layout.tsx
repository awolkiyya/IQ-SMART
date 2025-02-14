import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/utils/cn";
import NavBar from "@/components/navbar";
import Provider from "@/components/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
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
    <Provider>
      <html lang="en">
        <body
          className={cn(['min-h-screen font-sans antialiased grainy ',`${geistSans.variable} ${geistMono.variable}`])}
        >
          <NavBar/>
          <main>{children}</main>
           <Toaster />
          {/* <ToastContainer /> */}
        </body>
     </html>
    </Provider>
   
  );
}
