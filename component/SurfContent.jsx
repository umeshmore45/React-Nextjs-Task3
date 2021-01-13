import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import Link from "next/link";
import styles from "./surfContent.module.css";

function SurfContentComponent() {
  return (
    <div className={styles["container"]}>
      <h1>Contentstack</h1>
      <p>An API-first, Headless CMS company</p>
      <div className={styles["flex-container"]}>
        <div className={styles["image-container"]}>
          <img
            src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blt4f5620e20cd521ff/5eec778f43f6b42a02432a6a/CS-photo-collage.png?auto=webp&quality=100&format=pjpg"
            alt="ContentTeam"
            className={styles["image"]}
          />
        </div>

        <div className={styles["content-container"]}>
          <p>
            Contentstack is the leading API-first content hub at the
            intersection of CMS and DXP powering modernized digital experiences.
            It recently received a Series-A funding of $31.5 million to deliver
            personalized, omnichannel digital experiences.
          </p>
          <Link href="/conentstack">
            <button className={styles["button"]}>Visit Website</button>
          </Link>
          <Facebook />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default SurfContentComponent;
