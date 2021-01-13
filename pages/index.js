import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SurfRawComponent from "../component/SurfRaw";
import SurfContentComponent from "../component/SurfContent";

export default function Home(props) {
  return (
    <div className={styles["container"]}>
      <h1>Surfboard</h1>
      <SurfRawComponent />
      <SurfContentComponent />
    </div>
  );
}
