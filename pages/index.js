import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <h1>Surfboard</h1>
      <Link href="/raw">
        <button>Raw Engeering</button>
      </Link>
      <Link href="/contentstack">
        <button>ContentStack</button>
      </Link>
    </div>
  );
}
