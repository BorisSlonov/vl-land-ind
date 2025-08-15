"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import DownloadIcon from "./DownloadIcon";
import { useModal } from "@/app/context/ModalContext";
import FeedbackForm from "@/components/FeedbackForm";

const VibroLaserIndicator: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section className={styles.section} id="app">
      <div className={"container"}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Left Column */}
          <div className={styles.topLeft}>
            <h2 className={styles.title}>
              <span>ПРИЛОЖЕНИЕ </span>
              <span className={styles.accColor}>VIBRO-LASER INDICATOR</span>
            </h2>
            <p className={styles.description}>
              ПО VIBRO-LASER выполняет высокоточный расчет угла излома и
              линейного смещения валов, обеспечивая надежные результаты
              центровки
            </p>
            <p className={styles.description2}>
              Чтобы установить приложение на своё устройство, отправьте запрос
              на получение установочного файла и мы оперативно отправим его вам
            </p>
            <a
              onClick={() => openModal(() => <FeedbackForm requestSoft />)}
              className={styles.downloadLink}
            >
              Отправить запрос{" "}
              <span className={styles.downloadIcon}>
                <DownloadIcon />
              </span>
            </a>
          </div>
          {/* Right Column */}
          <div className={styles.topRight}>
            <Image
              width={900}
              height={800}
              src="/landing_indicator/app.png"
              alt="Vibro-LASER Indicator"
              className={styles.image}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.bottomLeft}>
            Интерфейс предоставляет оператору пошаговые инструкции, которые
            позволяют точно и без ошибок пройти весь процесс центровки
          </p>
          <p className={styles.bottomRight}>
            Рекомендуется для регулярного использования ремонтными службами на
            предприятиях различных отраслей
          </p>
        </div>
      </div>
    </section>
  );
};

export default VibroLaserIndicator;
