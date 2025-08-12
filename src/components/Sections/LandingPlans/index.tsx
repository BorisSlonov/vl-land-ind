'use client'
import React, { useState } from "react";
import styles from "./styles.module.css"
import { InViewStyle } from "@/shared/ui/InViewStyle";
import clsx from "clsx";


const trainingData = [
    {
        title: "Плановое обучение",
        label: "по расписанию",
        description: "Планируйте обучение заранее",
        items: [
            "Готовая программа, утвержденная Комитетом по образованию",
            "Проведение обучения на территории учебного центра в Санкт-Петербурге",
            "Система контроля и мониторинга качества знаний — входное и выходное электронное тестирование, практический экзамен",
            "Практические занятия на учебном оборудовании, имитирующем реальные промышленные агрегаты"
        ],
    },
    {
        title: "КОРПОРАТИВНОЕ обучение",
        label: "от 2-х дней",
        description: "Обучение Ваших сотрудников с учетом целей и задач компании",
        items: [
            "Разработка программы обучения по ТЗ",
            "Адаптация программы обучения",
            "Разработка формата подачи материала",
            "Индивидуальное обучение слушателей",
            "Проведение обучения на территории учебного центра в г. Санкт-Петербурге",
            "Система контроля и мониторинга качества знаний — входное и выходное электронное тестирование, практический экзамен",
            "Практические занятия на учебном оборудовании, имитирующем реальные промышленные агрегаты"
        ],
    },
    {
        title: "ВЫЕЗДНОЕ обучение",
        label: "от 2-х дней",
        description: "Подготовка специалистов без отрыва от производства",
        items: [
            "Разработка программы обучения по ТЗ",
            "Адаптация программы обучения",
            "Экономия средств — нет затрат на командировочные расходы сотрудников",
            "Экономия времени — обучение без отрыва от производства",
            "Система контроля и мониторинга качества знаний — входное и выходное электронное тестирование, практический экзамен",
            "Практические занятия в реальных условиях эксплуатации оборудования Заказчика"
        ],
    },
];


interface StyleObject {
    transform: string;
    transition: string;
}

const LandingPlans = () => {

    const [stylesArray, setStylesArray] = useState<{ [key: number]: StyleObject }>({});


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        const item = e.currentTarget;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / rect.height) * 20;
        const rotateY = -(x / rect.width) * 20;

        setStylesArray((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`,
                transition: 'transform 0.6s ease',
            },
        }));
    };

    const handleMouseLeave = (index: number) => {
        setStylesArray((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: 'none',
                transition: 'transform 0.6s ease',
            },
        }));
    };


    return (
        <section className={styles.section} id="types-of-training">
            <div className="container">
                <InViewStyle initialClass="leftToRight" animationClass="visible" triggerOnce>
                    <h2 className="h2 h2_mb24">
                        Мы ПРОВОДИМ
                    </h2>
                </InViewStyle>
                <div className={styles.body}>
                    {trainingData.map((training, index) => (
                        <div
                            key={index}
                            style={stylesArray[index] || {}}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={styles.animeCard}
                        >
                            <InViewStyle
                                key={index}
                                initialClass="bottomToTop"
                                animationClass="visible"
                                triggerOnce
                                className={clsx(styles.item, styles[`item${index + 1}`])}

                            >
                                <h3 className={styles.h3}>{training.title}</h3>
                                <span className={styles.label}>{training.label}</span>
                                <h4 className={styles.h4}>{training.description}</h4>
                                <ul className={styles.ul}>
                                    {training.items.map((item, itemIndex) => (
                                        <li className={styles.li} key={itemIndex}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </InViewStyle>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LandingPlans