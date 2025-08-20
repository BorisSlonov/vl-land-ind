"use client";

import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import SpecsToggle from "@/components/DigitalAlignment/SpecsToggle";

const DigitalAlignment = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const [img1Offset, setImg1Offset] = useState(0);
  const [img2Offset, setImg2Offset] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  useEffect(() => {
    const handle = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const sectionCenterDelta = viewportH / 2 - (rect.top + rect.height / 2);
      const normalized = sectionCenterDelta / viewportH; // ~[-1,1]
      const offset1 = Math.max(-20, Math.min(20, normalized * 20));
      const offset2 = Math.max(-15, Math.min(15, normalized * 15));
      setImg1Offset(offset1);
      setImg2Offset(offset2);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <section
      ref={sectionRef as any}
      className={styles.sectuion}
      id="characteristics"
    >
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={clsx("h2", styles.h2)}>
              Простая и надёжная центровка
              <span className={styles.accColor}> с цифровым подходом</span>
            </h2>
            <p className={styles.subtitle}>
              <span className={styles.bold}>VIBRO-LASER INDICATOR</span>{" "}
              <span className={styles.op08}>
                — современное решение для точной центровки валов с применением
                электронных индикаторов и встроенного инклинометра. Эта цифровая
                система обеспечивает быстрое и точное выравнивание валов, снижая
                износ оборудования и повышая срок его службы. В комплект входит
                надёжный крепёж, высокоточные датчики и удобное приложение для
                обработки результатов.
              </span>
            </p>
          </div>
          <div className={styles.headerRight}>
            <SpecsToggle
              showAll={showAllSpecs}
              onShowAll={() => setShowAllSpecs(true)}
              onBack={() => setShowAllSpecs(false)}
            />
          </div>
        </div>
        <div className={styles.body}>
          <div
            className={clsx(
              styles.item,
              styles.item_1,
              showAllSpecs && styles.item_1_showAll
            )}
          >
            {showAllSpecs ? (
              <div className={clsx(styles.gridItem, styles.gridItem_7)}>
                <p className={styles.specsTitle}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
                <div className={styles.specsTable}>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>Диаметр валов</span>
                    <span className={styles.specValue}>20–500 мм</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>
                      Предел допускаемой основной погрешности
                    </span>
                    <span className={styles.specValue}>±0,02</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>Диапазон измерений</span>
                    <span className={styles.specValue}>0–12,5 мм</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>
                      Разрешающая способность
                    </span>
                    <span className={styles.specValue}>0,01 мм</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>
                      Условия эксплуатации
                    </span>
                    <span className={styles.specValue}>-20…+50 °С</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>Число индикаторов</span>
                    <span className={styles.specValue}>2 шт</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>
                      Тип измерительного датчика (в зависимости от комплекта)
                    </span>
                    <span className={styles.specValue}>
                      Стрелочный индикатор / Электронный индикатор
                    </span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>
                      Габаритные размеры системы в кейсе
                    </span>
                    <span className={styles.specValue}>400 × 240 × 140 мм</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specName}>Вес системы в кейсе</span>
                    <span className={styles.specValue}>2,5 кг</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={clsx(styles.gridItem, styles.gridItem_1)}>
                  <Image
                    ref={img1Ref as any}
                    width={745}
                    height={228}
                    className={styles.img_1}
                    style={{ transform: `translateY(${img1Offset}px)` }}
                    src={"/landing_indicator/digital/1.png"}
                    alt={"Электронные индикаторы"}
                  />
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Электронные индикаторы
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Тип датчика
                  </InViewStyle>
                </div>
                <div className={clsx(styles.gridItem, styles.gridItem_2)}>
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    20–500 мм
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Диаметр валов
                  </InViewStyle>
                </div>
                <div className={clsx(styles.gridItem, styles.gridItem_3)}>
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    0,01 мм
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Шаг измерения
                  </InViewStyle>
                </div>
                <div className={clsx(styles.gridItem, styles.gridItem_4)}>
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    0–12,5 мм
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Диапазон измерений
                  </InViewStyle>
                </div>
                <div className={clsx(styles.gridItem, styles.gridItem_5)}>
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    -20...+50 °C
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Рабочая температура
                  </InViewStyle>
                </div>
                <div className={clsx(styles.gridItem, styles.gridItem_6)}>
                  <InViewStyle
                    as="p"
                    className={styles.gridTitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    ±0,02 мм
                  </InViewStyle>
                  <InViewStyle
                    as="span"
                    className={styles.gridSubtitle}
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                  >
                    Погрешность
                  </InViewStyle>
                </div>
              </>
            )}
          </div>
          <div className={clsx(styles.item, styles.item_2)}>
            <Image
              ref={img2Ref as any}
              width={745}
              height={745}
              className={styles.img_2}
              style={{ transform: `translateY(${img2Offset}px)` }}
              src={"/landing_indicator/digital/2.png"}
              alt={"центровка вала"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAlignment;
