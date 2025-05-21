import "./App.css";
import Counter from "./assets/Components/Counter";
import CounterReset from "./assets/Components/CounterReset";
import CounterUI from "./assets/Components/CounterUI";
import CounterMini from "./assets/Components/MiniProject1";
import TextInputMini from "./assets/Components/MiniProject2";
import RemoveTasksMini from "./assets/Components/MiniProject3";
import LightToggle from "./assets/Components/MiniProject4";
import NameUpdater from "./assets/Components/NameUpdate";
import NewTask from "./assets/Components/NewTask";
import RemoveTasks from "./assets/Components/RemoveTask";
import TaskListEmpty from "./assets/Components/TaskEmpty";
import TaskList from "./assets/Components/TaskList";
import TextInput from "./assets/Components/TextInput";
import ToggleSwitch from "./assets/Components/ToggleSwitch";
import UserInfo from "./assets/Components/UserInfo";

function App() {
  return (
    <div className="output">
      <h1>Day 6 Tasks - State in React </h1>
      <h3>
        Task 1: What is State?: Write a short explanation of what state is in
        React and why it is used.{" "}
      </h3>
      <p>
        State is a built-in React object used to store and manage dynamic data
        in a component.
      </p>
      <p>
        State is used to make components dynamic and interactive. For example,
        if a user clicks a button to update a counter, the new count value is
        stored in the state, and React updates the UI accordingly. Without
        state, components would be static and unable to respond to user input or
        events.
      </p><hr></hr>
      <h3>
        Task 2:State vs. Props: Write three key differences between state and
        props.{" "}
      </h3>
      <p>
        1.Mutability: State is mutable, meaning it can be changed within the
        component using functions like setState or useState. Props are
        immutable; they are read-only and cannot be changed by the component
        that receives them. <br/>
        2:Ownership : State is managed and owned by the
        component itself. Props are passed to a component from its parent,
        allowing data to flow from parent to child. <br/>
        3: Purpose : State is used for
        managing data that can change over time within a component (e.g., user
        input, toggles). Props are used to pass data and event handlers to child
        components for rendering and interaction.
      </p><hr></hr>
<h3>Task 3: Basic useState Example: Create a functional component that uses useState 
to store and display a counter starting at 0. </h3><CounterUI/><hr></hr>
      <h3>Task 4: State Update on Button Click: Create a button that increments the counter 
value when clicked. </h3><Counter/><hr></hr>
<h3>Task 5: State with Strings: Use useState to store and display a user's name. Update 
the name on button click. </h3><NameUpdater/><hr></hr>
<h3>Task 6: Multiple useState Hooks: Use two useState hooks to store name and age 
separately. </h3><UserInfo/><hr></hr>
<h3>Task 7: Toggle Boolean State: Create a button that toggles a true/false value in 
state. </h3><ToggleSwitch/><hr>
</hr>
<h3>Task 8 : Input Field with State: Use useState to store input field text and display it 
below the input field. </h3><TextInput/><hr></hr>
<h3>Task 9: Reset State: Add a button that resets the counter value to 0. </h3><CounterReset/><hr></hr>
<h3>Task 10:  State with Arrays: Use useState to manage an array of tasks and display 
them in a list. </h3><TaskList/><hr>
</hr>
<h3>Task 11:  Add Item to List: Add a button that adds a new item to the list stored in 
state. </h3><NewTask/><hr></hr>
<h3>Task 12: . Remove Item from List: Add a button that removes the last item from the 
list. </h3><RemoveTasks/><hr/>
<h3>Task 13:  State with Conditional Rendering: Display "List is empty" if the task list is 
empty using state.</h3><TaskListEmpty/><hr/>
<h3>  </h3><hr/>

<h3>Mini Project 1: Counter App </h3>   <CounterMini/> <hr/>
<h3>Mini Project 2: Name Display  </h3>   <TextInputMini/> <hr/>
<h3>Mini Project 3: Task List </h3>   <RemoveTasksMini/> <hr/>
<h3>Mini Project 4: Light Toggle  </h3>   <LightToggle/> <hr/>





</div>
  );
}

export default App;
