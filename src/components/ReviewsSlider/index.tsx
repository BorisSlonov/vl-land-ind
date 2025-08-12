"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.css";
import clsx from "clsx";
import ArrowIcon from "@/shared/ui/icons/arrowIcon";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import Image from "next/image";

const data = [
  {
    title: "ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ УГМК",
    descr: "Пуско-наладка учебного комплекса",
    label: "Благодарность",
    imgSrc: "/reviews/1.webp",
  },
  {
    title: "Профессионалы 2023",
    descr: "Промышленная механика и монтаж",
    label: "Сертификат",
    imgSrc: "/reviews/2.webp",
  },
  {
    title: "АО «АПАТИТ»",
    descr: "Организация и проведение информационно-консультационных услуг",
    label: "Благодарность",
    imgSrc: "/reviews/3.webp",
  },
  {
    title: "ООО «ИНГК-Промтех»",
    descr: "Проведение обучения специалистов",
    label: "Благодарность",
    imgSrc: "/reviews/4.webp",
  },
  {
    title: "ООО «Разрез «Березовский»",
    descr:
      "Проведение обучения специалистов по специально составленной индивидуальной программе",
    label: "Благодарность",
    imgSrc: "/reviews/5.webp",
  },

  {
    title: "АО «ХайдельбергЦемент Волга»",
    descr: "Проведение обучения специалистов",
    label: "Благодарность",
    imgSrc: "/reviews/6.webp",
  },

  {
    title: "АО «Узбекнефтегаз»",
    descr: "Проведение обучения специалистов",
    label: "Благодарность",
    imgSrc: "/reviews/7.webp",
  },

  {
    title: "«Транснефть Восток»",
    descr: "Проведение курса повышения квалификации",
    label: "Благодарность",
    imgSrc: "/reviews/8.webp",
  },

  {
    title: "ООО «НПО «ПермНефтеГаз»",
    descr: "Проведение курса повышения квалификации",
    label: "Благодарность",
    imgSrc: "/reviews/9.webp",
  },

  {
    title: "ООО «Пермские насосы»",
    descr: "Обучение по курсу «Вибродиагностика»",
    label: "Благодарность",
    imgSrc: "/reviews/10.webp",
  },

  {
    title: "ООО «НК КРОН»",
    descr: "Обучение по курсу «Вибродиагностика»",
    label: "Благодарность",
    imgSrc: "/reviews/11.webp",
  },

  {
    title: "ООО «ЛУКОЙЛ-Нижегороднефтеоргсинтез»",
    descr: "Проведение учебного курса",
    label: "Благодарность",
    imgSrc: "/reviews/12.webp",
  },

  {
    title:
      "Х международный конкурс педагогического творчества «Ступени мастерства» ",
    descr: "Выступление на стратегической сессии",
    label: "Благодарность",
    imgSrc: "/reviews/13.webp",
  },

  {
    title: "БПО «Ремсервис»",
    descr: "Проведение курса повышения квалификации",
    label: "Благодарность",
    imgSrc: "/reviews/14.webp",
  },

  {
    title: "ГБПОУ РК «Керченский политехнический колледж»",
    descr: "Проведение обучающего семинара",
    label: "Благодарность",
    imgSrc: "/reviews/15.webp",
  },

  {
    title: "«БРАТСКИЙ ИНДУСТРИАЛЬНО-МЕТАЛЛУРГИЧЕСКИЙ ТЕХНИКУМ»",
    descr: "Промышленная механика и монтаж",
    label: "Благодарность",
    imgSrc: "/reviews/16.webp",
  },

  {
    title: "«МЕЖДУНАРОДНАЯ СИСТЕМА СЕРТИФИКАЦИИ»",
    descr: "Сертификат соответствия аудитора No MSS.RU.06114.23.A3",
    label: "Сертификат",
    imgSrc: "/reviews/17.webp",
  },

  {
    title: "«Аксуский высший многопрофильный колледж имени Жаяу Мусы»",
    descr:
      "Проведение обучающего семинара «Вибрационный контроль состояния и диагностика»",
    label: "Благодарность",
    imgSrc: "/reviews/18.webp",
  },

  {
    title: "«МОЛОДЫЕ ПРОФЕССИОНАЛЫ»",
    descr: "Промышленная механика и монтаж",
    label: "Диплом",
    imgSrc: "/reviews/19.webp",
  },
];

const ReviewsSlider = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSlideClick = (imgSrc: string) => {
    if (window.innerWidth >= 768) {
      setCurrentImage(imgSrc);
      setShowPopup(true);
      setIsAnimating(true);
      setTimeout(() => setPopupOpen(true), 10);
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
    setAnimateOut(true);
  };

  const handleTransitionEnd = () => {
    if (!popupOpen && animateOut) {
      setShowPopup(false);
      setAnimateOut(false);
      setCurrentImage("");
    } else if (isAnimating) {
      setIsAnimating(false);
    }
  };

  return (
    <div className={styles.sliderContainer} id="reviews">
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Mousewheel]}
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          prevEl: ".reviews-button-prev",
          nextEl: ".reviews-button-next",
        }}
        breakpoints={{
          1440: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <InViewStyle
              initialClass="bottomToTop"
              animationClass="visible"
              triggerOnce
              className={styles.slideContent}
            >
              <div
                className={styles.slideTxt}
                onClick={() => handleSlideClick(slide.imgSrc)}
              >
                <p className={styles.slideTitle}>{slide.title}</p>
                <p className={styles.slideDescr}>{slide.descr}</p>
                <span className={styles.slideLabel}>{slide.label}</span>
              </div>
              <Image
                src={slide.imgSrc}
                alt="Просмотр документа"
                width={700}
                height={1000}
                className={styles.img}
                onClick={() => handleSlideClick(slide.imgSrc)}
              />
            </InViewStyle>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigationButtons}>
        <button
          className={clsx(
            styles.reviewsBtn,
            styles.reviewsBtnPrev,
            "reviews-button-prev"
          )}
        >
          <ArrowIcon className={clsx(styles.arrow, styles.arrowLeft)} />
        </button>
        <button
          className={clsx(
            styles.reviewsBtn,
            styles.reviewsBtnNext,
            "reviews-button-next"
          )}
        >
          <ArrowIcon className={clsx(styles.arrow, styles.arrowRight)} />
        </button>
      </div>
      {showPopup && (
        <div
          className={clsx(
            styles.popupOverlay,
            animateOut
              ? styles.fadeOut
              : popupOpen
              ? styles.fadeIn
              : styles.hidden
          )}
          onClick={closePopup}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className={styles.popupContent}>
            <Image
              src={currentImage}
              alt="Просмотр документа"
              width={700}
              height={1000}
              className={styles.popupImage}
            />
            <button
              className={styles.closeButton}
              onClick={closePopup}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSlider;
