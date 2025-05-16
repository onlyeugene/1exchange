import type { Metadata } from "next";
import "./globals.css";
import {
  appName,
  appDescription,
  appKeywords,
  appAuthor,
  appSlogan,
} from "@/lib/constant";
import Navbar from "@/components/navbar/index";
import AOSProvider from "@/components/providers/aos-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: `${appName} - ${appSlogan}`,
  },
  description: appDescription,
  keywords: appKeywords,
  authors: [{ name: appAuthor }],
  creator: appAuthor,
  publisher: appAuthor,
  metadataBase: new URL("https://1xchange.com"),
  openGraph: {
    title: {
      template: `%s | ${appName}`,
      default: `${appName} - ${appSlogan}`,
    },
    description: appDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s | ${appName}`,
      default: `${appName} - ${appSlogan}`,
    },
    description: appDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AOSProvider>
          <Navbar />
          <main className="">{children}</main>
        </AOSProvider>
      </body>
    </html>
  );
}
