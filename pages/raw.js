import Link from "next/link";

function Raw(props) {
  return (
    <div>
      <h1>Raw</h1>
      <Link href="/rawemp">
        <button>Raw Employee</button>
      </Link>
    </div>
  );
}

export default Raw;
