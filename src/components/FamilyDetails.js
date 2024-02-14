import React from 'react';

const FamilyDetails = ({ family }) => {
  return (
    <div>
      <h2>Family Details</h2>
      <p>Name: {family.name}</p>
    </div>
  );
};

export default FamilyDetails;
