import React from 'react';


const Status = ({ isStudent }) => {
  return (
    <h1>{isStudent ? 'Student' : 'Not a Student'}</h1>
  );
};


const BooleanProp = () => {
  return (
    <div>
      <Status isStudent={true} />
    </div>
  );
};
export default BooleanProp;