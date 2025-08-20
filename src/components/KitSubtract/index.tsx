import clsx from "clsx";
import s from "./styles.module.css";
import Image from "next/image";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import KitItemCard from "./KitItemCard";
import AccesoriesSlider from "./AccesoriesSlider";

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
            <KitItemCard
              imgSrc="/landing_indicator/kit/1.png"
              name="Электронный / Стрелочный индикатор"
              info="2 шт."
              itemClassName={s.item_1}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/2.png"
              name="Цепное крепление"
              info="2 шт. | В сборе"
              itemClassName={s.item_2}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/7.png"
              name="Измерительная планка"
              info="1 шт."
              itemClassName={s.item_7}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/3.png"
              name="Инклинометр"
              info="1 шт."
              itemClassName={s.item_3}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/4.png"
              name="Удлинительная цепь"
              info="2 шт."
              itemClassName={s.item_4}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/5.png"
              name="Измерительная рулетка"
              info="1 шт."
              itemClassName={s.item_5}
            />
            <KitItemCard
              imgSrc="/landing_indicator/kit/6.png"
              name="Затяжной ключ"
              info="1 шт."
              itemClassName={s.item_1}
            />
          </div>
        </div>
      </div>
      <AccesoriesSlider />
    </section>
  );
};

export default KitSubtract;
