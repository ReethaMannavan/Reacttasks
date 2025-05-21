function TimeOfDayGreeting() {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = 'Morning';
  } else if (currentHour < 18) {
    greeting = 'Afternoon';
  } else {
    greeting = 'Evening';
  }

  return <h1>Good {greeting}!</h1>;
}

export default TimeOfDayGreeting;