import ReviewsSlider from "@/components/ReviewsSlider";
import styles from "./styles.module.css";
import { InViewStyle } from "@/shared/ui/InViewStyle";

const Reviews = () => {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <InViewStyle
          initialClass="leftToRight"
          animationClass="visible"
          triggerOnce
        >
          <h2 className="h2 h2_mb24">отзывы</h2>
        </InViewStyle>
        <div className={styles.body}>
          <ReviewsSlider />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
