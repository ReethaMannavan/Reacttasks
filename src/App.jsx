import "./App.css";
import PersonalBio from "./assets/Components/MiniProject1";
import Propsname from "./assets/Components/MiniProject2";
import NumberDisplay from "./assets/Components/MiniProject3";
import HobbyArray from "./assets/Components/MiniProject4";
import PropsName from "./assets/Components/PropsComponent";

const Welcome = () => {
  return <h1 className="react_class">Hello, Welcome to React Class!!</h1>;
};

const Internal = {
  color:'Green',
 fontSize:'22px'

}
const Parent = () => {
    return (
        <>
            <p className="first">This is First Child</p>
            <p className="second">This is Second Child</p>
        </>
    );
}

function App() {
  return (
    <>
      <h1 className="welcome">Welcome to React!</h1>
      {Welcome()}
     
      <p style={Internal}>
        Example of Internal CSS
      </p>
      <h1 className="External">External Css</h1>
      {Parent()}
      <PropsName/>
      <hr/>
      <PersonalBio/>
      <hr/>
      <Propsname/>
      <hr/>
      <NumberDisplay/>
      <hr/>
      <HobbyArray/>
    </>
  );
}

export default App;
