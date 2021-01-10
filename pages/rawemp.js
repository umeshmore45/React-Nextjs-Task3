import axios from "axios";
import RawCard from "../component/RawCard";
export const URL =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";

function RawEmp(props) {
  let { employee } = props;
  return (
    <div>
      {employee.map((emp) => {
        if (emp.company === "RawEngineering") {
          return <RawCard key={emp.id} {...emp} />;
        }
      })}
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios.get(URL);
  return {
    props: {
      employee: [...data],
    },
  };
};

export default RawEmp;
