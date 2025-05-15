import "./App.css";
import ClassComponent from "./assets/components/ClassComponent";
import Counter from "./assets/components/Counter";
import CounterButton from "./assets/components/CounterButton";
import ExternalClass from "./assets/components/ExternalClass";
import FunctionalInline from "./assets/components/FunctionalInline";
import LifecycleDemo from "./assets/components/LifeCylce";
import WelcomeReact from "./assets/components/MiniProject1";
import Countertwo from "./assets/components/MiniProject2";
import HelloWorld from "./assets/components/MiniProject3";
import Clock from "./assets/components/MiniProject4";
import MultiStatic from "./assets/components/MultiClass";
import Multiple from "./assets/components/Multiple";
import ParentFunc from "./assets/components/NestedComponents";
import Static from "./assets/components/Static";
import StaticComponent from "./assets/components/StaticClass";
import Welcome from "./assets/components/Welcome";
import ConditionalRender from "./assets/ConditionalRender";

function App() {
  return (
    <>
      <Welcome />
      <Static />
      {/*Render three functional 
      components displaying different messages. */}
      <Multiple />
      <ClassComponent/>
      <StaticComponent/>
      <MultiStatic/>
      <Counter/>
      <CounterButton/>
      <FunctionalInline/>
      <ExternalClass/>
      <ConditionalRender/>
      <ParentFunc/>
      <LifecycleDemo/>
      <hr/>
      <WelcomeReact/>
      <hr/>
      <Countertwo/>
       <hr/>
       <HelloWorld/>
       <hr/>
       <Clock/>
    </>
  );
}

export default App;
