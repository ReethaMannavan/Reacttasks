const Card = (props) => {
  const styling = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    margin: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "lightcyan",
  };
  return (
    <div style={styling}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

const ReusableCard = () => {
  return (
    <div>
      <Card
        title="Card1"
        description="This is a simple card component using props in React."
      />
      <Card
        title="Card2"
        description="You can reuse this component with different data."
      />
    </div>
  );
};

export default ReusableCard;
