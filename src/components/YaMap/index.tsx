import clsx from "clsx";
import styles from "./styles.module.css";

const YaMap = () => {
  const scriptHtml = `
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4bf8b5f43deb7c0787200f81f23fa101c65c0848545062a034b09b24b2370974&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
  `;

  return (
    <div className={styles.mapWrapper}>
      <div
        className={clsx(styles.map)}
        dangerouslySetInnerHTML={{ __html: scriptHtml }}
      />
    </div>
  );
};

export default YaMap;
