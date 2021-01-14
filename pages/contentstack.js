import Link from "next/link";
import styles from "../styles/contentstack.module.css";
import contentstack from "contentstack";

function ContentStack(props) {
  let { pages } = props;
  return (
    <div className={styles["content-head"]}>
      <div className={styles["content-row"]}>
        <h1 className={styles["head"]}>{pages[0].heading}</h1>
        <p className={styles["para"]}>{pages[0].sub_heading}</p>
        <button className={styles["button"]}>TRY FOR FREE</button>
        <p className={styles["link"]}>Request a Demo</p>
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const Stack = contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT
  );
  const Query = Stack.ContentType("umesh_surfcom_cshome").Query();

  return Query.where("title")
    .includeSchema()
    .includeCount()
    .toJSON()
    .find()
    .then(
      function success(result) {
        return {
          props: {
            pages: [...result[0]],
          },
        };
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
};

export default ContentStack;
