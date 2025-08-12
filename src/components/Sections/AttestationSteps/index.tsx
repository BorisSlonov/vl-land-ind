import clsx from "clsx";
import styles from "./styles.module.css";

const AttestationSteps = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={clsx(styles.h2, "h2")}>
          Порядок прохождения аттестации/сертификации в экзаменационном центре
          неразрушающего контроля
        </h2>
        <div className={styles.body}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <span className={styles.num}>1.</span>
              <p>
                Направление заявителем в ООО УЦПК «ВИБРО-ЛАЗЕР»
                <a className={styles.link} href="/docs/Заявка.docx" download>
                  {" "}
                  заявки{" "}
                </a>
                на имя генерального директора ООО «УЦПК «ВИБРО-ЛАЗЕР»
              </p>
            </li>
            <li className={styles.li}>
              <span className={styles.num}>2.</span>
              Регистрация заявки в ЭЦ НК
            </li>
            <li className={styles.li}>
              <span className={styles.num}>3.</span>
              Рассмотрение заявки и возможности аттестации/сертификации
              кандидата
            </li>
            <li className={styles.li}>
              <span className={styles.num}>4.</span>
              Оформление договора между ООО УЦПК «ВИБРО-ЛАЗЕР» и заявителем
            </li>
            <li className={styles.li}>
              <div className={styles.liHeader}>
                <span className={styles.num}>5.</span>
                Направление заявителем в Экзаменационный центр неразрушающего
                контроля (ЭЦ НК) пакета документов (на имя руководителя НОАП и
                руководителя ЭЦ НК) с приложением необходимых документов (сканы
                или оригиналы):
              </div>
              <ul className={styles.subUl}>
                <li className={styles.subLi}>
                  Заявка на аттестацию, подписанная руководителем или
                  уполномоченным лицом с печатью организации. Отдельно на каждый
                  метод НК.
                  <a
                    className={styles.link}
                    href="/docs/Заявка_на_аттестацию.docx"
                    download
                  >
                    {" "}
                    Скачать бланк
                  </a>
                </li>
                <li className={styles.subLi}>
                  Заявка на ПБ, подписанная руководителем или уполномоченным
                  лицом с печатью организации.
                  <a
                    className={styles.link}
                    href="/docs/Заявка_ПБ.docx"
                    download
                  >
                    {" "}
                    Скачать бланк
                  </a>
                </li>
                <li className={styles.subLi}>
                  Справка об опыте практической деятельности по заявленному
                  методу/виду испытаний.
                  <a
                    className={styles.link}
                    href="/docs/Справка_об_опыте_практической_деятельности.docx"
                    download
                  >
                    {" "}
                    Скачать бланк
                  </a>
                </li>
                <li className={styles.subLi}>
                  Две цветные матовые фотографии 3х4
                </li>
                <li className={styles.subLi}>
                  Документ об образовании (копия)
                </li>
                <li className={styles.subLi}>
                  Удостоверение специалиста НК, если есть (копия)
                </li>
                <li className={styles.subLi}>
                  Удостоверения о проверке знаний правил безопасности
                  Ростехнадзора в качестве специалиста НК (копия)
                </li>
                <li className={styles.subLi}>
                  Медицинское заключение (справка) о состоянии зрения сроком
                  действия на 1 год (копия)
                </li>
              </ul>
            </li>
            <li className={styles.li}>
              <span className={styles.num}>6.</span>
              Прибытие кандидатов в ЭЦ НК с необходимым комплектом документов
            </li>
            <li className={styles.li}>
              <span className={styles.num}>7.</span>
              Получение оригиналов представленных кандидатом документов
            </li>
          </ul>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.liHeader}>
                <span className={styles.num}>8.</span>
                Проведение практического экзамена:
              </div>
              <ul className={styles.subUl}>
                <li className={styles.subLi}>
                  Сдача кандидатами теоретического экзамена по средствам
                  тестирования, согласованного с НОАП и советующего требованиям:
                  — СДАНК-02-2020 «Правила аттестации персонала в области
                  неразрушающего контроля». Общий, специальный экзамен и экзамен
                  по Правилам Безопасности (ПБ) — ГОСТ Р ИСО 9712-2019 «Контроль
                  неразрушающий. Квалификация и сертификация персонала». Общий и
                  специальный экзамен
                </li>
                <li className={styles.subLi}>
                  Сдача практического экзамена проводится по средствам контроля
                  экзаменационных образов согласно установленным критериям
                </li>
              </ul>
            </li>
            <li className={styles.li}>
              <span className={styles.num}>9.</span>
              Формирование личных дел кандидатов и направление в НОАП
            </li>
            <li className={styles.li}>
              <span className={styles.num}>10.</span>
              Рассмотрение полученных НОАП документов. Принятие решения об
              аттестации/сертификации (или отказе в аттестации/сертификации)
            </li>
            <li className={styles.li}>
              <span className={styles.num}>11.</span>
              Оформление НОАП квалификационных удостоверений. Направление
              проекта квалификационного удостоверения в ЭЦ НК (по эл. почте) на
              согласование специалисту. Оформление справок о сдаче ПБ
              (удостоверение о сдаче ПБ оформляется в течение месяца)
            </li>
            <li className={styles.li}>
              <span className={styles.num}>12.</span>
              Выдача сотрудником ЭЦ НК квалификационных удостоверений
              специалистам. Выдача справки о сдаче ПБ (удостоверение по ПБ
              предоставляется в течение месяца)
            </li>
            <li className={styles.li}>
              <span className={styles.num}>13.</span>
              Предоставление заявителю отчетных документов
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AttestationSteps;
