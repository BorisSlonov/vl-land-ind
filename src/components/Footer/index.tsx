import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Socials from "../Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <Image
                className={styles.logo}
                width={236}
                height={40}
                alt="логотип тек-ноу"
                src={"/landing_indicator/logo_tk.svg"}
              />
              <a
                href="https://tek-know.ru"
                target="_blank"
                className={styles.domain}
              >
                tek-know.ru
              </a>
            </div>
            <div className={styles.leftBottom}>
              <p>г. Санкт-Петербург, пр. Елизарова, д. 31, к.2 литера А</p>
              <p>+7 812 324-56-27</p>
              <p>+7 812 324-56-28</p>
              <p>info@tek-know.ru</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.links}>
              <Link href="/privacy-policy">Политика конфиденциальности</Link>
              <Link href="/personal-data">Пользовательское соглашение</Link>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
