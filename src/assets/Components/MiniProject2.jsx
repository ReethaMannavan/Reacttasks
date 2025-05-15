function Greeting({ name }) {
  const style = {
    backgroundColor: '#cceeff', 
    padding: '10px 20px',
    borderRadius: '8px',
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:'40%'
  };

  return <div style={style}>Hello, {name}!</div>;
}


function Propsname() {
  return (
    <div>
      <Greeting name="Reetha Mannavan" />
    </div>
  );
}

export default Propsname