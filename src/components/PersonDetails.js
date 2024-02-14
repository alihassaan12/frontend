import React from 'react';

const PersonDetails = ({ person }) => {
  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default PersonDetails;
