import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impactgrains.com"),
  title: "Impact Grains - Transforming Africa's Food Future",
  description: "Impact Grains delivers premium, stone-free parboiled rice across Africa. We partner with local farmers and distributors to secure a sustainable food future.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "Impact Grains",
    "Empire Rice",
    "Rice Production Nigeria",
    "Sustainable Agriculture Africa",
    "Premium Rice",
    "Food Distribution Africa",
    "Agricultural Innovation",
    "Nigerian Rice",
    "Stone-Free Rice",
    "Food Processing"
  ],
  openGraph: {
    title: "Impact Grains - Transforming Africa's Food Future",
    description: "Impact Grains delivers premium, stone-free parboiled rice across Africa. We partner with local farmers and distributors to secure a sustainable food future.",
    url: "https://impactgrains.com/",
    siteName: "Impact Grains",
    images: [
      {
        url: "https://impactgrains.com/images/empire-rice-og.webp",
        width: 1200,
        height: 630,
        alt: "Empire Rice - Premium Parboiled Rice by Impact Grains",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Grains - Transforming Africa's Food Future",
    description: "Impact Grains delivers premium, stone-free parboiled rice across Africa. We partner with local farmers and distributors to secure a sustainable food future.",
    images: ["https://impactgrains.com/images/empire-rice-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-dark-text bg-slate-50">
        {children}
      </body>
    </html>
  );
}
