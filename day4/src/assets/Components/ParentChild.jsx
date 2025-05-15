const Header = (props) => {
  return <h1>{props.text}</h1>;
};


const Paragraph = (props) => {
  return <p>{props.text}</p>;
};

const ParentMain = () => {
  const headingText = "Welcome to My App";
  const paragraphText = "This is a simple React example with props and components.";

  return (
    <div>
      <Header text={headingText} />
      <Paragraph text={paragraphText} />
    </div>
  );
};

export default ParentMain;