import styles from "./styles.module.css";
import { ReactNode } from "react";
import clsx from "clsx";
import { InViewStyle } from "@/shared/ui/InViewStyle";

interface Props {
  title?: ReactNode;
  titleh3?: ReactNode;
  items: Array<{
    content: ReactNode;
    hasHighlight?: boolean;
  }>;
  itemClassName?: string;
  containerClass?: string;
  sectionClass?: string;
}

const TitleListBtns = ({
  title,
  titleh3,
  items,
  itemClassName,
  containerClass,
  sectionClass,
}: Props) => {
  return (
    <section
      className={clsx(styles.section, sectionClass && styles[sectionClass])}
    >
      <div
        className={clsx("container", containerClass && styles[containerClass])}
      >
        {title && (
          <InViewStyle
            initialClass="leftToRight"
            animationClass="visible"
            triggerOnce
          >
            <h2 className={clsx(styles.title, "h2")}>{title}</h2>
          </InViewStyle>
        )}

        <div className={styles.body}>
          {titleh3 && <h3 className={styles.titleh3}>{titleh3}</h3>}

          <ul className={styles.ul}>
            {items.map(({ content, hasHighlight }, index) => (
              <li
                key={index}
                className={clsx(
                  styles.li,
                  itemClassName && styles[itemClassName],
                  hasHighlight && styles.hasHighlight
                )}
              >
                <InViewStyle
                  initialClass="leftToRight"
                  animationClass="visible"
                  triggerOnce
                >
                  <span className={styles.contentWrapper}>{content}</span>
                </InViewStyle>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TitleListBtns;
