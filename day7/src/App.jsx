
import './App.css'
import ClickButton from './assets/components/ButtonClick'
import DisableButtonOnClick from './assets/components/DisableButton'
import EventObjectButton from './assets/components/EventObject'
import FormSubmit from './assets/components/FormSubmit'

import ClickButtonfn from './assets/components/FunctionBinding'
import InlineClickButton from './assets/components/InlineArrow'
import KeyPressInput from './assets/components/KeyPress'
import Counter from './assets/components/MiniProject1'
import NameForm from './assets/components/MiniProject2'
import ToggleParagraphMini from './assets/components/MiniProject3'
import DisableButtonOnClickMini from './assets/components/MiniProject4'
import MouseOverButton from './assets/components/MouseHover'
import ButtonClick from './assets/components/PassingArguement'
import PreventDefaultWithInput from './assets/components/PreventDefault'

import TextInput from './assets/components/TextInput'
import ToggleParagraph from './assets/components/Toggle'

function App() {
 

  return (
    <>
    <div className="output">
      <h1>Day 7 Tasks - Handling Events</h1>

    <hr/>
     <h3>Task 1: Introduction to Events: Write a short explanation of event handling in 
React. </h3><p>Event handling in React is the process of responding to user interactions such as clicks, form submissions, keyboard input, and more. React uses a synthetic event system, which is a cross-browser wrapper around the browser’s native event system. This ensures that events behave consistently across different browsers.

In React, events are handled using camelCase syntax (e.g., onClick, onChange) and are passed as functions.</p><hr/>
<h3>Task 2: Button Click Event: Create a button that displays "Button Clicked" in the 
console when clicked. </h3><ClickButton/><hr>
</hr>
<h3>Task 3: Function Binding in Functional Components: Create a button that calls a 
function using the onClick event handler. </h3><ClickButtonfn/><hr></hr>
<h3>Task 4: Inline Event Handler: Use an inline arrow function to handle button clicks.  </h3><InlineClickButton/><hr></hr>
<h3>Task 5: Event Object: Display the event object in the console when a button is 
clicked.  </h3><EventObjectButton/><hr/>
<h3>Task 6: Passing Arguments to Event Handlers: Create a button that displays "Hello, 
John" when clicked, passing "John" as an argument. </h3><ButtonClick/><hr/>
<h3>Task 7: Input Change Event: Display the current value of an input field as the user 
types. </h3><TextInput/><hr/>
<h3>Task 8 : Form Submit Event: Create a form with an input field and display the 
submitted value below the form on submit. </h3><FormSubmit/><hr/>
<h3>Task 9: Prevent Default Event: Use preventDefault() to stop the form from 
reloading the page on submit.</h3><PreventDefaultWithInput/><hr/>
<h3>Task 10: Toggle Visibility on Button Click: Show or hide a paragraph when a button 
is clicked.</h3><ToggleParagraph/><hr/>
<h3>Task 11: Mouse Over Event: Display "Mouse Over" in the console when hovering 
over a button.</h3><MouseOverButton/><hr/>
<h3>Task 12:  Keyboard Event: Display "Key Pressed" in the console when a key is pressed 
in an input field. </h3><KeyPressInput/><hr/>
<h3>Task 13: </h3><DisableButtonOnClick/><hr/>
<h3>Mini Project 1: Click Counter </h3> <Counter/> <hr/>
<h3>Mini Project 2: Name Form </h3> <NameForm/> <hr/>
<h3>Mini Project 3: Show/Hide Paragraph <ToggleParagraphMini/> </h3>  <hr/>
<h3>Mini Project 4: Disable After Click  </h3> <DisableButtonOnClickMini/> <hr/>
</div>














    </>
  )
}

export default App
