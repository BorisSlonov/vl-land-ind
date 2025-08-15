import Form from "./Form";
import styles from "./style.module.css";
import clsx from "clsx";

interface Props {
  className?: string;
  requestSoft?: boolean;
}

const FeedbackForm = ({ className, requestSoft }: Props) => {
  return (
    <section
      className={clsx(
        styles.section,
        className,
        requestSoft && styles.requestSoft
      )}
      id="contacts"
    >
      <div className="container">
        <div className={styles.body}>
          <div className={clsx(styles.item, styles.itemFlex)}>
            {requestSoft ? (
              <h2 className={clsx(styles.h2, "h2")}>
                Сотрудничать <br /> c{" "}
                <span className={styles.accColor}>VIBRO-LASER</span>
              </h2>
            ) : (
              <h2 className={clsx(styles.h2, "h2")}>
                Купить индикатор часового типа
                <span className={styles.accColor}> VIBRO-LASER</span>
              </h2>
            )}

            <p className={styles.subtitle}>
              {requestSoft
                ? `Отправьте запрос и получите файл
для установки приложения на указанную вами электронную почту`
                : `Оставьте контакты и получите персональное предложение с учетом вашей задачи и сроков поставки`}
            </p>
          </div>
          <div className={styles.item}>
            <Form requestSoft={requestSoft} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
