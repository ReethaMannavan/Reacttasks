import { useState } from "react";

import "./App.css";
import ComponentMount from "./assets/components/ComponentMount";
import EmptyDependency from "./assets/components/EmptyDependency";
import DependencyArray from "./assets/components/DependencyArray";
import UserNameAge from "./assets/components/NameAge";

import ToggleComponent from "./assets/components/ComponentUnmount";
import DataFetch from "./assets/components/APISimulation";
import TitleUpdate from "./assets/components/TitleUpdate";
import FormInput from "./assets/components/FormInput";
import EvenCounter from "./assets/components/Even";
import FakeApi from "./assets/components/FakeApi";
import DelayedApi from "./assets/components/DelayedApifetch";
import ButtonFetchApi from "./assets/components/ButtonClickApi";
import TitleUpdateMini from "./assets/components/MiniProject1";
import UserListApi from "./assets/components/MiniProject2";
import ShowHideTimer from "./assets/components/MiniProject3";
import SearchFilter from "./assets/components/MiniProject4";

function App() {
  return (
    <>
    <div className="output">

   
      <h2>
        1. Introduction to useEffect: Write a short explanation of what the
        useEffect hook is and why it is used.{" "}
      </h2>
      <p>
        useEffect is a React Hook that lets you perform side effect in a
        function components. Side effects includes tasks that happen outside of
        the component's rendering, such as fetching a data, subscribing to
        events, or modifying DOM. useEffects runs after the components render
        and can re-run when dependencies change. it ll be used in fetching data
        from API, updating the doucment title dynamically, setting up event
        listener, running code only component mount/unmount.
      </p>
      <hr />
      <h2>
        2. Basic useEffect Example: Use useEffect to display "Component Mounted"
        in the console when the component mounts.{" "}
      </h2>
      <ComponentMount />
      <hr />
      <h2>
        3. Effect with Empty Dependency Array: Use useEffect to log a message
        only once when the component mounts.{" "}
      </h2>
      <EmptyDependency /><hr />
      <h2>4. Effect with Dependency Array: Use useEffect to log a message whenever a
        counter state changes. </h2>
      <DependencyArray /><hr />

      <h2>5. Multiple useEffect Hooks: Create two useEffect hooks, one for logging
        name changes and another for age changes.  </h2>
      <UserNameAge /><hr />

      <h2>6. Cleanup Function: Use useEffect with a cleanup function to log
        "Component Unmounted" when the component is removed.</h2>
      <ToggleComponent /><hr />

      <h2>7. API Data Fetching Simulation: Use useEffect to log "Fetching Data..." when
        the component mounts. </h2>
      <DataFetch /><hr />

      <h2>8. Dynamic Title Update: Use useEffect to update the page title with the
        current counter value. </h2>

      <TitleUpdate /><hr />

      <h2>9. Form Input Logging: Log the value of an input field whenever it changes
        using useEffect. </h2>

      <FormInput /><hr />

      <h2>10. Condition-Based Side Effects: Display "Counter is Even" whenever the
        counter is an even number using useEffect. </h2>
      <EvenCounter /><hr />

      <h2>11. Fetching Data with Fake API: Use useEffect to fetch user data from a
        placeholder API like https://jsonplaceholder.typicode.com/users. </h2>

      <FakeApi /><hr />

      <h2>12. Delayed API Fetching: Use setTimeout inside useEffect to simulate delayed
        API fetching. </h2>
      <DelayedApi /><hr />

      <h2>13. Button Click API Fetching: Fetch data from an API only when a button is
        clicked. </h2>
      <ButtonFetchApi />
<h2>Mini Project 1: Counter with Title Update </h2>
<TitleUpdateMini/><hr/>
<h2>Mini Project 2: User List</h2>
<UserListApi/><hr/>

<h2>Mini Project 3: Show/Hide Timer </h2>
<ShowHideTimer/><hr/>
<h2>Mini Project 4: Search Filter </h2>
<SearchFilter/><hr/>


</div>

    </>
  );
}

export default App;
