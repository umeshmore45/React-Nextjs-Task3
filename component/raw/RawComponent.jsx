import styles from "./RawCompent.module.css";

function RawComponent(props) {
  let { heading, sub_heading, imageurl } = props;

  return (
    <div className={styles["raw-flex-container"]}>
      <div className={styles["media-container"]}>
        <img
          src={imageurl.href}
          alt={imageurl.title}
          className={styles["img"]}
        />
      </div>
      <div className={styles["content-container"]}>
        <h1 className={styles["head"]}>{heading}</h1>
        <p className={styles["para"]}>{sub_heading}</p>
      </div>
    </div>
  );
}

export default RawComponent;
