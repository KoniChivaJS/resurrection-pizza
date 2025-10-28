import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="../public/logo.png" />
      </head>
      <body className={saira.className}>{children}</body>
    </html>
  );
}
