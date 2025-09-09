import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header.";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Estatery - Real Estate Landing Page",
  description: "Estate Landing Page Developed By Marcos Umpierre",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
