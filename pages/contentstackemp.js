import axios from "axios";
import ContentStackCard from "../component/ContentStackCard";
import { URL } from "./rawemp";

function ContentStackEmp(props) {
  let { employee } = props;

  return (
    <div>
      <h1>Contenstack Employee </h1>
      {employee.map((emp) => {
        if (emp.company === "Contentstack")
          return <ContentStackCard key={emp.id} {...emp} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios.get(URL);

  return {
    props: {
      employee: [...data],
    },
  };
};

export default ContentStackEmp;
