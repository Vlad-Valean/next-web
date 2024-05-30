import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.scss";
import React from "react";
import ResponsiveAppBar from "@/app/components/navbar/ResponsiveAppBar";
import Container from "@mui/material/Container";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container className={'my-12 flex flex-col justify-center'}>
                {children}
            </Container>
            <Footer></Footer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
