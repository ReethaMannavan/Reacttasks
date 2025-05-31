import  { useState, useEffect } from 'react';


function Unmount() {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return <div> Component Mounted </div>;
}


function ToggleComponent() {
  const [show, setShow] = useState(true);

  const toggleComponent = () => {
    setShow(prev => !prev);
  };

  return (
    <div>
      <h2>Toggle Component</h2>
      <button onClick={toggleComponent}>
        {show ? 'Unmount' : 'Mount'} 
      </button>
      <hr />
      {show && <Unmount />}
    </div>
  );
}

export default ToggleComponent;