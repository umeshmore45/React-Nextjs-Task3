import Link from "next/link";

function ContentStack(props) {
  return (
    <div>
      <h1>Content Stack </h1>
      <Link href="/contentstackemp">
        <button>ContentStack Employee</button>
      </Link>
    </div>
  );
}

export default ContentStack;
