import styles from "./RawNav.module.css";

function RawNav() {
  return (
    <div className={styles["nav-conatiner"]}>
      <div className={styles["img-conatiner"]}>
        <img
          src="https://raw.githubusercontent.com/umeshmore45/Blog-Object/48091915bca60f3ec048af96c9062b9db1b93fc1/img/logo%20header.svg"
          alt="logo"
        />
      </div>
      <div className={styles["nav-link"]}>
        <ul>
          <li className={styles["li"]}>WHAT WE DO</li>
          <li className={styles["li"]}>OUR WORK</li>
          <li className={styles["li"]}>WHO WE ARE</li>
          <li className={styles["li"]}>BLOG</li>
          <li className={styles["li"]}>CAREERS</li>
          <li className={styles["li-con"]}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default RawNav;
