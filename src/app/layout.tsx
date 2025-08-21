import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Jost, Unbounded } from "next/font/google";
import { COLORS_ROOT_STYLE } from "@/shared/config/colors";
import { ModalProvider } from "./context/ModalContext";
import Script from "next/script";

const jost = Jost({ subsets: ["latin", "cyrillic"], display: "swap" });
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-unbounded",
});
export const metadata: Metadata = {
  title: "VIBRO-LASER INDICATOR — базовый комплект для центровки валов",
  description:
    "VIBRO-LASER INDICATOR — удобный и точный комплект для центровки валов с электронными индикаторами и встроенным инклинометром. В комплекте надёжный крепёж, датчики и приложение. Обучение, консультации и сервис.",
  openGraph: {
    title: "VIBRO-LASER INDICATOR — базовый комплект для центровки валов",
    description:
      "Комплект VIBRO-LASER INDICATOR — современное решение для центровки валов: электронные индикаторы, встроенный инклинометр, удобное приложение и всё для работы в одном кейсе. Обучение и поддержка инженеров.",
    type: "website",
    url: "https://vibro-laser.ru/",
    images: [
      {
        url: "https://vibro-laser.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VIBRO-LASER INDICATOR — комплект для центровки валов",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{ __html: COLORS_ROOT_STYLE }} />
      </head>
      <body
        className={`${jost.className} ${unbounded.variable}`}
        style={{
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103833901', 'ym');

              ym(103833901, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103833901"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
