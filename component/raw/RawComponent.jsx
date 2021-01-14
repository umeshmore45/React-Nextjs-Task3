import styles from "./RawCompent.module.css";

function RawComponent(props) {
  return (
    <div className={styles["raw-flex-container"]}>
      <div className={styles["media-container"]}>
        <img
          src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt295b153f13c76458/5e313899507d2f74fb78ca3c/Digital_Transformation3_us_xT3DQ40lus4.png?format=pjpg&width=590"
          alt="raw-comp"
          className={styles["img"]}
        />
      </div>
      <div className={styles["content-container"]}>
        <h1 className={styles["head"]}>
          Digital Transformation: Building the Modern Microservices Stack
        </h1>
        <p className={styles["para"]}>
          Raw Engineering was an early leader in the movement to architect and
          build the modern, microservices-driven tech stack. We bring strategic
          thinking and years of experience to help our clients transform their
          Digital Enterprise
        </p>
      </div>
    </div>
  );
}

export default RawComponent;
