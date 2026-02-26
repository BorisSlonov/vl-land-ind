"use client";
import Script from "next/script";
import { Suspense } from "react";
import YMPageView from "./YMPageView";

const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID || 105269742);
const ENABLED = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_YM === 'true';

export default function YandexMetrika() {
  if (!ENABLED) return null;
  if (!YM_ID || Number.isNaN(YM_ID)) return null;

  const options = {
    // keep options close to Yandex defaults + your snippet
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    accurateTrackBounce: true,
    trackLinks: true,
    // ssr option is not officially documented widely, include only if required
    // ssr: true,
  } as const;

  return (
    <>
      <Script
        id="ym-tag"
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="afterInteractive"
        onLoad={() => {
          try {
            // @ts-expect-error ym is injected by the Yandex script
            window.ym?.(YM_ID, "init", options);
          } catch {
            // no-op
          }
        }}
      />
      {/* noscript fallback for users with JS disabled */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            style={{ position: "absolute", left: -9999 }}
            alt=""
          />
        </div>
      </noscript>
      {/* SPA navigation tracking */}
      <Suspense fallback={null}>
        <YMPageView id={YM_ID} />
      </Suspense>
    </>
  );
}




