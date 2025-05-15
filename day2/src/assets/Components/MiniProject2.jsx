const Temperature = () => {
  const temp = 28;

  const status = temp > 30 
    ? 'Hot' 
    : temp < 15 
      ? 'Cold' 
      : 'Normal';

  
  const element = (
    <div>
      <h2>Temperature: {temp}°C</h2>
      <p>Status: {status}</p>
    </div>
  );

  return element;
};

export default Temperature;