import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAK Growths | #1 Shopify Agency in Pakistan",
  description:
    "We help businesses grow online with professionally managed Shopify stores, Meta Ads, TikTok Ads, and Social Media Management. Local and international.",
  keywords: [
    "Shopify",
    "Meta Ads",
    "TikTok Ads",
    "Social Media Management",
    "Digital Marketing",
    "Ecommerce",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
