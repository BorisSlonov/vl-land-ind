import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Jost, Unbounded } from "next/font/google";
import { COLORS_ROOT_STYLE } from "@/shared/config/colors";

const jost = Jost({ subsets: ["latin", "cyrillic"], display: "swap" });
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-unbounded",
});
export const metadata: Metadata = {
  title:
    "Учебный центр Vibro-Laser: обучение центровке, вибродиагностики оборудования",
  description:
    " Учебный центр повышения квалификации VIBRO-LASER: Центровка, Вибродиагностика, Тепловидение, Балансировка, Виброналадка оборудования. Возможно выездное обучение.",
  openGraph: {
    title:
      "Учебный центр Vibro-Laser: обучение центровке, вибродиагностики оборудования",
    description:
      " Учебный центр повышения квалификации VIBRO-LASER: Центровка, Вибродиагностика, Тепловидение, Балансировка, Виброналадка оборудования. Возможно выездное обучение.",
  },
};

const yandexMetricaScript = `
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
  (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(100740825, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
  });
</script>
<noscript>
  <div>
    <img src="https://mc.yandex.ru/watch/100740825" style="position:absolute; left:-9999px;" alt="" />
  </div>
</noscript>

<!-- /Yandex.Metrika counter -->

`;

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
        <div dangerouslySetInnerHTML={{ __html: yandexMetricaScript }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
