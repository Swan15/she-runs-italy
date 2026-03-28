import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "She Runs Italy — 8 Days in Southern Italy | July 2026",
  description:
    "Join She Runs on an unforgettable 8-day adventure through Southern Italy. Rome, Naples, Pompeii, Positano, Capri. Women only. 18–25 July 2026. From $1,599 AUD.",
  openGraph: {
    title: "She Runs Italy — 8 Days in Southern Italy",
    description:
      "8 days. Southern Italy. Women only. Rome → Naples → Pompeii → Positano → Capri. From $1,599 AUD.",
    images: [
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1200",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PIXEL_ID_HERE');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PIXEL_ID_HERE&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
