const ColoredText = ({ color, text }) => {
  return (
    <h1 style={{ color: color }}>
      {text}
    </h1>
  );
};

const InlineStyle = () => {
  return (
    <div>
      <ColoredText color="blue" text="This is blue text" />
      <ColoredText color="green" text="This is green text" />
      <ColoredText color="red" text="This is red text" />
    </div>
  );
};

export default InlineStyle;