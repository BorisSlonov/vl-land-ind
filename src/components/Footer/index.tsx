import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Socials from "../Socials";
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <LogoIcon className={styles.logo} />
            </div>
            <div className={styles.leftBottom}>
              <p>г. Санкт-Петербург, ул. Захарьевская, дом 10 литера В</p>
              <p>info@vibro-laser.com</p>
              <p>8 (812) 900-50-51</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.links}>
              <Link href="/privacy-policy">Политика конфиденциальности</Link>
              <Link href="/personal-data">
                Согласие на обработку персональных данных
              </Link>
            </div>
            <div className={styles.studySocials}>
              <p className={styles.study}>Учитесь с УЦПК ВИБРО-ЛАЗЕР</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
