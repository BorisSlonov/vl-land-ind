import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  position: string;
  head: boolean;
  img: string;
  contacts: {
    phone: string | string[];
    email: string;
  };
}

const Card = ({ id, name, position, img, head, contacts }: Props) => {
  const renderPhones = () => {
    if (Array.isArray(contacts.phone)) {
      return contacts.phone.map((phone, index) => (
        <a key={index} href={`tel:${phone}`} className={styles.link}>
          {phone}
        </a>
      ));
    }
    return (
      <a href={`tel:${contacts.phone}`} className={styles.link}>
        {contacts.phone}
      </a>
    );
  };

  return (
    <div className={clsx(styles.card, { [styles.headCard]: head })}>
      <div className={styles.imageContainer}>
        <Image
          className={clsx(styles.img, styles[`img_${id}`])}
          src={img}
          alt={name}
          width={300}
          height={420}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>

        <div className={styles.contacts}>
          <a href={`mailto:${contacts.email}`} className={styles.link}>
            {contacts.email}
          </a>

          <div className={styles.phones}>{renderPhones()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
