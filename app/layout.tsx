import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soarglobals.com"),
  title: {
    default: "Soar Global Trade & Logistics",
    template: "%s | Soar Global",
  },
  description:
    "Procurement, freight forwarding, import, export, parcel shipping and business logistics from Northern Ireland to global markets.",
  openGraph: {
    title: "Soar Global Trade & Logistics",
    description:
      "Connecting Northern Ireland businesses and individuals to global markets.",
    url: "https://soarglobals.com",
    siteName: "Soar Global",
    images: [{ url: "/images/soar-logo-mark.png", width: 512, height: 384 }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06172c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
