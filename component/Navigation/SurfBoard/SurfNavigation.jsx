import styles from "./SurfNavigation.module.css";

function SurfBoard() {
  return (
    <div className={styles["flex"]}>
      <div className={styles["img-cont"]}>
        <img
          src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg"
          alt="logo"
          className={styles["img"]}
        />
      </div>
      <div className={styles["navigation"]}>
        <ul>
          <li className={styles["li"]}>Portfolio</li>
          <li className={styles["li"]}> Academy</li>
          <li className={styles["li"]}>Events</li>
          <li className={styles["li"]}> Gallery</li>
          <li className={styles["li-but"]}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default SurfBoard;
