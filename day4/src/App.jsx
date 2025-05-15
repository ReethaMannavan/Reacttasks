
import './App.css'
import Child from './assets/Components/SimpleText'
import Person from './assets/Components/MultipleProps'
import Destruct from './assets/Components/DestructProps'
import BooleanProp from './assets/Components/BooleanProp'
import DefaultProps from './assets/Components/DefaultProps'
import HobbiesProps from './assets/Components/HobbiesProps'
import ObjectProps from './assets/Components/ObjectProps'
import Conditional from './assets/Components/Conditional'
import InlineStyle from './assets/Components/InlinestyleProps'
import ButtonClick from './assets/Components/ButtonClick'
import ReusableCard from './assets/Components/ReusableCard'
import ParentMain from './assets/Components/ParentChild'
import ProfileCard from './assets/Components/MiniProject1'
import HobbiesList from './assets/Components/MiniProject2'
import ColorText from './assets/Components/MiniProject3'
import Click from './assets/Components/MiniProject4'


function App() {


  return (
    <>
     <Child name="Reetha"/>
     <Person name="Reetha" age = "32"/>
     <Destruct/>
     <BooleanProp/>
     <DefaultProps/>
  <HobbiesProps/>
  <ObjectProps/>
  <Conditional/>
  <InlineStyle/>
  <ButtonClick/>
  <ReusableCard/>
  <ParentMain/>
  <hr/>
  <ProfileCard/>
  <hr/>
  <HobbiesList/>
  <hr/>
  <ColorText/>
  <hr/>
  <Click/>


    </>
  )
}

export default App
