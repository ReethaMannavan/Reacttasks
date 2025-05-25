
import './App.css'
import UserList from './assets/components/DynamicList'
import ListWithFragment from './assets/components/ListFragment'
import FruitsList from './assets/components/ListofFruits'
import EvenNumberList from './assets/components/MapEven'
import FruitListMini from './assets/components/MiniProject1'
import UserTableMini from './assets/components/MiniProject2'
import CompletedTaskList from './assets/components/MiniProject3'
import NumbersOverFifty from './assets/components/MiniProject4'
import NestedList from './assets/components/NestedList'
import FruitListNonUnique from './assets/components/NonUnique'
import RenderPara from './assets/components/RenderPara'
import ShorthandFragmentExample from './assets/components/ShortHand'
import StyledFragmentExample from './assets/components/Style'
import UserListWithIDs from './assets/components/UniqueKey'
import UserTable from './assets/components/UserTable'

function App() {
 

  return (
    <>
       <div className="output">
      <h2>Task 1: Introduction to React Fragment: Write a short explanation of what 
React.Fragment is and why it is used. </h2>
<p>In React, every component must return a single root element. Often, 
developers wrap elements in div unnecessarily. Instead, we use 
React.Fragment (or shorthand <>...</>) to avoid extra DOM elements.</p><hr/>
<h2>Task 2: Basic Fragment Example: Create a functional component that renders two 
paragraphs using React.Fragment.</h2><RenderPara/><hr/>
<h2>Task 3: Shorthand Fragment Syntax: Use the shorthand <>...</> instead of 
React.Fragment to render multiple elements.</h2><ShorthandFragmentExample/><hr/>
<h2>Task 4: Fragment with List: Render a list of items using React.Fragment without 
extra divs. </h2><ListWithFragment/><hr/>
<h2>Task 5: Styling without Extra Divs: Apply CSS to sibling elements without adding 
unnecessary parent divs using fragments. </h2><StyledFragmentExample/><hr/>
<h2>Task 6: Keys in List Rendering: Write a short note on the importance of keys in 
React lists.</h2><p>In React, keys are special attributes used when rendering lists of elements. They help React identify which items have changed, been added, or removed, improving the performance and accuracy of the UI updates.</p>
<p>Use a unique and stable identifier (like item.id) as a key.</p>
<p>Avoid using index as a key unless the list is static and never changes order.</p><hr/>
<h2>Task 7: Basic List with Keys: Render a list of fruits with unique keys. </h2><FruitsList/><hr/>
<h2>Task 8: List without Keys: Render a list without keys and observe the console 
warning.</h2><FruitListNonUnique/><hr/>
<h2>Task 9: Dynamic List with Keys: Render a list of user names from an array with keys 
generated from the index. </h2> <UserList/><hr/>
<h2>Task 10: Unique IDs as Keys: Use unique id properties from an object array as keys 
when rendering a list. </h2><UserListWithIDs/><hr/>
<h2>Task 11: . Fragment with Table Rows: Render table rows using React.Fragment 
without unnecessary wrapper elements. </h2><UserTable/><hr/>
<h2>Task 12: Map List with Conditional Rendering: Render a list of numbers, displaying 
only even numbers with keys. </h2><EvenNumberList/><hr/>
<h2>Task 13:  Nested List with Keys: Render a nested list where each inner list has unique 
keys. </h2><NestedList/><hr/>
<h2>Mini Project 1: Fruit List</h2><FruitListMini/><hr/>
<h2>Mini Project 2: User Table </h2><UserTableMini/><hr/>
<h2>Mini Project 3: Task List with Conditional Rendering </h2><CompletedTaskList/><hr/>
<h2>Mini Project 4: Dynamic Number List</h2><NumbersOverFifty/>




</div>
    </>
  )
}

export default App
