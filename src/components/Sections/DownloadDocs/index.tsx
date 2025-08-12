import React from "react";
import styles from "./style.module.css";
import Arrow from "@/shared/ui/icons/arrowIcon";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import clsx from "clsx";
import Link from "next/link";
import PdfIcon from "@/shared/ui/icons/pdfIcon";

const DownloadDocs = () => {
  const downloadLinks = [
    {
      text: "Свидетельство об аттестации УЦПК",
      link: "/docs/Свидетельство_об_аттестации_УЦПК_20_05_2025.pdf",
    },
    {
      text: "Расписание 2025  II ПОЛУГОДИЕ",
      link: "/docs/Расписание_2025(2_полугодие).pdf",
    },
    {
      text: "Учредительные документы",
      link: "/docs/Учредительные_документы.zip",
    },
    {
      text: "Программа по курсу VL-01",
      link: "/docs/ПРОГРАММА_КУРСА_VL-01.pdf",
    },
  ];

  return (
    <section className={styles.section} id="documents">
      <div className="container">
        <div className={styles.body}>
          <div className={styles.item}>
            <InViewStyle
              initialClass="bottomToTop"
              animationClass="visible"
              triggerOnce
            >
              <h2 className={clsx("h2", styles.h2)}>Скачай и будь в курсе</h2>
            </InViewStyle>
            <InViewStyle
              initialClass="leftToRightUp"
              animationClass="visible"
              triggerOnce
            >
              <Arrow className={styles.arrowBig} />
            </InViewStyle>
            <InViewStyle
              initialClass="bottomToTop"
              animationClass="visible"
              triggerOnce
            >
              <p className={styles.h2Subtitle}>
                Вы можете ознакомиться с ближайшим расписанием курсов и выбрать
                тот, который подойдёт именно вам.
              </p>
            </InViewStyle>
          </div>
          <div className={styles.item}>
            <ul className={styles.ul}>
              {downloadLinks &&
                downloadLinks.map((item, index) => (
                  <li key={index} className={styles.li}>
                    <InViewStyle
                      initialClass="bottomToTop"
                      animationClass="visible"
                      triggerOnce
                      className={clsx(
                        styles.liItem,
                        styles[`liItem${index + 1}`]
                      )}
                    >
                    <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className={clsx(styles.a, "transparentToLighBtn")}
>
  {item.text}
  <PdfIcon className={styles.arrowLink} />
</a>
                    </InViewStyle>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadDocs;
