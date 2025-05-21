function Greeting() {
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = 'Good Morning!';
  } else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon!';
  } else {
    greetingMessage = 'Good Evening!';
  }

  return <h1>{greetingMessage}</h1>;
}

export default Greeting;