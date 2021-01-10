function RawCard(props) {
  let { firstName, lastName, company } = props;
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{company}</p>
    </div>
  );
}

export default RawCard;
