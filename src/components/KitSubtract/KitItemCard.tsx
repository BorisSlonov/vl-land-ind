import clsx from "clsx";
import Image from "next/image";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import s from "./styles.module.css";

type KitItemCardProps = {
  imgSrc: string;
  name: string;
  info: string;
  itemClassName?: string;
};

const KitItemCard = ({
  imgSrc,
  name,
  info,
  itemClassName,
}: KitItemCardProps) => {
  return (
    <div className={clsx(s.item, itemClassName)}>
      <div className={s.imgWrapper}>
        <InViewStyle
          initialClass="bottomToTop"
          animationClass="visible"
          triggerOnce
        >
          <Image
            width={357}
            height={357}
            className={s.img}
            src={imgSrc}
            alt=""
          />
        </InViewStyle>
      </div>
      <p className={s.prodName}>{name}</p>
      <p className={s.prodInfo}>{info}</p>
    </div>
  );
};

export default KitItemCard;
