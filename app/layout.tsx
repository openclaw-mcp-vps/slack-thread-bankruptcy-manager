import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Bankruptcy Manager – Archive Overwhelming Threads Automatically",
  description: "Automatically archives Slack threads when they exceed configurable message/participant limits, moving them to searchable archive channels. Built for engineering managers at scale-ups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="804dc898-54c3-4b04-8b49-9ca8e905b4c1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
