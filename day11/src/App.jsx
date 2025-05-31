import { useState } from 'react'

import './App.css'
import BasicCounter from './assets/components/BasicCounter'
import InputField from './assets/components/InputField'
import ComponentMount from './assets/components/EmptyDependency'
import ChangeTitle from './assets/components/ChangeTitle'
import FetchApi from './assets/components/FetchApi'
import FetchApiList from './assets/components/ApiList'
import ConditionalFetch from './assets/components/ConditionalFetch'
import TimerApp from './assets/components/TimerCleanup'
import TogglePara from './assets/components/ToggleVisibliity'
import SearchFilter from './assets/components/SearchFilter'
import ButtonFetchApi from './assets/components/ButtonClickApi'
import DelayedApi from './assets/components/LoadingApi'
import AutoCounter from './assets/components/MiniProject1'
import SearchFilterMini from './assets/components/MiniProject2'
import ToggleApi from './assets/components/MiniProject3'

import RandomQuoteAPI from './assets/components/MiniProject4'


function App() {
 

  return (
    <>
      <div className='output'>

<h2>1. useState vs. useEffect Explanation: Write a short explanation of the 
difference between useState and useEffect. </h2>
<p>useState: It's used to Manage Component State.
Stores local state in a component. 
Re-renders the component when the state updates.</p>
<p>
   useEffect: It's used to Handle Side Effects. 
Runs after rendering to handle side effects. 
Can update state using useState.
</p><hr/>
<h2>2. Basic Counter with useState & useEffect: Create a counter that logs the 
updated count whenever the button is clicked. </h2>
<BasicCounter/><hr/>
<h2>3. Input Field with useState and useEffect: Display the input field value in the 
console whenever the user types. </h2>
<InputField/><hr/>
<h2>4. useEffect with Empty Dependency Array: Log "Component Mounted" only 
once when the component mounts. </h2>
<ComponentMount/><hr/>

<h2>5. useEffect with Dependency Array: Update the document title whenever 
the counter value changes. </h2>
<ChangeTitle/><hr/>

<h2>6. API Fetching with useEffect: Fetch user data from 
https://jsonplaceholder.typicode.com/users and display it in the console. </h2>
<FetchApi/><hr/>

<h2>7. Data Fetch with useState and useEffect: Store fetched data in state and 
display it in a list.</h2>
<FetchApiList/><hr/>


<h2>8. Conditional Data Fetching: Fetch data only when a button is clicked and 
store the data using useState. </h2>
<ConditionalFetch/><hr/>

<h2>9. Timer with Cleanup Function: Create a timer that updates the count every 
second and stops when the component is removed. </h2>
<TimerApp/><hr/>
<h2>10. Toggle Visibility with useState: Toggle the visibility of a paragraph using a 
button and useState. </h2>
<TogglePara/><hr/>

<h2>11. Search Filter with useEffect: Filter a list of users by name whenever the 
input field value changes. </h2>
<SearchFilter/><hr/>
<h2>12. Fetch Data on Button Click: Use useState and useEffect to fetch and display 
user data only when a button is clicked. </h2>
<ButtonFetchApi/><hr/>

<h2>13. Loading State with API Fetch: Display "Loading..." while fetching data and 
show the data when it's loaded. </h2>
<DelayedApi/>
<hr/>



<h2>Mini Project 1: Counter with Auto Update </h2><AutoCounter/><hr/>
<h2>Mini Project 2: Search User List </h2> <SearchFilterMini/><hr/>
<h2>Mini Project 3: Toggle API Data </h2><ToggleApi></ToggleApi><hr/>
<h2>Mini Project 4: Random Quote Generator </h2><RandomQuoteAPI/>


























        </div>
    </>
  )
}

export default App
