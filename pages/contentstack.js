import Link from "next/link";
import styles from "../styles/contentstack.module.css";

function ContentStack(props) {
  return (
    <div className={styles["content-head"]}>
      <div className={styles["content-row"]}>
        <h1 className={styles["head"]}>
          Finally, A Modern Content Management System
        </h1>
        <p className={styles["para"]}>
          Contentstack brings business and technology teams together to deliver
          personalized, omnichannel digital experiences.
        </p>
        <button className={styles["button"]}>TRY FOR FREE</button>
        <p className={styles["link"]}>Request a Demo</p>
      </div>
    </div>
  );
}

export default ContentStack;
