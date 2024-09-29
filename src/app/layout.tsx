import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./app-provider";

const nunito = Nunito({
  subsets: ["latin"], // Optional: to optimize for specific character subsets
  weight: ["400", "700"], // You can choose the weights you want to use
});

export const metadata: Metadata = {
  title: "ZK Portfolio Website",
  description: "Kamil's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
