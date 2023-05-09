import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Playlist App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
