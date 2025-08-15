import Accordion from "@/shared/ui/Accordion";
import clsx from "clsx";
import styles from "./styles.module.css";
import { faqData } from "./data";
const Faq = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.body}>
          <h2 className={clsx(styles.h2, "h2")}>Вопросы и ответы</h2>
          <Accordion data={faqData} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
