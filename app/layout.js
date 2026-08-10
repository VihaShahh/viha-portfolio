import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Viha Shah | Backend Software Developer",
  description:
    "Viha Shah builds reliable backend systems, financial workflows, and AI-assisted automation with Node.js, NestJS, and Python.",
  authors: [{ name: "Viha Shah", url: "https://github.com/vihashahh" }],
  openGraph: {
    title: "Viha Shah | Backend Software Developer",
    description:
      "Node.js, NestJS, financial workflows, AI-assisted automation, and applied computer vision.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem("portfolio-theme");
                const theme = stored === "light" ? "light" : "dark";
                document.documentElement.dataset.theme = theme;
              } catch {}
            })();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
