"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import Arrow from "./icons/arrow";

const LandingIntro = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const bgLayerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const arrowRef = useRef<HTMLButtonElement | null>(null);

  const handleArrowClick = () => {
    const el = sectionRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const sectionTop = el.offsetTop;
    const sectionHeight = el.offsetHeight;
    const pinDuration = Math.max(1, sectionHeight - vh);
    const endClamp = 0.8; // keep in sync with compute()
    const target = sectionTop + endClamp * pinDuration;
    try {
      window.scrollTo({ top: target, behavior: "smooth" });
    } catch (_) {
      window.scrollTo(0, target);
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const HEADER_H = 0; // adjust if header should be excluded
    const getAnimLength = () => Math.max(1, window.innerHeight); // fallback use viewport height

    const compute = () => {
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      // Pin logic: fixed while scroll is within section bounds
      const start = sectionTop;
      const pinDuration = Math.max(1, sectionHeight - vh); // time while pinned
      const end = sectionTop + pinDuration;
      const inRange = scrollY >= start && scrollY < end;

      if (pinRef.current) {
        if (inRange) {
          const style = pinRef.current.style;
          style.position = "fixed";
          style.top = `${HEADER_H}px`;
          style.left = "0";
          style.right = "0";
          style.width = "100%";
          style.height = `${vh - HEADER_H}px`;
        } else if (scrollY >= end) {
          // lock to bottom of section
          const style = pinRef.current.style;
          style.position = "absolute";
          style.top = `${sectionHeight - (vh - HEADER_H)}px`;
          style.left = "0";
          style.right = "0";
          style.width = "100%";
          style.height = `${vh - HEADER_H}px`;
        } else {
          // before entering
          const style = pinRef.current.style;
          style.position = "absolute";
          style.top = `0px`;
          style.left = "0";
          style.right = "0";
          style.width = "100%";
          style.height = `${vh - HEADER_H}px`;
        }
      }

      const within = Math.min(Math.max(0, scrollY - start), pinDuration);
      const animLen = pinDuration || getAnimLength();
      const progress = Math.min(1, within / animLen);
      // Compress full animation into first 80% of scroll
      const endClamp = 0.8;
      const p = Math.min(progress / endClamp, 1);

      // Camera pull-back with second phase:
      // Phase 1 (0..p1): scale 1.5 -> 1.0
      // Phase 2 (p1..1): scale 1.0 -> 0.9 and translateY 0 -> 200px
      const p1 = 0.8; // point in progress when scale hits 1
      const phase1 = Math.min(p, p1) / p1;
      const phase2 = p > p1 ? (p - p1) / (1 - p1) : 0;

      const scaleA = 1.5 - 0.5 * phase1; // 1.5 -> 1.0
      const scaleB = 1.0; // keep >= 1 in phase 2
      const scale = Math.max(1, phase2 > 0 ? scaleB : scaleA);
      const driftY = 200 * phase2; // px down during phase 2

      // Apply vertical offset on wrapper: translateY 5vh -> 0
      const offsetPx = (1 - p) * 0.05 * vh;
      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translateY(${offsetPx}px)`;
      }

      // Apply scale (and late translate) on the image only
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(${scale}) translateY(${driftY}px)`;
      }

      // Fade out the arrow as we approach endClamp (p -> 1)
      const fadeStart = 0.7; // start fading at 70% of the compressed timeline
      const fadeT = Math.max(0, Math.min(1, (p - fadeStart) / (1 - fadeStart)));
      const arrowOpacity = 1 - fadeT; // 1 -> 0
      if (arrowRef.current) {
        arrowRef.current.style.opacity = String(arrowOpacity);
      }

      // Staged reveal of content near the end of the scroll
      const revealStart = 0.5; // start revealing at 50% of the pin duration
      const t = Math.max(0, Math.min(1, (p - revealStart) / (1 - revealStart)));

      // Apply reveal to content container
      if (contentRef.current) {
        contentRef.current.style.opacity = String(t);
        const translatePx = (1 - t) * 24; // 24px -> 0px
        contentRef.current.style.transform = `translateY(${translatePx}px)`;
      }

      // Slight staggering for children (h1, text, cta)
      const childDelay = 0.08;
      const t1 = Math.max(
        0,
        Math.min(1, (t - childDelay * 0) / (1 - childDelay * 0))
      );
      const t2 = Math.max(
        0,
        Math.min(1, (t - childDelay * 1) / (1 - childDelay * 1))
      );
      const t3 = Math.max(
        0,
        Math.min(1, (t - childDelay * 2) / (1 - childDelay * 2))
      );

      if (h1Ref.current) {
        h1Ref.current.style.opacity = String(t1);
        h1Ref.current.style.transform = `translateY(${(1 - t1) * 16}px)`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = String(t2);
        textRef.current.style.transform = `translateY(${(1 - t2) * 16}px)`;
      }
      if (ctaRef.current) {
        ctaRef.current.style.opacity = String(t3);
        ctaRef.current.style.transform = `translateY(${(1 - t3) * 12}px)`;
      }
    };

    // initial compute
    compute();

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(compute);
    };
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(compute);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={pinRef} className={styles.pin}>
        <div ref={bgLayerRef} className={styles.bgLayer}>
          <Image
            ref={imgRef}
            className={styles.bg}
            src="/landing_indicator/bg1.png"
            alt=""
            fill
          />
          <button
            ref={arrowRef}
            type="button"
            aria-label="Scroll down"
            onClick={handleArrowClick}
            className={clsx(styles.arrowButton)}
          >
            <Arrow className={clsx(styles.arrow)} />
          </button>
        </div>
        <div className="container">
          <div ref={contentRef} className={styles.body}>
            <div className={clsx(styles.item, styles.item_top)}>
              <h1 ref={h1Ref} className={clsx(styles.h1, "h1")}>
                <span>
                  Индикатор часового типа для центровки валов VIBRO-LASER
                  INDICATOR
                </span>
              </h1>
              <div ref={textRef} className={styles.p}>
                <span>
                  Индикатор часового типа VIBRO-LASER — комплект для точной
                  центровки валов с электронными индикаторами и инклинометром
                </span>
                <a ref={ctaRef} className={styles.a} href="#contacts">
                  <span>Оставить заявку</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
