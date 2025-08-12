import Form from "./Form";
import styles from "./style.module.css";
import clsx from "clsx";

interface Props {
  className?: string;
}

const FeedbackForm = ({ className }: Props) => {
  return (
    <section className={clsx(styles.section, className)} id="contacts">
      <div className="container">
        <div className={styles.body}>
          <div className={clsx(styles.item, styles.itemFlex)}>
            <h2 className={clsx(styles.h2, "h2")}>
              Сотрудничать <br /> c VIBRO-LASER
            </h2>
            <p className={styles.subtitle}>
              Получите бесплатную консультацию инженера и индивидуальный подбор
              комплекта
            </p>
          </div>
          <div className={styles.item}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
