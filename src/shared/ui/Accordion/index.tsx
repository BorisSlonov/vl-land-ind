"use client";
import {useState} from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import {InViewStyle} from "../InViewStyle";

interface AccordionProps {
    data: {question: string; answer: string}[];
}

const Accordion = ({data}: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.body}>
            {data.map((item, index) => (
                <div key={index} className={styles.item}>
                    <h3
                        className={clsx(styles.h3, {
                            [styles.active]: openIndex === index,
                        })}
                        onClick={() => toggleAccordion(index)}
                    >
                        <InViewStyle
                            as="span"
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            {item.question}
                        </InViewStyle>
                    </h3>
                    <p
                        className={clsx(styles.p, {
                            [styles.pOpen]: openIndex === index,
                        })}
                        dangerouslySetInnerHTML={{
                            __html: item.answer,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Accordion;
