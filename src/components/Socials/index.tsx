import React from "react";
import TGIcon from "@/shared/ui/icons/tgIcon";
import VKIcon from "@/shared/ui/icons/vkIcon";
import styles from "./styles.module.css";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  className?: string;
}

const Socials = ({ className }: Props) => {
  const socialLinks = [
    { icon: TGIcon, url: "https://t.me/vibrolaseredu", alt: "Telegram" },
    { icon: VKIcon, url: "https://vk.com/vibrolaser", alt: "VK" },
  ];

  return (
    <ul className={clsx(styles.socials, className)}>
      {socialLinks.map((social, index) => (
        <li className={styles.social} key={index}>
          <Link
            className={clsx(styles.socialLink)}
            href={social.url}
            target="_blank"
          >
            <social.icon
              className={styles.socialIcon}
              aria-label={social.alt}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
