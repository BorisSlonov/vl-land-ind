import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { links } from "../LinksList/links";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav className={styles.navigation}>
      {links.map((item, i) => (
        <div
          key={i}
          className={styles.navItem}
          onMouseEnter={() => setActiveDropdown(i)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link href={item.link || "#"} className={styles.navLink}>
            {item.linkText}
          </Link>

          {item.subLinks && (
            <div
              className={`${styles.dropdownMenu} ${
                activeDropdown === i ? styles.show : ""
              }`}
            >
              <div className={styles.subLinksWrapper}>
                {item.subLinks.map((subItem, j) => (
                  <Link
                    key={j}
                    href={subItem.link}
                    className={styles.dropdownLink}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {subItem.linkText}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
