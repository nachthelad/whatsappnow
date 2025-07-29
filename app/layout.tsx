import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whatsappnow.vercel.app"),
  title: "Enviar Whatsapp Sin Agendar",
  description: "Enviar mensajes de WhatsApp sin agendar el contacto",
  keywords: "whatsapp,mensajes,sin agendar,pwa",
  authors: [{ name: "Nachthelad" }],
  creator: "Nachthelad",
  publisher: "Nachthelad",
  robots: "index, follow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "WhatsApp Sin Agendar",
  },
  alternates: {
    canonical: "https://whatsappnow.vercel.app",
  },
  other: {
    "format-detection": "telephone=no, address=no, email=no",
    "google-site-verification": "your-google-verification-code",
    googlebot:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  openGraph: {
    title: "WhatsApp Sin Agendar",
    description: "Enviar mensajes de WhatsApp sin agendar el contacto",
    url: "https://whatsappnow.vercel.app",
    siteName: "WhatsApp Sin Agendar",
    locale: "es_AR",
    images: [
      {
        url: "http://localhost:3000/images/icon512.png",
        width: 512,
        height: 512,
        alt: "WhatsApp Sin Agendar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Sin Agendar",
    description: "Enviar mensajes de WhatsApp sin agendar el contacto",
    images: ["/images/icon512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon144.svg", type: "image/svg+xml" },
      { url: "/images/icon192.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/images/icon192.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#128c7e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="image"
          imageSrcSet="
          https://cdn.cafecito.app/imgs/buttons/button_1.png       1x,
          https://cdn.cafecito.app/imgs/buttons/button_1_2x.png    2x,
          https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x
        "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/images/icon144.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/icon192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Disable caching in development */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
