import styles from "./page.module.css";
import LandingIntro from "@/components/Sections/LandingIntro";
import FeedbackForm from "@/components/FeedbackForm";
import DigitalAlignment from "@/components/DigitalAlignment";
import KitSubtract from "@/components/KitSubtract";
import LandEd from "@/components/Sections/LandEd";
import LandApp from "@/components/Sections/LandApp";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingIntro />
      <DigitalAlignment />
      <KitSubtract />
      <LandApp />
      <LandEd />
      <FeedbackForm />
    </main>
  );
}
