import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import Link from "next/link";
import styles from "./SurfRaw.module.css";

function SurfRawComponent() {
  return (
    <div className={styles["container"]}>
      <h1>Raw Engineering</h1>
      <p>An Innovative Digital Solutions company</p>
      <div className={styles["flex-container"]}>
        <div className={styles["content-container"]}>
          <p>
            Raw Engineering provides Digital Transformation Strategy and Custom
            Development Services. It has been trusted for more than a decade by
            the world’s most innovative startups, sports franchises and leading
            Fortune 500 companies for Web, Mobile and DevOps solutions and
            services.
          </p>
          <Link href="/raw">
            <button className={styles["button"]}>Visit Website</button>
          </Link>
          <div className={styles["icons"]}>
            <Twitter />
            <LinkedIn />
            <Facebook />
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/bltb55c49152336f5cd/5eec777e293eef25d2b6eb7a/RawEng-photo-collage.png?auto=webp&quality=100&format=pjpg"
            alt="RawTeam"
            className={styles["image"]}
          />
        </div>
      </div>
    </div>
  );
}

export default SurfRawComponent;
