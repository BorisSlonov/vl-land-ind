import { InViewStyle } from "@/shared/ui/InViewStyle";
import styles from "./styles.module.css";
import Image from "next/image";
import clsx from "clsx";

export interface IntroData {
  title: React.ReactNode;
  description: React.ReactNode[];
  legal?: string;
  className?: string;
  img: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
}

const IntroRightImg: React.FC<IntroData> = ({
  title,
  description,
  legal,
  img,
  className,
}) => {
  return (
    <section className={clsx(styles.section, className && styles[className])}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.item}>
            <InViewStyle
              initialClass="leftToRight"
              animationClass="visible"
              triggerOnce
            >
              <h2 className={styles.title}>{title}</h2>
            </InViewStyle>

            <InViewStyle
              initialClass="leftToRight"
              animationClass="visible"
              triggerOnce
            >
              <div className={styles.description}>
                {description.map((text, index) => (
                  <div key={index} className={styles.txt}>
                    {text}
                  </div>
                ))}
              </div>
            </InViewStyle>

            <InViewStyle
              initialClass="leftToRight"
              animationClass="visible"
              triggerOnce
            >
              {legal && <p className={styles.legal}>{legal}</p>}
            </InViewStyle>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <InViewStyle
                initialClass="fadeIn"
                animationClass="visible"
                triggerOnce
              >
                <Image
                  className={styles.img}
                  src={img.src}
                  alt={img.alt}
                  width={img.width || 500}
                  height={img.height || 300}
                  priority={img.priority}
                />
              </InViewStyle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroRightImg;
