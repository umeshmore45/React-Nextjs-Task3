import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SurfComponent from "../component/SurfCom";

import contentstack from "contentstack";

export default function Home(props) {
  return (
    <div className={styles["container"]}>
      <h1>Surfboard</h1>
      {props.employee.map((emp) => {
        return <SurfComponent key={emp.uid} {...emp} />;
      })}
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
