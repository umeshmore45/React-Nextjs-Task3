import Link from "next/link";
import styles from "./SurfCom.module.css";

function SurfComponent(props) {
  let { heading, sub_heading, content, route_link, image_url } = props;
  return (
    <div className={styles["container"]}>
      <h1>{heading}</h1>
      <p>{sub_heading}</p>
      <div className={styles["flex-container"]}>
        <div className={styles["content-container"]}>
          <p>{content}</p>
          <Link href={route_link.href}>
            <button className={styles["button"]}>Visit Website</button>
          </Link>
        </div>
        <div className={styles["image-container"]}>
          <img
            src={image_url.href}
            alt={image_url.title}
            className={styles["image"]}
          />
        </div>
      </div>
    </div>
  );
}

export default SurfComponent;
