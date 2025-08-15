import clsx from "clsx";
import s from "./styles.module.css";
import Image from "next/image";
import { InViewStyle } from "@/shared/ui/InViewStyle";

const KitSubtract = () => {
  return (
    <section className={s.section} id="kit">
      <div className="container">
        <div className={s.wrapperContent}>
          <h2 className={clsx("h2", s.h2)}>комплектация</h2>
          <p className={s.subtitle}>
            <span className={s.op06}> Комплект VIBRO-LASER INDICATOR</span>{" "}
            <span className={s.bold}>
              имеет компактные размеры и поставляется в удобном кейсе{" "}
            </span>
            для переноски
          </p>
          <div className={s.body}>
            <div className={clsx(s.item, s.item_1)}>
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
                    src={"/landing_indicator/kit/1.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Электронный индикатор</p>
              <p className={s.prodInfo}>2 шт.</p>
            </div>
            <div className={clsx(s.item, s.item_2)}>
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
                    src={"/landing_indicator/kit/2.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Цепное крепление</p>
              <p className={s.prodInfo}>2 шт. | В сборе</p>
            </div>
            <div className={clsx(s.item, s.item_7)}>
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
                    src={"/landing_indicator/kit/7.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Измерительная планка</p>
              <p className={s.prodInfo}>1 шт.</p>
            </div>
            <div className={clsx(s.item, s.item_3)}>
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
                    src={"/landing_indicator/kit/3.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Инклинометр</p>
              <p className={s.prodInfo}>1 шт.</p>
            </div>
            <div className={clsx(s.item, s.item_4)}>
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
                    src={"/landing_indicator/kit/4.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Удлинительная цепь</p>
              <p className={s.prodInfo}>2 шт.</p>
            </div>
            <div className={clsx(s.item, s.item_5)}>
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
                    src={"/landing_indicator/kit/5.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Измерительная рулетка</p>
              <p className={s.prodInfo}>1 шт.</p>
            </div>
            <div className={clsx(s.item, s.item_1)}>
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
                    src={"/landing_indicator/kit/6.png"}
                    alt={""}
                  />
                </InViewStyle>
              </div>
              <p className={s.prodName}>Затяжной ключ</p>
              <p className={s.prodInfo}>1 шт.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitSubtract;
