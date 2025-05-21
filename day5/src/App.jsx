
import './App.css'
import ItemListClick from './assets/Components/ClickEvent'
import ItemList from './assets/Components/EmptyList'
import EvenNumberList from './assets/Components/EvenNo'
import FruitList from './assets/Components/FruitList'
import TaskList from './assets/Components/Listconditional'
import StudentList from './assets/Components/MiniProject1'
import TodoApp from './assets/Components/MiniProject2'
import Greeting from './assets/Components/MiniProject3'
import TimeOfDayGreeting from './assets/Components/Multiple'

import NameList from './assets/Components/Namelist'
import NumberList from './assets/Components/Numberlist'
import WelcomeMessage from './assets/Components/RenderAnd'
import UserStatus from './assets/Components/Ternary'
import ToggleList from './assets/Components/ToggleList'
import UserList from './assets/Components/Userlist'



function App() {
 

  return (
    <div className='output'>
 {<h3>Task 1: Write a short note on how lists are rendered 
in React using map(). </h3>}{<p>When we want to display multiple similar components from a collection of 
data. we can use the JavaScript array methods to manipulate an array of data. On 
this page, we’ll use filter() and map() with React to filter and transform  array 
of data into an array of components. </p>}
  {<h3>Task 2 : Render an array of numbers using the map() method 
inside a functional component.</h3>}<NumberList/>
<hr></hr>
{<h3>Task 3: Render a list of names with unique keys for each item. </h3>}<NameList/>
<hr></hr>
{<h3>Task 4 :  Render a list of user objects with properties like name and 
age.</h3>}<UserList/>
<hr></hr>
{<h3>Task 5 :  Render a list of fruits with each item having a 
different color using inline styling. </h3>}<FruitList/>
<hr></hr>
{<h3>Task 6 : Display "Hello, User!" only if isLoggedIn is 
true.</h3>}<WelcomeMessage isLoggedIn={true} />
<hr></hr>
{<h3>Task 7 :  Display "Welcome" if 
isLoggedIn is true, otherwise display "Please Log In". </h3>} <UserStatus/>
<hr></hr>
{<h3>Task 8 : Render a list of tasks and highlight the 
completed tasks.</h3>}<TaskList/>
<hr></hr>
{<h3>Task 9 :Rendering Empty Lists: Display "No items available" if the list is empty. </h3>}
<ItemList items={[]}/>
<hr></hr>
{<h3>Task 10: Return "Morning" if time less than 12, 
"Afternoon" if time greater than 18, and "Evening" otherwise. </h3>}<TimeOfDayGreeting/>
<hr></hr>

{<h3>Task 11:  List with Click Event: Display a list of items and show an alert message 
when an item is clicked. </h3>} <ItemListClick/>
<hr></hr>
{<h3>Task 12:  Toggle List Items: Create a button that toggles the display of a list on and 
off.  </h3>}<ToggleList/><hr/>
{<h3>Task 13:  Filtered List Rendering: Render only even numbers from an array of 
numbers. </h3>}<EvenNumberList/><hr></hr>
{<h1>Mini Project 1 : Student List </h1>}<StudentList/><hr></hr>
{<h1>Mini Project 2 : Task Manager  </h1>}<TodoApp/><hr></hr>
{<h1>Mini Project 3 : Greeting Message </h1>}<Greeting/><hr></hr>
{<h1>Mini Project 4 :  Number Filter </h1>}<EvenNumberList/><hr></hr>
    </div>
  )
}

export default App
