import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/mona-sans-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/mona-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/mona-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  variable: "--font-mona-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aktay Protection",
    template: "%s | Aktay Protection",
  },
  description:
    "Professionelle Sicherheitsdienstleistungen in Brandenburg an der Havel.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Aktay Protection",
    title: "Aktay Protection",
    description: "Sicherheit beginnt mit Vertrauen.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Aktay Protection – Sicherheit beginnt mit Vertrauen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aktay Protection",
    description: "Sicherheit beginnt mit Vertrauen.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={monaSans.variable}>
      <body className={monaSans.className}>{children}</body>
    </html>
  );
}
