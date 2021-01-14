import styles from "./RawFooter.module.css";

function RawFooter() {
  return (
    <div className={styles["Footer-container"]}>
      <div className={styles["footer-1"]}>
        <h1 className={styles["footer-head"]}>
          Ready to get started on your next project?
        </h1>
        <p className={styles["footer-button"]}>GET IN TOUCH</p>
      </div>
      <div className={styles["flex"]}>
        <div>
          <p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default RawFooter;
