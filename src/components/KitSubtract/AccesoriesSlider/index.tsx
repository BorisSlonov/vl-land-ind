"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.css";
import clsx from "clsx";
import ArrowIcon from "@/shared/ui/icons/arrowIcon";
import Image from "next/image";

type Accessory = {
  title: string;
  qty: string;
  img: string;
};

const accessories: Accessory[] = [
  {
    title: "Удлинительная цепь",
    qty: "2 шт.",
    img: "/landing_indicator/kit/accessories/1.png",
  },
  {
    title: "Регулировочные пластины",
    qty: "2 шт.",
    img: "/landing_indicator/kit/accessories/2.png",
  },
  {
    title: "Комплект стоек",
    qty: "4 шт.",
    img: "/landing_indicator/kit/accessories/3.png",
  },
  {
    title: "Магнитная стойка",
    qty: "1 шт.",
    img: "/landing_indicator/kit/accessories/4.png",
  },
];

const AccesoriesSlider = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headerRow}>
          <h2 className={clsx("h2")}>аксессуары</h2>
          <div className={styles.navigationButtons}>
            <button
              className={clsx(styles.btn, styles.btnPrev, "acc-btn-prev")}
            >
              <ArrowIcon className={clsx(styles.arrow, styles.arrowLeft)} />
            </button>
            <button
              className={clsx(styles.btn, styles.btnNext, "acc-btn-next")}
            >
              <ArrowIcon className={clsx(styles.arrow, styles.arrowRight)} />
            </button>
          </div>
        </div>
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={4}
          navigation={{ prevEl: ".acc-btn-prev", nextEl: ".acc-btn-next" }}
          breakpoints={{
            1440: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {accessories.map((a, i) => (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <div className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={a.img}
                    alt={a.title}
                    width={320}
                    height={220}
                    loading="eager"
                    className={styles.cardImg}
                  />
                </div>
                <p className={styles.cardTitle}>{a.title}</p>
                <p className={styles.cardQty}>{a.qty}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AccesoriesSlider;
