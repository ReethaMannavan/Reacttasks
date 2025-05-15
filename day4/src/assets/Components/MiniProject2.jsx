const Hobbies = (props) => {
  return (
    <div>
      <h2>Hobbies:</h2>
      <ul>
        {props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
      </ul>
    </div>
  );
};

const HobbiesList = () => {
  return (
    <div>
      <Hobbies hobbies={['Reading', 'Drawing', 'Swimming']} />
    </div>
  );
};

export default HobbiesList;