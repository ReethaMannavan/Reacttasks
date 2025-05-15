import "./App.css";
import Miniproject1 from "./assets/Components/MiniProject1";
import Temperature from "./assets/Components/MiniProject2";
import Calculator from "./assets/Components/MiniProject3";
import ImageProps from "./assets/Components/MiniProject4";

const element = <h1 className="hello">Hello React!</h1>;

const a = 5;
const b = 5;
const sum = a + b;

const name = "Reetha";

const element1 = <h1 className="heading">Hello, React attribute!</h1>;

const headingStyle = {
  color: "blue",
  fontSize: "24px",
  textAlign: "center",
};

const imgElement = <img src="/src/assets/react.svg" alt="Logo" />;

const comment = <h1>Adding Comments inside jsx</h1>; /* This is a heading */

const Rendering = () => {
  return <h1 className="Rendering">Rendering a Functional Component !</h1>;
};

const getGreeting = (user) => {
  return user ? `Hello, ${user}!` : "Hello, Guest!";
};

const greetingElement = <h1>{getGreeting("Reetha")}</h1>;

function App() {
  return (
    <>
      {element}
      <p className="sumstyle">Total is:{sum}</p>
      <p className="name">My name is {name}</p>
      {element1}
      <h1 style={headingStyle}>Inline Styled Heading</h1>
      <h1 className="title">Styled with External CSS</h1>
      {imgElement}
      {comment}
      {Rendering()}

      <h1 class="multiple">Welcome</h1>
      <p className="component">This is a React component.</p>
      {greetingElement}
      <hr />
      <Miniproject1 />
      <hr />
      <Temperature />
      <hr />
      <Calculator />
      <hr />
      <ImageProps />
      <hr/>
    </>
  );
}

export default App;
