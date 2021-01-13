import Link from "next/link";
import styles from "../styles/raw.module.css";
function Raw(props) {
  return (
    <div>
      <div className={styles["h"]}>Header</div>
      <div className={styles["header"]}>
        <div className={styles["header-content"]}>
          <h1 className={styles["header-h1"]}>
            Fast Track Innovation From Vision to Reality
          </h1>
          <p className={styles["header-p"]}>
            Raw Engineering’s experienced Strategic Consultants, Solutions
            Architects, Designers, and Developers turn Business Vision into
            Digital Reality.
          </p>
        </div>
        <div className={styles["header-media"]}>
          <img
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blte86401d468e74845/5e3137f08f7e217daef66f54/Landing_Page_Image_Motion.jpg?format=pjpg&width=540"
            alt="raw-flex"
            className={styles["img-header"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Raw;
