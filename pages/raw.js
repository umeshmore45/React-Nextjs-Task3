import Link from "next/link";
import RawComponent from "../component/raw/RawComponent";
import styles from "../styles/raw.module.css";
import contentstack from "contentstack";
import RawNav from "../component/Navigation/Raw/RawNav";
import RawFooter from "../component/Footer/Raw/RawFooter";

function Raw(props) {
  let { pages } = props;

  return (
    <div>
      <div>
        <RawNav />
      </div>
      <div className={styles["header"]}>
        <div className={styles["header-content"]}>
          <h1 className={styles["header-h1"]}>{pages[0].heading}</h1>
          <p className={styles["header-p"]}>{pages[0].sub_heading}</p>
        </div>
        <div className={styles["header-media"]}>
          <img
            src={pages[0].imageurl.href}
            alt={pages[0].imageurl.title}
            className={styles["img-header"]}
          />
        </div>
      </div>
      <div className={styles["side"]}>
        <p className={styles["side-text"]}>{pages[0].content}</p>
        <button className={styles["side-button"]}>Learn More</button>
        <hr />
      </div>
      <h1>--WHAT WE DO</h1>
      {props.component.map((cpm) => {
        return <RawComponent key={cpm.uid} {...cpm} />;
      })}
      <RawFooter />
    </div>
  );
}

export const getStaticProps = () => {
  const Stack = contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT
  );
  const Query = Stack.ContentType("umesh_surfcom_rawcomp").Query();
  const Query1 = Stack.ContentType("umesh_surfcom_rawhome").Query();

  return Query.where("title")
    .includeSchema()
    .includeCount()
    .toJSON()
    .find()
    .then(
      function success(result) {
        return Query1.where("title")
          .includeSchema()
          .includeCount()
          .toJSON()
          .find()
          .then(function success(page) {
            return {
              props: {
                pages: [...page[0]],
                component: [...result[0]],
              },
            };
          });
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
};

export default Raw;
