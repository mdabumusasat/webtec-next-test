import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "../public/css/animate.css";
import "../public/css/aos.css";
import "../public/css/swiper.min.css";
import "../public/css/jquery.fancybox.min.css";
import "../public/css/linear.css";
import "../public/css/select2.min.css";
import "../public/css/fontawesome.css";
import "../public/css/font-gt-walsheim-pro.css";
import "../public/css/tm-bs-mp.css";
import "../public/css/tm-utility-classes.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style-home-2.css";
import "../public/css/style-home-3.css";
import "../public/css/style.css";
import Preloader from "@/components/elements/Preloader";
import AOSProvider from "@/components/providers/AOSProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
 
export const metadata: Metadata = {
  title: "Webtec React Next Js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <AOSProvider>
          <Preloader />
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}

