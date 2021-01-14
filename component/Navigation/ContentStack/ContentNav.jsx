import styles from "./ContentNav.module.css";

function ContentNav() {
  return (
    <div className={styles["nav-flex"]}>
      <div className={styles["nav-img"]}>
        <img
          src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt8dc4dd93cd29ae05/5f1a2be13986577a2d5f6736/Contentstack-full-logo-white_800x133.png"
          alt="logo"
          className={styles["img"]}
        />
      </div>
      <div className={styles["nav-link"]}>
        <ul>
          <li className={styles["li"]}>Product</li>
          <li className={styles["li"]}>Eduction</li>
          <li className={styles["li"]}>Partners</li>
          <li className={styles["li"]}>Company</li>
          <li className={styles["li"]}>Pricing</li>
          <li className={styles["li-but"]}>TRY FOR FREE</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentNav;
