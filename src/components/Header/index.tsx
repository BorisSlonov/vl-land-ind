"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileBtnIcon from "./icons/mobileBtnIcon";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const [topScroll, setTopScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // фон – как только прокрутили >50 px
      setScrolled(currentScrollY > 50);

      // скрываем при прокрутке вниз (тоже после 50 px)
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setTopScroll(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setTopScroll(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={clsx(
          styles.headerWrap,
          scrolled ? styles.headerWrap_bg : undefined,
          topScroll ? styles.headerWrap_hide : undefined
        )}
      >
        <div className="container">
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <Link className={styles.logoLink} href={"/"}>
                <LogoIcon className={styles.logo} />
              </Link>
              <Navigation />
              <Link className={styles.phone} href={"tel:+7(981)898-16-66"}>
                +7 981 898 16 66
              </Link>
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className={styles.mobileMenuBtn}
              >
                <MobileBtnIcon />
              </button>
            </div>
            <MobileMenu
              showMenu={showMenu}
              closeMenuHandler={closeMenuHandler}
            />
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
