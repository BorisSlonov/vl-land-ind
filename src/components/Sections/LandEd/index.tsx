import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.css";
import ArrowBtn from "./ArrowBtn";
import LogoEd from "./LogoEd";

type ProgramItem = { code?: string; text: string };
type ProgramCard = {
  badge?: string; // "2 программы" и т.п.
  title: string; // Заголовок карточки
  theme?: "light" | "dark"; // Вариант фона
  items?: ProgramItem[]; // Список
  kind?: "programs" | "license";
};

const CARDS: ProgramCard[] = [
  {
    kind: "programs",
    badge: "2 программы",
    title: "ТОиР и управление",
    theme: "light",
    items: [
      {
        code: "VL–09",
        text: "«Специалист по техническому обслуживанию подшипниковых узлов»",
      },
      { code: "VL–11", text: "«Эффективное управление системой ТОиРО»" },
    ],
  },
  {
    kind: "license",
    title: "Государственная лицензия",
  },
  {
    kind: "programs",
    badge: "4 программы",
    title: "Вибродиагностика и центровка",
    theme: "dark",
    items: [
      {
        code: "VL–01",
        text: "«Специалист по центровке и монтажу оборудования»",
      },
      {
        code: "VL–02",
        text: "«Специалист по балансировке роторов на месте эксплуатации и на балансировочных станках»",
      },
      {
        code: "VL–03",
        text: "«Вибродиагностический метод НК. Определение состояния машин и их узлов» и услуги по аттестации на I и II квалификационный уровень по ВД",
      },
      {
        code: "VL–05",
        text: "«Вибродиагностика и виброналадка (центровка и балансировка)»",
      },
    ],
  },
  {
    kind: "programs",
    badge: "5 программ",
    title: "Методы неразрушающего контроля",
    theme: "dark",
    items: [
      {
        code: "VL–04",
        text: "«Тепловой метод НК. Тепловизионный и пирометрический контроль» и услуги по аттестации на I и II квалификационный уровень по ТК",
      },
      {
        code: "VL–06",
        text: "«Визуальный и измерительный метод неразрушающего контроля» и услуги по аттестации на I и II квалификационный уровень по ВиК",
      },
      {
        code: "VL–07",
        text: "«Метод неразрушающего контроля проникающими веществами» и услуги по аттестации на I и II квалификационный уровень по ПВК",
      },
      {
        code: "VL–08",
        text: "«Магнитный метод неразрушающего контроля» и услуги по аттестации на I и II квалификационный уровень по МК",
      },
      {
        code: "VL–10",
        text: "«Ультразвуковой метод неразрушающего контроля» и услуги по аттестации на I и II квалификационный уровень по УЗК",
      },
    ],
  },
];

export default function UcpkSection() {
  return (
    <section
      className={styles.section}
      id="education-center"
      aria-labelledby="ucpk-title"
    >
      <div className="container">
        <div className={styles.grid}>
          {/* Левая часть */}
          <div className={styles.left}>
            <header className={styles.leftHead}>
              <h2 id="ucpk-title" className={styles.kicker}>
                УЦПК
                <span className={styles.brand}>ВИБРО-ЛАЗЕР</span>
              </h2>
              <p className={styles.lead}>
                Это профессиональные преподаватели{" "}
                <span style={{ whiteSpace: "nowrap" }}>с огромным</span>{" "}
                практическим опытом, база необходимого оборудования и материалы
                для успешного освоения
                <span className={styles.nowrap}> программы курса</span>
              </p>
            </header>

            <div className={styles.leftBottom}>
              <LogoEd />
              <a
                className={styles.cta}
                href="https://vibrolaser-edu.pro/"
                target="_blank"
              >
                Обучение <ArrowBtn />
              </a>
            </div>
          </div>

          {/* Правая часть */}
          <div className={styles.right}>
            {CARDS.map((card, i) =>
              card.kind === "license" ? (
                <article
                  key={`card-${i}`}
                  className={clsx(styles.card, styles.cardLicense)}
                >
                  <div className={styles.cardLicense__body}>
                    <div className={styles.cardLicense__text}>
                      <h3
                        className={clsx(
                          styles.card__title,
                          styles.cardLicense__title
                        )}
                      >
                        {card.title}
                      </h3>
                      <div className={styles.cardLicense__footer}>
                        <span className={styles.cardLicense__caption}>
                          На образовательную деятельность
                        </span>
                        <span className={styles.cardLicense__num}>
                          № Л035–01271–78/01451179
                        </span>
                      </div>
                    </div>
                    <div className={styles.cardLicense__qr}>
                      <Image
                        className={styles.qr}
                        src={"/qr_ed.png"}
                        width={190}
                        height={190}
                        alt="куар уц"
                      />
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={`card-${i}`}
                  className={clsx(
                    styles.card,
                    styles.cardPrograms,
                    card.theme === "light" ? styles.cardLight : styles.cardDark
                  )}
                >
                  {card.badge && (
                    <span className={styles.card__badge}>{card.badge}</span>
                  )}
                  <h3 className={styles.card__title}>{card.title}</h3>
                  {card.items && (
                    <ul className={styles.card__list}>
                      {card.items.map((it, idx) => (
                        <li key={idx} className={styles.card__item}>
                          {it.code && (
                            <strong className={styles.card__code}>
                              {it.code}
                            </strong>
                          )}
                          <span className={styles.card__text}>{it.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
