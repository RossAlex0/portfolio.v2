import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WindowSizeProvider } from "@/services/context/WindowSizeContext";
import { siteMetadata, siteViewport } from "@/services/seo/metadata";
import { personJsonLd } from "@/services/seo/jsonLd";
import { fontVariables } from "@/styles/fonts";

import "@/styles/globals.css";

export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <WindowSizeProvider>{children}</WindowSizeProvider>
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
