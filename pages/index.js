import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SurfComponent from "../component/SurfCom";
import contentstack from "contentstack";
import { useState } from "react";
import SurfBoard from "../component/Navigation/SurfBoard/SurfNavigation";
import SurfFooter from "../component/Footer/SurfBoard/SurfFooter";

export default function Home(props) {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Surfboard Ventures</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SurfBoard />
      {props.employee.map((emp) => {
        return <SurfComponent key={emp.uid} {...emp} />;
      })}
      <SurfFooter />
    </div>
  );
}

export const getStaticProps = () => {
  const Stack = contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT
  );
  const Query = Stack.ContentType("umesh_surfcom").Query();

  return Query.where("title")
    .includeSchema()
    .includeCount()
    .toJSON()
    .find()
    .then(
      function success(result) {
        return {
          props: {
            employee: [...result[0]],
          },
        };
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
};
