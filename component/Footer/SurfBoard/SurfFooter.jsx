import { Facebook, LinkedIn, Twitter, YouTube } from "@material-ui/icons";
import styles from "./SurfFooter.module.css";

function SurfFooter(props) {
  return (
    <div>
      <div className={styles["flex-container"]}>
        <div className={styles["image-container"]}>
          <img
            src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg"
            alt="logo"
          />
        </div>
        <div className={styles["link-1"]}>
          <ul>
            <li className={styles["li"]}>Portfolio</li>
            <li className={styles["li"]}>Academy</li>
            <li className={styles["li"]}>Events</li>
          </ul>
        </div>
        <div className={styles["link-2"]}>
          <ul>
            <li className={styles["li"]}>Gallery</li>
            <li className={styles["li"]}>e-Certificates</li>
            <li className={styles["li"]}>Contact Us</li>
          </ul>
        </div>
        <div className={styles["logo"]}>
          <Facebook />
          <LinkedIn />
          <Twitter />
          <YouTube />
        </div>
      </div>
      <hr />
      <p className={styles["copy"]}>
        Copyright © 2021 Surfboard Ventures. All Rights Reserve
      </p>
    </div>
  );
}

export default SurfFooter;
