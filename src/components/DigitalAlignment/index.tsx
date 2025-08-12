import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";

const DigitalAlignment = () => {
  return (
    <section className={styles.sectuion} id="characteristics">
      <div className="container">
        <div className={styles.header}>
          <h2 className={clsx("h2", styles.h2)}>
            Простая и надёжная центровка
            <span className={styles.accColor}> с цифровым подходом</span>
          </h2>
          <p className={styles.subtitle}>
            <span className={styles.bold}>VIBRO-LASER INDICATOR</span>{" "}
            <span className={styles.op08}>
              — это новое решение для центровки валов с использованием
              электронных индикаторов и встроенного инклинометра. Всё, что нужно
              для работы — уже в комплекте: надёжный крепёж, точные датчики и
              удобное приложение.
            </span>
          </p>
        </div>
        <div className={styles.body}>
          <div className={clsx(styles.item, styles.item_1)}>
            <div className={clsx(styles.gridItem, styles.gridItem_1)}>
              <Image
                width={745}
                height={228}
                className={styles.img_1}
                src={"/landing_indicator/digital/1.png"}
                alt={"Электронные индикаторы"}
              />
              <p className={styles.gridTitle}>Электронные индикаторы</p>
              <span className={styles.gridSubtitle}>Тип датчика</span>
            </div>
            <div className={clsx(styles.gridItem, styles.gridItem_2)}>
              <p className={styles.gridTitle}>20–450 мм</p>
              <span className={styles.gridSubtitle}>Диаметр валов</span>
            </div>
            <div className={clsx(styles.gridItem, styles.gridItem_3)}>
              <p className={styles.gridTitle}>0,01 мм</p>
              <span className={styles.gridSubtitle}>Шаг измерения </span>
            </div>
            <div className={clsx(styles.gridItem, styles.gridItem_4)}>
              <p className={styles.gridTitle}>0,01°</p>
              <span className={styles.gridSubtitle}>Разрешение </span>
            </div>
            <div className={clsx(styles.gridItem, styles.gridItem_5)}>
              <p className={styles.gridTitle}>-20...+35 °C</p>
              <span className={styles.gridSubtitle}>Рабочая температура</span>
            </div>
            <div className={clsx(styles.gridItem, styles.gridItem_6)}>
              <p className={styles.gridTitle}>±0,02 мм</p>
              <span className={styles.gridSubtitle}>Погрешность </span>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item_2)}>
            <Image
              width={745}
              height={745}
              className={styles.img_2}
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
