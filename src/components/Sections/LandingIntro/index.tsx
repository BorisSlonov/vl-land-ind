import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "next/link";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import Socials from "@/components/Socials";
import PdfIcon from "@/shared/ui/icons/pdfIcon";

const LandingIntro = () => {
  const programs = [
    { text: "Центровка", link: "/docs/VL-01_Центровка.pdf" },
    { text: "Вибродиагностика", link: "/docs/VL-03_Вибродиагностика.pdf" },
    { text: "Тепловидение", link: "/docs/VL-04_Тепловидение.pdf" },
    { text: "Балансировка", link: "/docs/VL-02_Балансировка.pdf" },
    { text: "Виброналадка", link: "/docs/VL-05_Виброналадка.pdf" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.body}>
          <div className={clsx(styles.item, styles.item_top)}>
            <h1 className={clsx(styles.h1, "h1")}>
              <InViewStyle
                initialClass="bottomToTop"
                animationClass="visible"
                triggerOnce
                className={clsx(styles.item, styles.item1)}
              >
                <span>VIBRO-LASER INDICATOR</span>
              </InViewStyle>
            </h1>
            <div className={styles.p}>
              <InViewStyle
                initialClass="bottomToTop"
                animationClass="visible"
                triggerOnce
                className={clsx(styles.item, styles.item1)}
              >
                <span>
                  Максимально удобный и доступный базовый комплект для центровки
                  валов
                </span>
              </InViewStyle>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item_bot)}>
            <a className={styles.a} href="#contacts">
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
