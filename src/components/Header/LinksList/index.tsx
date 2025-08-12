import React, { useState } from "react";
import styles from "./styles.module.css";
import LinkItem from "./LinkItem";
import { links } from "./links";

interface Props {
  closeMenuHandler: () => void;
}

const LinksList = ({ closeMenuHandler }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className={styles.linksList}>
      {links.map((item, index) => (
        <div key={index} className={styles.menuItem}>
          <LinkItem closeMenuHandler={closeMenuHandler} linkData={item} />
        </div>
      ))}
    </div>
  );
};

export default LinksList;
