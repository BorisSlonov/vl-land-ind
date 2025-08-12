import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";

interface Props {
  linkData: {
    linkText: string;
    link?: string;
    subLinks?: {
      linkText: string;
      link: string;
    }[];
  };

  closeMenuHandler: () => void;
}

const LinkItem = ({ linkData, closeMenuHandler }: Props) => {
  const { link, linkText } = linkData;

  return (
    <a onClick={closeMenuHandler} href={link} className={styles.linkItem}>
      {linkText}
      <Arrow />
    </a>
  );
};

export default LinkItem;
