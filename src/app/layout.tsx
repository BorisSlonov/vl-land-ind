import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Jost, Unbounded } from "next/font/google";
import { COLORS_ROOT_STYLE } from "@/shared/config/colors";
import { ModalProvider } from "./context/ModalContext";
import Script from "next/script";
import LenisProvider from "@/components/providers/LenisProvider";

const jost = Jost({ subsets: ["latin", "cyrillic"], display: "swap" });
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-unbounded",
});
const CANONICAL_HOST =
  "\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440-\u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e-\u0442\u0438\u043f\u0430.\u0440\u0444";
export const metadata: Metadata = {
  metadataBase: new URL(`https://${CANONICAL_HOST}`),
  title: "Индикатор часового типа для центровки валов — VIBRO-LASER",
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
    <html lang="ru" className={unbounded.variable}>
      <head>
        <link rel="canonical" href={`https://${CANONICAL_HOST}/`} />
        <style dangerouslySetInnerHTML={{ __html: COLORS_ROOT_STYLE }} />
      </head>
      <body
        className={`${jost.className}`}
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
        <LenisProvider>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
          </ModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
