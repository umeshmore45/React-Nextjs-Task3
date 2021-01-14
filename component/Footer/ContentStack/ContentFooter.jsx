import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styles from "./ContentFooter.module.css";

function ContentFooter(props) {
  return (
    <div className={styles["flex"]}>
      <img
        src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt954cedac0397edba/5f1a2be1d0350a5e2a2fde71/contentstack-footer-logo.png"
        alt="logo"
        className={styles["img"]}
      />
      <div className={styles["logo"]}>
        <Facebook className={styles["logo-m"]} />
        <Instagram className={styles["logo-m"]} />
        <Twitter className={styles["logo-m"]} />
        <LinkedIn className={styles["logo-m"]} />
        <YouTube className={styles["logo-m"]} />
      </div>
    </div>
  );
}

export default ContentFooter;
