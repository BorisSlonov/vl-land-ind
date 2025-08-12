import styles from "./styles.module.css";
import Card from "./Card";
import clsx from "clsx";

const Staff = [
  {
    id: 1,
    name: "Севастьянов Владимир Владимирович",
    position: "генеральный директор",
    img: "/team/sevastyanov.png",
    head: true,
    contacts: {
      email: "sevastyanov@vibro-laser.com",
      phone: "+7 (812) 900-50-51",
    },
  },
  {
    id: 2,
    name: "Абакшина Елена Владимировна",
    position: "коммерческий директор",
    img: "/team/abakshina.png",
    head: true,
    contacts: {
      email: "abakshinaev@vibro-laser.com",
      phone: ["+7 931 225-46-23"],
    },
  },
  {
    id: 3,
    name: "Шапиренко Константин Иванович",
    position: "руководитель лаборатории ЛНК",
    img: "/team/shapirenko.png",
    head: false,
    contacts: {
      email: "konstantin@vibro-laser.com",
      phone: ["+7 (812) 900-50-51", "+7 (999) 536-18-94"],
    },
  },
  {
    id: 4,
    name: "Крахмаль Константин Васильевич",
    position: "руководитель ЭЦ НК",
    head: false,
    img: "/team/krahmal.png",
    contacts: {
      email: "krahmalkv@vibro-laser.com",
      phone: ["+7 (812) 900-50-51", "+7 (953) 146-74-89"],
    },
  },
  {
    id: 5,
    name: "Олоничев Андрей Юрьевич",
    position: "преподаватель",
    head: false,
    img: "/team/olonichev.png",
    contacts: {
      email: "olonichev@vibro-laser.com",
      phone: ["+7 (812) 900-50-51", "+7 (911) 021 06 93"],
    },
  },
];

const Team = () => {
  const heads = Staff.filter((member) => member.head);
  const staffMembers = Staff.filter((member) => !member.head);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={clsx(styles.h2, "h2")}>Специалисты</h2>
        <div className={styles.body}>
          <div className={clsx(styles.staff, styles.heads)}>
            {heads.map((member) => (
              <div key={member.id} className={styles.item}>
                <Card {...member} />
              </div>
            ))}
          </div>

          <div className={clsx(styles.staff, styles.staff_mt20)}>
            {staffMembers.map((member) => (
              <div key={member.id} className={styles.item}>
                <Card {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
